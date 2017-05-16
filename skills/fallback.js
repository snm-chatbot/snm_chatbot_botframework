var giphy = require('giphy-api')();
var Wordhop = require('wordhop');
var apiKey = process.env.WORDHOP_API_KEY; // <= key provided by Wordhop for Slack
var clientKey = process.env.WORDHOP_CLIENT_KEY; // <= key provided by Wordhop for Slack
var botPlatform = 'microsoft'; // <= possible values: 'messenger', 'slack', 'microsoft'
var token = process.env.MESSENGER_PAGE_ACCESS_TOKEN; // <= to see profile image in transcript for Messenger channel, you must include
var wordhop = Wordhop(apiKey, clientKey, {platform: botPlatform, token:token});

module.exports = function(controller) {

    controller.hears(['(help|pomoc)', 'co um[ií][šs]', '^wtf$'], 'message_received', function (bot, message) {
        var skills = {
            attachments: [
                {
                    contentType: 'application/vnd.microsoft.card.receipt',
                    content: {
                        title: 'Umím odpovědět na otázky ohledně:',
                        items: [
                            {
                                title: 'Harmonogramu',
                                subtitle: 'důležité termíny, rozvrh. atd.'
                            },
                            {
                                title: 'Přijímacího řízení',
                                subtitle: 'přihláška, přijímačky, atd.'
                            },
                            {
                                title: 'Státnic',
                                subtitle: 'okruhy, otázky, atd.'
                            },
                            {
                                title: 'Diplomky',
                                subtitle: 'termíny, témata, atd.'
                            },
                            {
                                title: 'Studijního plánu',
                                subtitle: 'plán studia, informace o předmětech, atd.'
                            },
                            {
                                title: 'Studia v zahraničí',
                                subtitle: 'Erasmus, studium mimo Evropu, atd.'
                            },
                            {
                                title: 'Lidech na stunome',
                                subtitle: 'vyučující, studenti, atd.'
                            },
                            {
                                title: 'A spousta dalšího...',
                                subtitle: 'praxe, blogy, kontakty, facebooky, atd.'
                            },
                            {
                                title: 'Bonus navíc - umím gify',
                                subtitle: 'zkus napsat gif + co tě napadne (anglicky) a uvidíš 🦄'
                            }
                        ]
                    }
                }
            ]
        }
        setTimeout(function() {
            bot.reply(message, skills);
        }, 2000);
    });

    controller.on('message_received', function(bot, message) {
        giphy.random('idk', function (err, res) {
            if (res.data.id) {
                var gif = {
                    attachments: [
                        {
                            contentType: 'application/vnd.microsoft.card.animation',
                            content: {
                                media: [{ url: res.data.fixed_height_downsampled_url, profile: "animation" }],
                                autoloop: true,
                                autostart: true
                            }
                        }
                    ]
                };
            }
            var responses = [
                'Teď ti moc nerozumím.',
                'Cože??',
                'Znovu a lépe.',
                'WTF.',
                '¯\_(ツ)_/¯',
                'tlhIngan Hol vIjatlhlaHbe\'.', //Neumím hovořit klingonsky. :D
            ];
            var response = responses[Math.floor(Math.random() * responses.length)];
            var help = {
                attachments: [
                    {
                        contentType: 'application/vnd.microsoft.card.hero',
                        content: {
                            buttons: [
                                {
                                    type: 'postBack',
                                    title: 'ukaž, co umíš',
                                    value: 'help'
                                }
                            ]
                        }
                    }
                ]
            };
            wordhop.logUnkownIntent(message);
            bot.reply(message, {type: 'typing'});
            setTimeout(function() {
                bot.reply(message, gif);
                bot.reply(message, response + ' Zkus něco jiného nebo se podívej, co všechno umím...');
                setTimeout(function() {
                    bot.reply(message, help);
                }, 2000);
            }, 2000);
            return false;
        });
    });
};
