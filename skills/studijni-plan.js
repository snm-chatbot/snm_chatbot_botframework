//studijni plan

module.exports = function(controller) {
    controller.hears(['studijn[ií] pl[aá]n', 'm[uů]j studijn[ií] pl[aá]n', '.* m[aá]m studijn[ií] pl[aá]n', 'kde .* studijn[ií] pl[aá]n]'], 'message_received', function (bot, message) {
        bot.reply(message, 'Předměty ve svém stidijním plánu jednoduše zjistíš tady: http://www.ff.cuni.cz/studium/studijni-obory-plany/studijni-plany/');
    });


    controller.hears(['jak[eé] p[rř]edm[eě]ty .* splnit', 'p[rř]edm[eě]ty .* spln[eě]n[ií]',], 'message_received', function (bot, message) {
        bot.reply(message, 'Přehled plnění studijního plánu najdeš tady: https://is.cuni.cz/studium/predmety/index.php?do=search&nazev=&kod=&match=substring&srch_nazev=0&srch_nazev=1&fak=11210&ustav=21-UISKNM&trida=&klas=&ucit=&pvyjazyk=&sem=&pocet=50&b=Hledej');
    });


    controller.hears(['.* p[rř]edm[eě]t', '.* p[rř]edm[eě]ty', '.* p[rř]edm[eě]ty .* stunome', 'p[rř]edm[eě]ty .* stunome'], 'message_received', function (bot, message) {
        bot.reply(message, 'Mrkni do SISu: https://is.cuni.cz/studium/predmety/index.php?do=search&nazev=&kod=&match=substring&srch_nazev=0&srch_nazev=1&fak=11210&ustav=21-UISKNM&trida=&klas=&ucit=&pvyjazyk=&sem=&pocet=50&b=Hledej');
    });
};
