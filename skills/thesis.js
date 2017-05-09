module.exports = function(controller) {
    //odevzdání zadání - do kdy, komu
    controller.hears('(?=.*kdy|komu|kam|kde)(?=.*odevzdat)(?=.*zad[aá]n[ií])', 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Vypracované zadání diplomky odevzdej vedoucímu oboru a tajemníkovi oboru vždy k jednomu ze tří termínů:' +
                '<br>📅 1. září,<br>📅 1. leden,<br>📅 1. května.<br>Víc najdeš tady 👉 http://bit.ly/stunome_diplomka');
        }, 2000);
    });
    //zadání - formát
    controller.hears('(?=.*(form[aá]t|vypadat|obsahovat))(?=.*zad[aá]n[ií])', 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Pro zadání neexistuje žádný formulář, tak ho dostatečně konzultuj se svým vedoucím. Zadání musí obsahovat tyto povinné náležitosti:');
            setTimeout(function() {
                bot.reply(message, '❗název práce<br>❗název práce v anglickém jazyce<br>❗jazyk práce<br>❗vedoucí práce' +
                    '<br>❗autor práce<br>❗zásady pro vypracování práce<br>❗seznam odborné literatury<br>Víc najdeš tady 👉 http://bit.ly/stunome_diplomka');
            }, 2000);
        }, 2000);
    });
    //téma - jaké
    controller.hears('((?=.*jak[eéyýo])((?=.*t[eé]ma)|(?=.*zad[aá]n[ií]))' +
        '|(na co|o [cč]em).*(zad[aá]n[ií]|diplomk[aouy]|diplomce|diplomov[aáéo] pr[aá]c[eií]))', 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Vyučující nevypisují vlastní témata v SISu – je na tobě, abys přišel s nejvíc epic nápadem a zkonzultoval ho s vedoucím oboru.' +
                ' K obhajobě diplomky můžeš přistoupit nejdříve rok po jejím zadání, tak neotálej. Víc najdeš tady 👉 http://bit.ly/stunome_diplomka');
        }, 2000);
    });
    //téma - obhájené
    controller.hears('(?=.*obh[aá]jen[eéyý])', 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Inspirovat se obhájenými diplomkami můžeš tady 👉 http://bit.ly/stunome_obhajene');
        }, 2000);
    });
    //téma - konzultace, schválení
    controller.hears('((?=.*(konzultac[eií]|konzultovat|probrat))|(?=.*(schv[aá]lit|schv[aá]len[ií]|schvaluje)))' +
    '(?=.*(zad[aá]n[ií]|diplomk[aouy]|diplomce|diplomov[aáéo] pr[aá]c[eií]))', 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Zadání konzultuj se svým vedoucím. Vypracované zadání pak odevzdej vedoucímu oboru a tajemníkovi oboru.' +
                ' Víc najdeš tady 👉 http://bit.ly/stunome_diplomka');
        }, 2000);
    });
    //zadání - jazyk práce
    controller.hears('(?=.*(jazy[(k|ce)]|angli[cč]tin[eě]|anglick[eé]m jazyce))' +
    '(?=.*(zad[aá]n[ií]|diplomk[aouy]|diplomce|diplomov[aáéo] pr[aá]c[eií]))', 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Pokud chceš práci psát v jiném než v českém či anglickém jazyce,' +
                ' konzultuj to předem s tajemníkem oboru a doplň ještě název práce v jazyce práce. Kontakt na Jakuba Fialu najdeš tady 👉 http://bit.ly/stunome_kontakty');
        }, 2000);
    });
    //obhajoba diplomky
    controller.hears('(?=.*(obh[aá]jit|obhajo(vat|ba)))' +
    '(?=.*(diplomk[aouy]|diplomce|diplomov[aáéo] pr[aá]c[eií]))', 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'K obhajobě diplomky můžeš přistoupit nejdříve rok po jejím zadání, tak neotálej. Víc najdeš tady 👉 http://bit.ly/stunome_diplomka');
        }, 2000);
    });
    //vypracování diplomky
    controller.hears('(?=.*(form[aá]t|vypadat|obsahovat|[sš]ablona|vzor|p[rř]ipravit))' +
    '(?=.*(diplomk[aouy]|diplomce|diplomov[aáéo] pr[aá]c[eií]))', 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Formální doporučení pro vypracování, včetně vzorové šablony najdeš tady 👉 http://bit.ly/stunome_diplomka_pravidla');
            bot.reply(message, 'Stručný popis požadavků na obsah diplomky zde 👉 http://bit.ly/stunome_diplomka');
        }, 2000);
    });
    //hodnocení diplomky
    controller.hears('(?=.*(hodnocen[aiío]|hodnot[ií]|zn[aá]mkovat|zn[aá]mkuje|posudek|posuzov[aá]na|posuzuje|klasifikac[ei]|klasifikuje|klasifikov[aá]n[aáií]))' +
    '(?=.*(diplomk[aouy]|diplomce|diplomov[aáéo] pr[aá]c[eií]))', 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Při tvorbě posudků vedoucích, oponentů i konzultantů se používájí hodnotící tabulky,' +
                ' které najdeš tady 👉 http://bit.ly/stunome_diplomka_hodnoceni');
        }, 2000);
    });
    //fallback -> hears diplomka
    controller.hears('(?=.*(diplomk[aouy]|diplomce|diplomov[aáéo] pr[aá]c[eií]))', 'message_received', function(bot, message) {
        var thesis = {
            attachments: [
                {
                    contentType: 'application/vnd.microsoft.card.hero',
                    content: {
                        title: 'Co ohledně diplomky potřebuješ vědět?',
                        buttons: [
                            {
                                type: 'postBack',
                                title: 'jaké můžu mít téma diplomky',
                                value: 'jake tema diplomka'
                            },
                            {
                                type: 'postBack',
                                title: 'jak má zadání vypadat',
                                value: 'format zadani'
                            },
                            {
                                type: 'postBack',
                                title: 'kdy a komu odevzdat zadání',
                                value: 'kdy odevzdat zadani'
                            },
                            {
                                type: 'postBack',
                                title: 'příklady obhájených diplomek',
                                value: 'obhajene diplomka'
                            },
                            {
                                type: 'postBack',
                                title: 's kým konzultovat téma diplomky',
                                value: 'konzultace diplomka'
                            },
                            {
                                type: 'postBack',
                                title: 'v jakém jazyce psát zadání práce',
                                value: 'jazyk zadani'
                            },
                            {
                                type: 'postBack',
                                title: 'kdy a komu odevzdat diplomku',
                                value: 'kdy odevzdat diplomka'
                            },
                            {
                                type: 'postBack',
                                title: 'kdy můžu k obhajobě diplomky',
                                value: 'obhajit diplomka'
                            },
                            {
                                type: 'postBack',
                                title: 'co musí obsahovat diplomka',
                                value: 'format diplomka'
                            },
                            {
                                type: 'postBack',
                                title: 'jak se hodnotí diplomka',
                                value: 'hodnocena diplomka'
                            }
                        ]
                    }
                }
            ]
        };
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, thesis);
        }, 2000);
    });
};
