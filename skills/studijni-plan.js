//studijni plan

module.exports = function(controller) {
    controller.hears(['studijn[ií] pl[aá]n', 'm[uů]j studijn[ií] pl[aá]n', '.* m[aá]m studijn[ií] pl[aá]n', 'kde .* studijn[ií] pl[aá]n]'], 'message_received', function(bot, message) {
        bot.reply(message, { type: 'typing' });
        setTimeout(function() {
            bot.reply(message, 'Předměty ve svém studijním plánu jednoduše zjistíš tady 👉 http://bit.ly/stunome_studijni_plan');
        }, 2000);
    });


    controller.hears(['jak[eé] p[rř]edm[eě]ty .* splnit', 'p[rř]edm[eě]ty .* spln[eě]n[ií]'], 'message_received', function(bot, message) {
        bot.reply(message, { type: 'typing' });
        setTimeout(function() {
            bot.reply(message, 'Přehled plnění studijního plánu najdeš tady 👉 http://bit.ly/stunome_studijni_plan');
        }, 2000);
    });


    controller.hears(['.* p[rř]edm[eě]t', '.* p[rř]edm[eě]ty', '.* p[rř]edm[eě]ty .* stunome', 'p[rř]edm[eě]ty .* stunome'], 'message_received', function(bot, message) {
        bot.reply(message, { type: 'typing' });
        setTimeout(function() {
            bot.reply(message, 'Vše najdeš v SISu a ten správný link tady 👉 http://bit.ly/stunome_studijni_plan');
        }, 2000);
    });
};
