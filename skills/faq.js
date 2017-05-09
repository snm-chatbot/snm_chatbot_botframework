module.exports = function(controller) {
    //platba za studium
    controller.hears('(?=.*platit)(?=.*(studi(a|u)|[sš]kolu))', 'message_received', function(bot, message) {
        bot.reply(message, { type: 'typing' });
        setTimeout(function() {
            bot.reply(message, 'Povinnost za studium platit vznikne v momentu, kdy překročíš standardní dobu studia o více než rok.' +
                ' V navazujícím magisterském programu lze studovat 2 + 1 rok bez poplatku. Víc najdeš tady 👉 http://bit.ly/stunome_faq');
        }, 2000);
    });
    //přerušení studia
    controller.hears('(?=.*p[rř]eru[sš](it|en[ií])(?=.*(studi(a|u)||[sš]kolu)))', 'message_received', function(bot, message) {
        bot.reply(message, { type: 'typing' });
        setTimeout(function() {
            bot.reply(message, 'V případě, že potřebuješ přerušit studium, obrať se na tajemníka oboru, Jakuba Fialu.<br>📧 fiala.jakub@gmail.com <br>📱 +420 221 619 910');
        }, 2000);
    });
    //editace diplomky
    controller.hears('(?=.*(opravit|zm[eě]nit)' +
        '(?=.*((zad[aá]n[ií]m*|diplomk[aouy]|diplomce|diplomov[aáéo]u* pr[aá]c[eií])|(vedoucí))))', 'message_received', function(bot, message) {
        bot.reply(message, { type: 'typing' });
        setTimeout(function() {
            bot.reply(message, 'Opravu chyby či drobnou změnu formálního rázu v názvu práce, kterou nedojde ke změně jejího tématu,' +
                ' provede studijní oddělení na základě e-mailu nebo dopisu vedoucího práce. Víc najdeš tady 👉 http://bit.ly/stunome_faq');
        }, 2000);
    });
    //odevzdání diplomky
    controller.hears(['(?=.*kdy)(?=.*odevzdat)' +
    '(?=.*(diplomk[aouy]|diplomce|diplomov[aáéo]u* pr[aá]c[eií]))'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Elektronicky a následně i ve dvou tištěných svázaných shodných kopiích na sekretariátu ÚISK,' +
                ' nejpozději 30 dní před prvním dnem státních závěrečných zkoušek základní součásti.' +
                ' Aktuální termíny pro odevzdání diplomky najdeš tady 👉 http://bit.ly/stunome_diplomka');
        }, 2000);
    });
    //chybějící záznamy v sisu
    controller.hears('(?=.*(chyb([ií]|[eě]j[ií]c[ií])|nem[aá]m)(?=.*sis))', 'message_received', function(bot, message) {
        bot.reply(message, { type: 'typing' });
        setTimeout(function() {
            bot.reply(message, 'Pokud nemáš atestaci zapsanou ani v indexu, ani v SISu, nezbývá ti, než se obrátit na vyučující(ho),' +
                ' u které(ho) jsi předmět splnili, aby ti atestaci doplnil(a). Víc najdeš tady 👉 http://bit.ly/stunome_faq');
        }, 2000);
    });
    //délka studia
    controller.hears('(?=.*(kolik let|jak dlouho|d[eé]lka))(?=.*(stud(ovat|i(a|u))))', 'message_received', function(bot, message) {
        bot.reply(message, { type: 'typing' });
        setTimeout(function() {
            bot.reply(message, 'Maximální doba studia je pět let. Víc najdeš tady 👉 http://bit.ly/stunome_faq');
        }, 2000);
    });
    //postup do dalšího ročníku
    controller.hears('(?=.*(postup|postoupil))(?=.*(ro[cč]n[ií]k|roku))', 'message_received', function(bot, message) {
        bot.reply(message, { type: 'typing' });
        setTimeout(function() {
            bot.reply(message, 'Pro postup do dalšího ročníku je nutné dosáhnout určitého počtu kreditů:' +
                '<br>do 2. ročníku alespoň 30 kreditů<br>do 3. ročníku alespoň 60 kreditů<br>do 4. ročníku alespoň 90 kreditů<br>do 5. ročníku alespoň 120 kreditů' +
                '<br>Víc najdeš tady 👉 http://bit.ly/stunome_faq');
        }, 2000);
    });
    //předměty oboru
    controller.hears('(?=.*(informac[ei]|popis|n[aá]pl[nň]|struktura|[uú]daj))(?=.*(p[rř]edm[eě]t))', 'message_received', function(bot, message) {
        bot.reply(message, { type: 'typing' });
        setTimeout(function() {
            bot.reply(message, 'Informace k předmětům jsou uveřejněny v SISu 👉 http://bit.ly/stunome_predmety');
        }, 2000);
    });
    //práce a studium
    controller.hears('(?=.*pr[aá]c(e|i|ovat))(?=.*(stud(ovat|i)))', 'message_received', function(bot, message) {
        bot.reply(message, { type: 'typing' });
        setTimeout(function() {
            bot.reply(message, 'Účast na výuce je povinná (obvykle jsou tolerovány dvě absence za semestr).' +
                ' Pracovní povinnosti nejsou akceptovány jako omluva neúčasti na výuce či nesplnění atestace předmětu. Tak to neflákej, stojí to za to!');
        }, 2000);
    });
};
