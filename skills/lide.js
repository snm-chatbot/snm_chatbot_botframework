//lide na stunome
//vyučující

module.exports = function(controller) {
    controller.hears(['u[cč]itel[eé]', 'vyu[cč]uj[ií]c[ií]', 'u[cč][ií]', 'p[rř]edn[aá][sš]ej[ií]c[ií]', 'p[rř]edn[aá][sš][ií]'], 'message_received', function (bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Náš all-star team si můžeš prostalkovat tady 👉 http://bit.ly/stunome_vyucujici');
        }, 2000);
    });

//Prváci

    controller.hears(['prv[aá]ci', 'prv[aá]k', '.*  studuje v prv[aá]ku', 'prvn[ií] ro[cč]n[ií]k', 'prvn[ií]ho ro[cč]n[ií]ku'], 'message_received', function (bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Mladé a svěží prváky najdeš tady 👉 http://bit.ly/stunome_prvaci');
        }, 2000);
    });

//pratele stunome

    controller.hears(['p[rř][aá]tel[eé] stunome', 'fanou[sš]ci oboru', 'dal[sš][ií] lid[eé]'], 'message_received', function (bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Další milovníky Stunome najdeš tady 👉 http://bit.ly/stunome_pratele');
        }, 2000);
    });

//starsi rocniky

    controller.hears(['druh[aá]ci', 'druh[aá]k', 'druh[yý] ro[cč]n[ií]k', 'druh[eé]ho ro[cč]n[ií]ku', 'studenti', 'studuje'], 'message_received', function (bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Mazáci ze starších ročníků najdeš tady 👉 http://bit.ly/stunome_mazaci');
        }, 2000);
    });
};
