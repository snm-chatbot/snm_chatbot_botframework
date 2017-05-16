var giphy = require('giphy-api')();

module.exports = function(controller) {

    controller.hears(['kdy .* p[rř]ij[ií]ma[čc]ky'], 'message_received', function(bot, message) {
      bot.reply(message, {type: 'typing'});
      setTimeout(function() {
          bot.reply(message, 'Přijímačky bývají v půlce července, konkrétní datum najdeš tady 👉 http://bit.ly/stunome_terminy');
      }, 2000);
  });

    controller.hears(['bod[uůy] .* test'], 'message_received', function(bot, message) {
      bot.reply(message, {type: 'typing'});
      setTimeout(function() {
          bot.reply(message, 'Z testu je třeba 25 z 50 bodů aby ses dostal k ústní zkoušce.');
      }, 2000);
  });

    controller.hears(['uk[aá]zkov[yý] test', 'zkusit', 'nane[cč]isto'], 'message_received', function(bot, message) {
      bot.reply(message, {type: 'typing'});
      setTimeout(function() {
          bot.reply(message, 'Zkusit si přijímačky můžeš tady 👉 http://bit.ly/stunome_prijimacky');
      }, 2000);
  });

    controller.hears(['kolik [cč]asu .* test', 'jak dlouho .* test'], 'message_received', function(bot, message) {
      giphy.random('time', function(err, res) {
          if (res.data.id) {
              var gif = {
                  attachments: [
                      {
                          contentType: 'application/vnd.microsoft.card.animation',
                          content: {
                              media: [{ url: res.data.fixed_height_downsampled_url, profile: 'animation' }],
                              autoloop: true,
                              autostart: true
                          }
                      }
                  ]
              };
          }
      });
      bot.reply(message, {type: 'typing'});
      setTimeout(function() {
          bot.reply(message, 'Na test je 1 hodina - dost času na to, abys stihl špatné odpovědi nahradit za dobré.');
          bot.reply(message, gif);
      }, 2000);
  });

    controller.hears(['kolik stoj[ií] p[rř]ihl[aá][sš]ka', 'za kolik je p[rř]ihl[aá][sš]ka', 'cena .* p[rř]ihl[aá]šk[ya]'], 'message_received', function(bot, message) {
      var question = function(err, convo) {
          convo.ask('500Kč. A víš co ještě stojí 500Kč?', function(response, convo) {
              convo.say('17 piv. To je ta přihláška lepší, ne?');
              convo.next();
          });
      };
      bot.startConversation(message, question);
  });

    controller.hears(['kdy .* p[rř]ihl[aá][sš]k[au]', 'p[rř]ihl[aá][sš]k[au]'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Přihlášku musíš poslat do 31. března! Tik tak ... :-D');
        }, 2000);
    });

    controller.hears(['[uú]stn[íi]'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Ústní kolo vypadá asi méně eroticky, než si myslíš. Musíš si připravit literaturu, diplomku, a tak dále.');
        }, 2000);
    });

    controller.hears(['jak .* p[řr]ihl[aá]sit', 'podat p[řr]ihl[áa][šs]ku'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Příhlášku si můžeš podat tady 👉 http://bit.ly/stunome_prihlaska');
        }, 2000);
    });

    controller.hears(['kolik .* hl[áa]s[íi]', 'kolik .* p[rř]ij[íi]m[áa]', 'kolik berou', 'kolik .* bere'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Hlásí se tak 200 lidí, a konkurence stoupá!');
            bot.reply(message, 'No a bere se cca 25...');
        }, 2000);
    });

    controller.hears(['kde .* p[řr]ij[ií]ma[čc]ky'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Písmená část je na fildě ve městě a ústní na konci světa v Jinonicích');
        }, 2000);
    });

    controller.hears(['kolik .* komis[ei]', 'komis[ei] .* kolik'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Komise na ústní část se skládá alespoň ze 3 expertů na problematiku.');
        }, 2000);
    });

    controller.hears(['dvouobor', 'dvouborov[eě]', 'jednoobor', 'dvouborov[eé] studium'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Chceš studovat najednou nový média a tibetanistiku? No problem! Má to svoje specifika, mrkni sem: http://novamedia.ff.cuni.cz/o-oboru/jednoobordvouobor/');
        }, 2000);
    });

    controller.hears(['kdy byl zalo[zž]en', 'historie stunome', 'historie snm', 'zalo[zž]en obor'], 'message_received', function(bot, message) {
        bot.reply(message, {type: 'typing'});
        setTimeout(function() {
            bot.reply(message, 'Obor Studia nových médií byl založe léta páně 2006, víc tady: http://novamedia.ff.cuni.cz/o-oboru/historie/');
        }, 2000);
    });
};
