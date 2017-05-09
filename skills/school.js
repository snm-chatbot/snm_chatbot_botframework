module.exports = function(controller) {
    controller.hears('rozvrh', 'message_received', function(bot, message) {
        bot.reply(message, { type: 'typing' });
        setTimeout(function() {
            bot.reply(message, 'Here you go! 👉 http://bit.ly/stunome_harmonogram');
        }, 2000);
    });

    controller.hears('prax[ei]', 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Vše o praxi se dočteš tady 👉 http://bit.ly/stunome_praxe');
        }, 2000);
    });
};
