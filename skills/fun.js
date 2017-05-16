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

    controller.hears(['^giphy (.*)', '^gif (.*)'], 'message_received', function (bot, message) {
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
