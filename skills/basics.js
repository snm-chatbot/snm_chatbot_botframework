var os = require('os');
var giphy = require('giphy-api')();

module.exports = function(controller) {


    controller.hears(['^ahoj', '^[cč]au', '^zdravim', '^nazdar', '^hoj', '^get started'], 'message_received', function(bot, message) {

        var responses = [
            'Ahoj 👋',
            'Čau 👋',
            'Čus 👋',
            'Nazdar 👋',
            'Těpic 👋',
            'Roar 🦁',
            '👋'
        ];
        var messageContent = responses[Math.floor(Math.random() * responses.length)];
        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                messageContent = messageContent + ' ' + user.name + '!!';
            }
        });
        bot.startConversation(message, function(err, convo) {

            giphy.random('cat', function(err, res) {
                if (res.data.id) {
                    var gif = {
                        attachments: [
                            {
                                contentType: 'application/vnd.microsoft.card.animation',
                                content: {
                                    media: [{url: res.data.fixed_height_downsampled_url, profile: 'animation'}],
                                    autoloop: true,
                                    autostart: true
                                }
                            }
                        ]
                    };
                }
                bot.reply(message, {type: 'typing'});
                setTimeout(function() {
                    convo.say(messageContent);
                    convo.say(gif);
                }, 2000);
            });
            convo.next();
        });
    });

    controller.hears(['jak je', 'jak se m[aá][sš]', 'jak se da[rř][ií]', '^jaksemas'], 'message_received', function(bot, message) {
        var askUser = function(err, convo) {
            bot.reply(message, {type: 'typing'});
            setTimeout(function() {
                convo.ask('U mě dobrý. Co u tebe?', function(response, convo) {
                    convo.say('Cool cool cool.');
                    convo.next();
                });
            }, 2000);
        };

        bot.startConversation(message, askUser);
    });

    controller.hears(['^hi', '^hello', 'how are you'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Mluv prosimtě česky, jo?');
        }, 2000);
    });

    controller.hears(['^[rř][ií]kej mi (.*)', '^jmenuj[ui] se (.*)'], 'message_received', function(bot, message) {
        var name = message.match[1];
        controller.storage.users.get(message.user, function(err, user) {
            if (!user) {
                user = {
                    id: message.user,
                };
            }
            user.name = name;
            controller.storage.users.save(user, function(err, id) {
                bot.reply(message, {type: 'typing'});
                setTimeout(function() {
                    bot.reply(message, 'Jasně, budu ti říkat ' + user.name);
                }, 2000);
            });
        });
    });

    controller.hears(['jak se jmenuj[ui]', 'who am i'], 'message_received', function(bot, message) {
        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, {type: 'typing'});
                setTimeout(function() {
                    bot.reply(message, 'Jsi ' + user.name);
                }, 2000);
            } else {
                bot.startConversation(message, function(err, convo) {
                    if (!err) {
                        convo.say('To přece ještě nevim!');
                        convo.ask('Jak ti mám říkat?', function(response, convo) {
                            convo.ask('Chceš abych ti říkal `' + response.text + '`?', [
                                {
                                    pattern: '(ano|jo)',
                                    callback: function(response, convo) {
                                        // since no further messages are queued after this,
                                        // the conversation will end naturally with status == 'completed'
                                        convo.next();
                                    }
                                },
                                {
                                    pattern: 'ne',
                                    callback: function(response, convo) {
                                        // stop the conversation. this will cause it to end with status == 'stopped'
                                        convo.stop();
                                    }
                                },
                                {
                                    default: true,
                                    callback: function(response, convo) {
                                        convo.repeat();
                                        convo.next();
                                    }
                                }
                            ]);

                            convo.next();

                        }, {'key': 'nickname'}); // store the results in a field called nickname

                        convo.on('end', function(convo) {
                            if (convo.status === 'completed') {
                                bot.reply(message, 'OK! Budu si to pamatovat.');

                                controller.storage.users.get(message.user, function(err, user) {
                                    if (!user) {
                                        user = {
                                            id: message.user,
                                        };
                                    }
                                    user.name = convo.extractResponse('nickname');
                                    controller.storage.users.save(user, function(err, id) {
                                        bot.reply(message, 'Jasan, budu ti říkat ' + user.name);
                                    });
                                });


                            } else {
                                // this happens if the conversation ended prematurely for some reason
                                bot.reply(message, 'OK, nevadí!');
                            }
                        });
                    }
                });
            }
        });
    });

    controller.hears(['shutdown'], 'message_received', function(bot, message) {

        bot.startConversation(message, function(err, convo) {

            convo.ask('Opravdu?', [
                {
                    pattern: bot.utterances.yes,
                    callback: function(response, convo) {
                        convo.say('Ahoj!');
                        convo.next();
                        setTimeout(function() {
                            process.exit();
                        }, 3000);
                    }
                },
                {
                    pattern: bot.utterances.no,
                    default: true,
                    callback: function(response, convo) {
                        convo.say('*Phew!*');
                        convo.next();
                    }
                }
            ]);
        });
    });

    controller.hears(['p[rř]edstav se', 'kdo j*si', 'jak se jmenuje[sš]', 'co si za[cč]'], 'message_received', function(bot, message) {
        var gif = {
            attachments: [
                {
                    contentType: 'application/vnd.microsoft.card.animation',
                    content: {
                        media: [{url: 'https://media.giphy.com/media/gf6iP1NIcDk7S/giphy.gif', profile: 'animation'}],
                        autoloop: true,
                        autostart: true
                    }
                }
            ]
        };
        var help = {
            attachments: [
                {
                    contentType: 'application/vnd.microsoft.card.hero',
                    content: {
                        buttons: [
                            {
                                type: 'postBack',
                                title: 'potřebuji pomoct',
                                value: 'help'
                            }
                        ]
                    }
                }
            ]
        };
        bot.reply(message, gif);
        setTimeout(function() {
            bot.reply(message,
                'Jsem lev 🦁 zvaný Manovich a jsem první bot StuNoMe. ' +
                'Ptát se mě můžeš na cokoliv ohledně studia, když nebudu vědět odpověď, ' +
                'pošlu ti gif se smutýma koťátkama. A pokud na tom budeš hodně špatně, tak si klikni o "pomoc".');
            setTimeout(function() {
                bot.reply(message, help);
            }, 2000);
        }, 2000);
    });

    controller.hears(['^d[ií]k', '^d[eě]kuju', 'danke', 'thanks', 'thx'], 'message_received', function(bot, message) {
        giphy.random('np', function(err, res) {
            if (res.data.id) {
                var gif = {
                    attachments: [
                        {
                            contentType: 'application/vnd.microsoft.card.animation',
                            content: {
                                media: [{url: res.data.fixed_height_downsampled_url, profile: 'animation'}],
                                autoloop: true,
                                autostart: true
                            }
                        }
                    ]
                };
            }
            var responses = [
                'nz',
                'Nemáš zač',
                'Nemáš zač',
                'Nemáš zač',
                'V pohodě',
                'Jasně',
                '👍'
            ];
            var response = responses[Math.floor(Math.random() * responses.length)];
            bot.reply(message, {type: 'typing'});
            setTimeout(function() {
                bot.reply(message, response);
                bot.reply(message, gif);
            }, 2000);
        });
    });

    controller.hears(['^tak ahoj', '^tak [cč]au', '^sbohem', '^m[eě]j se', '^pa'], 'message_received', function(bot, message) {
        giphy.random('bye', function(err, res) {
            if (res.data.id) {
                var gif = {
                    attachments: [
                        {
                            contentType: 'application/vnd.microsoft.card.animation',
                            content: {
                                media: [{url: res.data.fixed_height_downsampled_url, profile: 'animation'}],
                                autoloop: true,
                                autostart: true
                            }
                        }
                    ]
                };
            }
            bot.reply(message, {type: 'typing'});
            setTimeout(function() {
                bot.reply(message, 'Ahoj! Přijď si zase někdy pokecat!');
                bot.reply(message, gif);
            }, 2000);
        });
    });

    controller.hears(['jak .* funguje[sš]', 'na [cč]em b[eě][zž][ií][sš]?'], 'message_received', function(bot, message) {
        bot.reply(message, 'Moje jádro je postavený na Botkitu a běží na Heroku. ' +
            'Tady si s tebou povídám díky Bot Frameworku od Microsoftu a jestli se mi chceš podívat na zoubek, tak' +
            'mě najdeš i na GitHubu.');
    });

    controller.hears(['uptime'], 'message_received', function(bot, message) {

        var hostname = os.hostname();
        var uptime = formatUptime(process.uptime());

        bot.reply(message,
            ':|] Jsem bot a běžím už ' + uptime + ' na ' + hostname + '.');
    });

    controller.hears('^ping', function(bot, message) {
        bot.reply(message, 'pong');
    });

    /* Utility function to format uptime */
    function formatUptime(uptime) {
        var unit = 'second';
        if (uptime > 60) {
            uptime = uptime / 60;
            unit = 'minute';
        }
        if (uptime > 60) {
            uptime = uptime / 60;
            unit = 'hour';
        }
        if (uptime !== 1) {
            unit = unit + 's';
        }

        uptime = parseInt(uptime) + ' ' + unit;
        return uptime;
    }

};
