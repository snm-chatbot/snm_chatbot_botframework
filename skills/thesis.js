module.exports = function(controller) {

    //------------------------------------------------
    //--------------DIPLOMKA - ZADÁNÍ-----------------
    //------------------------------------------------
    //odevzdání zadání - do kdy
    controller.hears(['(?=.*kdy)(?=.*odevzdat)(?=.*zad[aá]n[ií])' +
    '(?=.*(diplomk[aouy]|diplomce|diplomov[aáéo]u* pr[aá]c[eií]))*'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'odevzdání zadání do kdy');
        }, 2000);
    });

    //odevzdání zadání - komu
    controller.hears(['(?=.*(komu|kam|kde))(?=.*odevzdat)(?=.*zad[aá]n[ií])' +
    '(?=.*(diplomk[aouy]|diplomce|diplomov[aáéo]u* pr[aá]c[eií]))*'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'odevzdání zadání komu');
        }, 2000);
    });

    //téma - jaké
    controller.hears(['(?=.*jak[eéyýo]u*)((?=.*t[eé]ma)*|(?=.*zad[aá]n[ií])*)' +
    '(?=.*(diplomk[aouy]|diplomce|diplomov[aáéo]u* pr[aá]c[eií]))*'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'téma jaké');
        }, 2000);
    });

    //téma - obhájené
    controller.hears(['(?=.*obh[aá]jen[eéyý])' +
    '(?=.*(diplomk[aouy]|diplomce|diplomov[aáéo]u* pr[aá]c[eií]))*'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'téma obhájené');
        }, 2000);
    });

    //téma - konzultace
    controller.hears(['(?=.*(konzultac[eií]|konzultovat|probrat))' +
    '(?=.*(diplomk[aouy]|diplomce|diplomov[aáéo]u* pr[aá]c[eií]))'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'téma konzultace');
        }, 2000);
    });

    //téma - schválení
    controller.hears(['(?=.*(schv[aá]lit|schv[aá]len[ií]|schvaluje))' +
    '(?=.*(zad[aá]n[ií]m*|diplomk[aouy]|diplomce|diplomov[aáéo]u* pr[aá]c[eií]))'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'téma schválení');
        }, 2000);
    });

    //zadání - formát
    controller.hears(['(?=.*(form[aá]t(em)*|vypadat|obsahovat))(?=.*zad[aá]n[ií]m*)' +
    '(?=.*(diplomk[aouy]|diplomce|diplomov[aáéo]u* pr[aá]c[eií]))*'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'zadání formát');
        }, 2000);
    });

    //zadání - jazyk práce
    controller.hears(['(?=.*(jazyk(em)*|jazyce|angli[cč]tin[eě]|anglick[eé]m jazyce))' +
    '(?=.*(zad[aá]n[ií]m*|diplomk[aouy]|diplomce|diplomov[aáéo]u* pr[aá]c[eií]))'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'jazyk práce');
        }, 2000);
    });

    //------------------------------------------------
    //--------------DIPLOMKA - PRÁCE------------------
    //------------------------------------------------
    //odevzdání diplomky - do kdy
    controller.hears(['(?=.*kdy)(?=.*odevzdat)' +
    '(?=.*(diplomk[aouy]|diplomce|diplomov[aáéo]u* pr[aá]c[eií]))'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'diplomka do kdy');
        }, 2000);
    });

    //odevzdání diplomky - komu
    controller.hears(['(?=.*(komu|kam|kde))(?=.*odevzdat)' +
    '(?=.*(diplomk[aouy]|diplomce|diplomov[aáéo]u* pr[aá]c[eií]))'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'diplomka komu');
        }, 2000);
    });

    //obhajoba diplomky
    controller.hears(['(?=.*(obh[aá]jit|obhajovat|obhajoba))' +
    '(?=.*(diplomk[aouy]|diplomce|diplomov[aáéo]u* pr[aá]c[eií]))'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'diplomka obhajoba');
        }, 2000);
    });

    //vypracování diplomky
    controller.hears(['(?=.*(form[aá]t(em)*|vypadat|obsahovat|[sš]ablona|vzor(ov[aá])*|p[rř]ipravit))' +
    '(?=.*(diplomk[aouy]|diplomce|diplomov[aáéo]u* pr[aá]c[eií]))'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'diplomka obsah');
        }, 2000);
    });

    //hodnocení diplomky
    controller.hears(['(?=.*(o*hodnocen[aiío]|o*hodnot[ií]t*|o*zn[aá]mkovat|o*zn[aá]mkuje|posudek|posuzov[aá]na|posuzuje|klasifikac[ei]|klasifikuje|klasifikov[aá]n[aáií]))' +
    '(?=.*(diplomk[aouy]|diplomce|diplomov[aáéo]u* pr[aá]c[eií]))'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'diplomka hodnocení');
        }, 2000);
    });

    //------------------------------------------------
    //-------------DIPLOMKA - FALLBACK----------------
    //------------------------------------------------
    //hears diplomka TODO
    controller.hears('(?=.*(diplomk[aouy]|diplomce|diplomov[aáéo]u* pr[aá]c[eií]))', 'message_received', function(bot, message) {
        var thesis = {
            attachments: [
                {
                    contentType: 'application/vnd.microsoft.card.hero',
                    content: {
                        title: 'Co potřebuješ vědět?',
                        buttons: [
                            {
                                type: 'postBack',
                                title: 'kdy musím odevzdat zadání',
                                value: 'kdy odevzdat zadani'
                            },
                            {
                                type: 'postBack',
                                title: 'komu musím odevzdat zadání',
                                value: 'komu odevzdat zadani'
                            },
                            {
                                type: 'postBack',
                                title: 'jaké můžu mít téma diplomky',
                                value: 'jake tema diplomka'
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
                                title: 'kdo mi schválí téma diplomky',
                                value: 'schvalit diplomka'
                            },
                            {
                                type: 'postBack',
                                title: 'v jakém jazyce psát zadání práce',
                                value: 'jazyk zadani'
                            },
                            {
                                type: 'postBack',
                                title: 'kdy musím odevzdat diplomku',
                                value: 'kdy odevzdat diplomka'
                            },
                            {
                                type: 'postBack',
                                title: 'komu musím odevzdat diplomku',
                                value: 'komu odevzdat diplomka'
                            },
                            {
                                type: 'postBack',
                                title: 'kdy můžu k obhajobě diplomky',
                                value: 'obhajit diplomka'
                            },
                            {
                                type: 'postBack',
                                title: 'co musí obsahovat diplomka',
                                value: 'schvalit diplomka'
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
