const games = require('./games');

function insertionSort(list) {

    for (let current = 0; current < list.length; current++) {
        let analysis = current;
        while (analysis > 0 && list[analysis].price < list[analysis - 1].price) {

            let itemAnalyses = games[analysis];
            let previousItem = games[analysis - 1];

            games[analysis] = previousItem;
            games[analysis - 1] = itemAnalyses;

            analysis--
        }
    }

    console.log(list);

}

insertionSort(games)