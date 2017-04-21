var giphy = require('giphy-api')();

module.exports = function(controller) {
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
