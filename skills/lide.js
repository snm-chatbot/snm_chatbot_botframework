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
            bot.reply(message, 'Mazáky ze starších ročníků najdeš tady 👉 http://bit.ly/stunome_mazaci');
        }, 2000);
    });

    controller.hears(['josef', '[sš]lerka'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Hustej týpek! 💪');
        }, 2000);
    });

    controller.hears(['tajemn[ií]k', 'tajemn[ií]k oboru', 'tajemn[ií]k stunome', 'jakub fiala', 'fiala jakub', 'fiala'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Tajemník našeho oboru je one & only Mgr. Jakub Fiala.<br>📧 fiala.jakub@gmail.com <br>📱 +420 221 619 910');
        }, 2000);
    });

    controller.hears(['rektor'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Naším současným rektorem je Prof. MUDr. Tomáš Zima, DrSc., MBA. Kontakt tady (asi nebudeš potřebovat, hehe): http://www.cuni.cz/UK-126.html');
        }, 2000);
    });

    controller.hears(['Marta', 'Kol[aá]rov[aá]', 'Mat[eě]j', 'Van[eě][cč]ek', 'Michaela', 'Slussareff', 'Dita', 'Male[cč]kov[aá]', 'Marie', 'M[aá]ša', 'Dudziakov[aá]', 'V[ií]tek', 'V[ií]t', '[sš]isler'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Info o vyučujících včetně kontaktů najdeš tady: http://novamedia.ff.cuni.cz/lide/vyucujici/');
        }, 2000);
    });

    controller.hears(['^lid[eéi]'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Info o snm lidech najdeš tady: http://novamedia.ff.cuni.cz/lide/');
        }, 2000);
    });
};
