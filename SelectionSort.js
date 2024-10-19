const games = require('./games');
const lowerValue = require('./lowerValue');

for (let current = 0; current < games.length - 1; current++){
    let lower = lowerValue(games, current)

    
    
    let currentGame =  games[current];
    let lowerPriceGame = games[lower];
    games[current] = lowerPriceGame;
    games[lower] = currentGame;
}

console.log(games);


