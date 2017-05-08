//lide na stunome
//vyučující

module.exports = function(controller) {
    controller.hears(['kdo u[cč][ií] .* stunome', 'u[cč]itel[eé]', 'vyu[cč]uj[ií]c[ií]', 'u[cč][ií]'], 'message_received', function (bot, message) {
        bot.reply(message, 'Náš all-star team si můžeš prostalkovat tady: http://novamedia.ff.cuni.cz/lide/vyucujici/');
    });

//Prváci

    controller.hears(['prv[aá]ci', 'prv[aá]k', '.*  studuje v prv[aá]ku', 'prvn[ií] ro[cč]n[ií]k', 'prvn[ií]ho ro[cč]n[ií]ku'], 'message_received', function (bot, message) {
        bot.reply(message, 'Mladé a svěží prváky najdeš tady: http://novamedia.ff.cuni.cz/lide/studenti-1-rocniku/');
    });

//pratele stunome

    controller.hears(['p[rř][aá]tel[eé] stunome', 'fanou[sš]ci oboru', 'dal[sš][ií] lid[eé]'], 'message_received', function (bot, message) {
        bot.reply(message, 'Další milovníky Stunome najdeš tady: http://novamedia.ff.cuni.cz/lide/pratele-stunome/');
    });

//starsi rocniky

    controller.hears(['druh[aá]ci', 'druh[aá]k', '.*  studuje v druh[aá]ku', 'druh[yý] ro[cč]n[ií]k', 'druh[eé]ho ro[cč]n[ií]ku'], 'message_received', function (bot, message) {
        bot.reply(message, 'Mazáci ze starších ročníků jsou tady: http://novamedia.ff.cuni.cz/lide/studenti-vyssich-rocniku/');
    });
};
