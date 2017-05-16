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

    controller.hears(['za[cč][ií]n[aá] semestr', 'za[cč][ií]n[aá] akademick[yý]','za[cč][ií]n[aá] ls','kon[cč][ií] semestr','kon[cč][ií] ls','kon[cč][ií] akademický','za[cč][ií]n[aá] zs','kon[cč][ií] zs', 'kdy .* akademick[yý] rok'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Většinou škola začíná na přelomu září a října, v lednu máš zkouškový. Letňák začíná tak v půlce února a končí na konci května. Celej akademickej rok končí na konci září. Každý rok se to trochu liší, radši mrkni na harmonogram tady: http://www.ff.cuni.cz/fakulta/predpisy-a-dokumenty/opatreni-dekana/harmonogram/');
        }, 2000);
    });

    controller.hears(['kdy .* zkou[sš]kov[eéyý]'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Většinou klasicky leden až půlka února a pak půlka května až konec června. Ale pozor, často máš "zkouškový" až do září, ale radši se ujisti u přednášejícího!');
        }, 2000);
    });
};
