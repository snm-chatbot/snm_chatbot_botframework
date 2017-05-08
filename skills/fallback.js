var giphy = require('giphy-api')();

module.exports = function(controller) {

    controller.hears(['(help|pomoc(t)*)'], 'message_received', function (bot, message) {
        var skills = {
            attachments: [
                {
                    contentType: 'application/vnd.microsoft.card.receipt',
                    content: {
                        title: 'Umím odpovědět na otázky ohledně:',
                        items: [
                            {
                                title: 'Přijímacího řízení',
                                subtitle: 'přihláška, přijímačky, atd.'
                            },
                            {
                                title: 'Harmonogramu',
                                subtitle: 'důležité termíny, rozvrh. atd.'
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
                                title: 'Lidech na stunome',
                                subtitle: 'vyučující, studenti, atd.'
                            },
                            {
                                title: 'Bonus navíc - umím gify',
                                subtitle: 'zkus napsat gif + co tě napadne (anglicky) a uvidíš ;)'
                            }
                        ]
                    }
                }
            ]
        }
        bot.reply(message, skills);
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
            bot.reply(message, gif);
            setTimeout(function() {
                bot.reply(message, response + ' Zkus něco jiného nebo se podívej, co všechno umím...');
                bot.reply(message, help);
            }, 2000);
            return false;
        });
    });
};
