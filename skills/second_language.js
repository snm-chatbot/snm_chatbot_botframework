module.exports = function(controller) {
    controller.hears(['(druh[eéyý](ho)*)*(ciz[ií](ho)*)*jazyk(a)*'], 'message_received', function(bot, message) {
        bot.reply(message, { type: 'typing' });
        setTimeout(function() {
            bot.reply(message, 'Tak jako na celý fildě, i u nás musíš úspěšně absolvovat zkoušku z druhého jazyka, minimálně úrovně akademické čtení (dříve B2-). Víc informací najdeš tady 👉 http://bit.ly/stunome_druhy_jazyk');
        }, 2000);
    });

    controller.hears(['[zž][aá]dn[yý] ciz[ií] jazyk', '[zž][aá]dn[yý] jazyk', '[zž][aá]dn[yý] druh[yý] jazyk', 'neum[ií]m .* jazyk'], 'message_received', function(bot, message) {
        bot.reply(message, { type: 'typing' });
        setTimeout(function() {
            bot.reply(message, 'Pokud opravdu nemáš ani základy druhého cizího jazyka, studenti obecně doporučují jít do ruštiny - jako jediná má kurzy i pro úplné začátečníky a pro tebe jako Slovana je za tři semestry zvládnutelná. Pokud se nebudeš flákat!');
        }, 2000);
    });

    controller.hears(['kde .* ciz[ií] jazyk'], 'message_received', function(bot, message) {
        bot.reply(message, { type: 'typing' });
        setTimeout(function() {
            bot.reply(message, 'Na hodiny jazyka chodíš do budovy FF v Celetné: Celetná 562/20');
        }, 2000);
    });

    controller.hears(['kdy .* zkouška z ciz[ií]ho jazyka', 'term[ií]n zkou[sš]ky .* ciz[ií]ho jazyka', 'term[ií]n zkou[sš]ky ciz[ií]ho jazyka'], 'message_received', function(bot, message) {
        bot.reply(message, { type: 'typing' });
        setTimeout(function() {
            bot.reply(message, 'Termíny zkoušek se vypisují v době zkouškového, zkoušky z jazyka bývají tedy na konci zimního či letního semestru. Víc informací máš tady: 👉 http://bit.ly/stunome_jazyk_zkouska');
        }, 2000);
    });

    controller.hears(['kredity .* jazyka', 'kolik kredit[uů] .* jazyka', 'kolik kredit[uů] .* jazyk'], 'message_received', function(bot, message) {
        bot.reply(message, { type: 'typing' });
        setTimeout(function() {
            bot.reply(message, 'Z cizího jazyka můžeš získat hafo kreditů. Počítej se mnou: Za každej semestrální kurz 2 kredity, za složenou zkoušku B2 dokonce 5 kreditů, tj. 11 kreditů jen za jazyk!');
        }, 2000);
    });
};
