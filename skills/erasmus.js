module.exports = function(controller) {
    controller.hears(['erasmus', 'st[aá][zž] .* zahrani[čc][ií]', 'zahrani[čc][nň][ií] st[aá][zž]', 'v[yý]jezd', 'zahrani[čc][ií]', 'zahrani[čc][nň][ií] pobyt'], 'message_received', function(bot, message) {
        bot.reply(message, { type: 'typing' });
        setTimeout(function() {
            bot.reply(message, 'Všechny potřebné informace o studiu v zahraničí najdeš tady 👉 http://bit.ly/stunome_zahranici');
        }, 2000);
    });

    controller.hears(['kam .* (jet|odjet|vyrazit|vyjet)', 'kam (jet|odjet|vyrazit|vyjet)'], 'message_received', function(bot, message) {
        bot.reply(message, { type: 'typing' });
        setTimeout(function() {
            bot.reply(message, 'V nabídce máme hafo zemí. Všechny možnosti, jak a kam vycestovat najdeš tady 👉 http://bit.ly/stunome_zahranici_all');
        }, 2000);
    });

    controller.hears(['koordin[aá]tora*'], 'message_received', function(bot, message) {
        bot.reply(message, { type: 'typing' });
        setTimeout(function() {
            bot.reply(message, 'Naší koordinátorkou pro studium v zahraničí je PhDr. Helena Lipková, Ph.D., neboj se jí na cokoliv zeptat! Tady je na ní kontakt 👉 http://bit.ly/stunome_koordinatorka_zahranici');
        }, 2000);
    });

    controller.hears(['kolikr[aá]t .* (erasmus|zahrani[čc][nň][ií] pobyt|zahrani[čc][nň][ií] st[aá][zž]|zahrani[čc][nň][ií] pobyt)'], 'message_received', function(bot, message) {
        bot.reply(message, { type: 'typing' });
        setTimeout(function() {
            bot.reply(message, 'Max 12 měsíců v každé fázi studia (prezenční i kombinované Bc, Mgr a PhD studium). Takže celkem 3 roky!');
        }, 2000);
    });
};
