var giphy = require('giphy-api')();

module.exports = function(controller) {
    controller.hears(['techno'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Říkal někdo #SNMBerlin?');
        }, 2000);
    });

    controller.hears(['kdy .* snmbeer', 'kde .* snmbeer'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Vim já? Studuju snad StuNoMe? Zeptej se spolužáků!');
        }, 2000);
    });

    controller.hears(['snmbeer'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Naprosto nepravidelná akce kolektivu SNM, kde se lidé snaží dosáhnout pokročilého stavu mentální inkompetence opakovanou konzumací fermentovaných rostlinných nápojů. Nenech si to ujít.');
        }, 2000);
    });

    controller.hears(['zeman', 'kundo', 'kunda'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Kunda sem, kunda tam.');
        }, 2000);
    });

    controller.hears(['v[sš]ichni jsou mrtv[ií]'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'I Kochanská?');
        }, 2000);
    });

    controller.hears(['kolik[áa]t[yý]ho je', 'datum', 'kolik je hodin', 'kolik je?'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Je právě tolik, kolik je');
        }, 2000);
    });

    controller.hears(['zmrde', 'dr[zž] hubu', 'naser si', 'kurvo', 'j?di do p[ií][cč]i', 'jdi do hajzlu', 'kokote', 'debile', 'p[ií]pcč]o', 'na[zž]er se hoven', 'polyk[aá][sš]', 'na hovno'], 'message_received', function(bot, message) {
        giphy.random('fuck you', function (err, res) {
            var gifmessage = 'Tak to fakt nevím, sorry jako.';
            if (res.data.id) {
                gifmessage = {
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
            bot.reply(message, gifmessage);
        });
    });

    controller.hears(['^giphy (.*)', '^gif (.*)', '^lol$'], 'message_received', function (bot, message) {
        var gif = message.match[1];
        giphy.random(gif, function (err, res) {
            var gifmessage = 'Tak to fakt nevím, sorry jako.';
            if (res.data.id) {
                gifmessage = {
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
            bot.reply(message, gifmessage);
        });
    });
};
