jsJourneyTest(hasApple('pommes') === true, `hasApple('pommes') === true`);
jsJourneyTest(hasApple('pommes, oranges, bananes') === true, `hasApple('pommes, oranges, bananes') === true`);
jsJourneyTest(hasApple('farine, oeufs, chocolat') === false, `hasApple('farine, oeufs, chocolat') === false`);
jsJourneyTest(hasApple('') === false, `hasApple('') === false`);
jsJourneyTest(hasApple('bananes, pommes') === true, `hasApple('pommes') === true`);
jsJourneyTest(hasApple('pomme') === false, `hasApple('pommes') === false`);