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

    controller.hears(['kolik kredit[uů]', 'kredity'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Celkem musíš nasbírat minimálně 120 kreditů. Pro postup do druhýho ročníku potřebuješ 30, tzn. průměrně 15 za semestr (do třetího jich potřebuejš 60 atd.). To je fakt málo. Kredity budou stačit.');
        }, 2000);
    });

    controller.hears(['poplatky .* studium', 'kolik.*stoj[íi].*studium', 'poplatky', 'cena studia'], 'message_received', function(bot, message) {
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

    controller.hears(['snmhub', 'hub'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, '#SNMhub je společná skupina SNM lidí a najdeš ho tady: https://www.facebook.com/groups/1509727309335547/');
        }, 2000);
    });

    controller.hears(['skripta', 'materi[aá]ly', 'vypracovan[eé] ot[aá]zky', 'z [cč]eho .* u[cč]it', 'materi[aá]ly ke st[aá]tnic[ií]m', 'na st[aá]tnice'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Pst, hej, ty tam... Chceš nějakej podputlovej matroš ke státnicím? Na, první várka zdarma, na vyzkoušení... Tady máš: https://wikisofia.cz/wiki/Informa%C4%8Dn%C3%AD_studia_a_knihovnictv%C3%AD_(2014-2015)-_st%C3%A1tnicov%C3%A9_okruhy');
        }, 2000);
    });

    controller.hears(['studijn[ií] odd[eě]len[ií]', '[uú][rř]edn[ií] hodiny', 'sekretari[aá]t'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Tyhle záležitosti pořešíš v hlavní budově FF, což je ten krásnej historickej barák na Palachově náměstí na Staroměstský s výhledem na Hradčany a milionem super hospod a kaváren v okolí... Ve který máš jenom to studijní :( Info tady: http://www.ff.cuni.cz/fakulta/oddeleni-dekanatu/studijni-oddeleni/');
        }, 2000);
    });

    controller.hears(['[cč]eskoslovensko, [cč]eskoslovensko 38-89'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Suprovej projekt Vítka Šislera na kterym, pokud budeš mít štěstí, budeš mít možnost třeba taky spolupracovat! http://cs3889.cz/');
        }, 2000);
    });

    controller.hears(['doktor[aá]t','doktorsk[eé]', 'doktorandsk[eé]','doktoran[dt]', 'phd', 'phd.', 'phdr', 'phdr.'], 'message_received', function(bot, message) {
        bot.reply(message, 'StuNoMe je pouze navazující magisterský obor (zatím). Pokud chceš studovat ještě dál, můžeš si vybrat třeba tady u nás z Fildy, vědátore: http://www.cuni.cz/UK-26.html');
    });

    controller.hears(['z[aá]pis do', 'zapsat do'], 'message_received', function(bot, message) {
        bot.reply(message, 'Na tohle bacha. Do prváku se zapisuješ většinou v půlce září, pěkně růčo po staru, to je jasný. ALE! Je nutný se zapsat i do každýho následujícího ročníku! To se dělá elektronicky: nejdřív si musíš nechat v sisu zkontrolovat kredity, jestli jich máš dost. A pak se zapíšeš. Návod máš tady: http://manualy.ff.cuni.cz/index.php/Z%C3%A1pis_do_dal%C5%A1%C3%ADho_ro%C4%8Dn%C3%ADku');
    });

    controller.hears(['uplatn[eě]n[ií]', 'co ze m[eě] bude'], 'message_received', function(bot, message) {
        bot.reply(message, 'Nový média je nejvíc sexy obor. Fakt. S touhle školou můžeš dělat uplně cokoliv, od analýzy dat, přes marketing po samotnou vědu. Cokoliv tě baví a zajímá, na to se můžeš už během studia zaměřit. Pro představu mrkni na profil absolventů a absolventek: http://novamedia.ff.cuni.cz/o-oboru/profily-absolventek-absolventu/');
    });

    controller.hears(['u[cč]ebna', 'u[cč]ebna 2067', '2067'], 'message_received', function(bot, message) {
        bot.reply(message, 'Jedna z mála výhod umístění oboru do Jinonic je to, že máš všechny hodiny v jedný a tý samý místnosti! A tou je místnost 2067. Je to v budově A (to je ta dál od vchodu, nesnaž se to pochopit) za bufáčem, vyjdeš po schodech nebo vyjedeš výtahem do prvního patra a tam už to najdeš.');
    });
};
