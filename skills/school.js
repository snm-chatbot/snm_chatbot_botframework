module.exports = function(controller) {
    //praxe
    controller.hears('prax[ei]', 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Vše o praxi se dočteš tady 👉 http://bit.ly/stunome_praxe');
        }, 2000);
    });
    //blogy
    controller.hears(['blog', 'blogy', 'studentsk[eéyý] blogy*'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Chceš si přečíst nejnovější literární mini-díla našich studentů? Vyber si tady 👉 http://bit.ly/stunome_blogy.');
        }, 2000);
    });
    //kontakt na stunome
    controller.hears(['kontakt', 'telefon', 'e*mail', 'telefonn[ií] [cč][ií]slo'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Všechny důležité kontakty najdeš tady 👉 http://bit.ly/stunome_kontakty');
        }, 2000);
    });
    //social
    controller.hears('((soci[aá]ln[ií](ch)* (s[ií]t[eě]|s[ií]t[ií](ch)*|s[ií][tť]))|(facebook)|(twitter)|(youtube)|(slideshare))', 'message_received', function(bot, message) {
        var social = {
            attachments: [
                {
                    contentType: 'application/vnd.microsoft.card.hero',
                    content: {
                        title: 'Na internetech nás najdeš tady',
                        buttons: [
                            {
                                type: 'openUrl',
                                title: 'twitter',
                                value: 'https://twitter.com/stunome'
                            },
                            {
                                type: 'openUrl',
                                title: 'facebook',
                                value: 'https://www.facebook.com/stunome'
                            },
                            {
                                type: 'openUrl',
                                title: 'youtube',
                                value: 'https://www.youtube.com/user/stunome'
                            },
                            {
                                type: 'openUrl',
                                title: 'slideshare',
                                value: 'http://www.slideshare.net/stunome'
                            }
                        ]
                    }
                }
            ]
        };
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, social);
        }, 2000);
    });

    controller.hears(['berl[ií]n', 'snmberl[ií]n', '#snmberlin'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, '#SNMBerlín je legendární výroční výjezd studentů na Transmediale (což je novomediální' +
                ' konference/výstava, což ale asi víš). Rozhodně neváhej a jeď. Není to však zdaleka jen o vysoký kultuře, ' +
                'večer se exkurze mění na divoký věčírek s vyučujícími, současnými, bývalými a dokonce i budoucími spolužáky. ' +
                'Jo a pokud máš pevný nervy a žaludek, můžeš zkusit vystát frontu do Berghainu ;)');
        }, 2000);
    });

    controller.hears(['poplatky .* studium', 'kolik.*stojí.*studium', 'poplatky', 'cena studia'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Za delší studium platíš 15 000 Kč za každých započatých 6 měsíců studia. Tohle si pohlídej, může to dost zabolet!');
        }, 2000);
    });

    controller.hears(['kde .* jinonice', 'jak .* jinonic', 'kudy .* jinonic'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Mmmm, jitrnice... Adresa: U Kříže 661/8, 158 00 Praha 5-Jinonice. Když zrovna jezdí, tak nejlíp se tam dostaneš metrem B (tim žlutym pro mimopražský). Nic jinýho tam možná ani nejede. :(');
        }, 2000);
    });

    controller.hears(['konzulta[cč]n[ií]', 'konzulta[cč]ky'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Na konzultačky se tu moc nehraje. Nejlepší je domluvit se s vyučujícím individuálně, buď ve škole nebo si najdi kontakt tady: http://novamedia.ff.cuni.cz/lide/vyucujici/');
        }, 2000);
    });

    controller.hears(['multimedi[aá]ln[ií]', 'multimedi[aá]ln[ií] projekt', 'multimedi[aá]ln[ií] projekty'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Cool věc. V týmu celej semestr vytváříš něco co je zajímavý, zábavný a často i k něčemu dobrý! Témata se každý rok liší, počkej si na jejich zveřejnění, dozvíš se včas. Seznam starších projektů najdeš tady: http://novamedia.ff.cuni.cz/vyzkum-projekty-akce/studentske-projekty/');
        }, 2000);
    });

    controller.hears(['jak[éeyý].* p[rř]edm[eě]ty'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Všechny předměty jsou vypsaný pěkně tady v sisu: https://is.cuni.cz/studium/predmety/index.php?do=search&nazev=&kod=&match=substring&srch_nazev=0&srch_nazev=1&fak=11210&ustav=21-UISKNM&trida=&klas=&ucit=&pvyjazyk=&sem=&pocet=50&b=Hledej');
        }, 2000);
    });

    controller.hears(['kolik kredit[uů]', 'kredity'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Celkem musíš nasbírat minimálně 120 kreditů. Pro postup do druhýho ročníku potřebuješ 30, tzn. průměrně 15 za semestr (do třetího jich potřebuejš 60 atd.). To je fakt málo. Kredity budou stačit.');
        }, 2000);
    });
};
