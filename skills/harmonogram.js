module.exports = function(controller) {
    //rozvrh
    controller.hears('rozvrh', 'message_received', function(bot, message) {
        bot.reply(message, { type: 'typing' });
        setTimeout(function() {
            bot.reply(message, 'Here you go! 👉 http://bit.ly/stunome_harmonogram');
        }, 2000);
    });
    //harmonogram
    controller.hears('harmonogram', 'message_received', function(bot, message) {
        var harmonogram = {
            attachments: [
                {
                    contentType: 'application/vnd.microsoft.card.hero',
                    content: {
                        title: 'Jaký harmonogram tě zajímá?',
                        buttons: [
                            {
                                type: 'openUrl',
                                title: 'podrobný harmonogram roku',
                                value: 'http://www.ff.cuni.cz/fakulta/predpisy-a-dokumenty/opatreni-dekana/harmonogram/'
                            },
                            {
                                type: 'openUrl',
                                title: 'hlavně rozvrh',
                                value: 'http://novamedia.ff.cuni.cz/studium/rozvrh-harmonogram-semestru/'
                            }
                        ]
                    }
                }
            ]
        };
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, harmonogram);
        }, 2000);
    });
};
