module.exports = function(controller) {
    //praxe
    controller.hears('prax[ei]', 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Vše o praxi se dočteš tady 👉 http://bit.ly/stunome_praxe');
        }, 2000);
    });
    //blogy
    controller.hears(['blog', 'blogy', 'studentsk[eéyý] blogy*'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Chceš si přečíst nejnovější literární mini-díla našich studentů? Vyber si tady 👉 http://bit.ly/stunome_blogy.');
        }, 2000);
    });
    //tajemnik
    controller.hears(['tajemn[ií]k', 'tajemn[ií]k oboru', 'tajemn[ií]k stunome', 'jakub fiala', 'fiala jakub', 'fiala'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Tajemník našeho oboru je one & only Mgr. Jakub Fiala.<br>📧 fiala.jakub@gmail.com <br>📱 +420 221 619 910');
        }, 2000);
    });
    //kontakt na stunome
    controller.hears(['kontakt', 'telefon', 'e*mail', 'telefonn[ií] [cč][ií]slo'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Všechny důležité kontakty najdeš tady 👉 http://bit.ly/stunome_kontakty');
        }, 2000);
    });
    //social
    controller.hears('((soci[aá]ln[ií](ch)* (s[ií]t[eě]|s[ií]t[ií](ch)*|s[ií][tť]))|(facebook)|(twitter)|(youtube)|(slideshare))', 'message_received', function(bot, message) {
        var social = {
            attachments: [
                {
                    contentType: 'application/vnd.microsoft.card.hero',
                    content: {
                        title: 'Na internetech nás najdeš tady',
                        buttons: [
                            {
                                type: 'openUrl',
                                title: 'twitter',
                                value: 'https://twitter.com/stunome'
                            },
                            {
                                type: 'openUrl',
                                title: 'facebook',
                                value: 'https://www.facebook.com/stunome'
                            },
                            {
                                type: 'openUrl',
                                title: 'youtube',
                                value: 'https://www.youtube.com/user/stunome'
                            },
                            {
                                type: 'openUrl',
                                title: 'slideshare',
                                value: 'http://www.slideshare.net/stunome'
                            }
                        ]
                    }
                }
            ]
        };
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, social);
        }, 2000);
    });
};
