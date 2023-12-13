const fs = require('fs');

const inputFile = "./prev_evolution.json";

function getEvolutions() {

    const evolution = {
        "evolvesfrom": null,
        "description": null
    }

    fs.readFile(inputFile, 'utf8', (err, data) => {
        if (err) {
            return console.error('Error reading the input JSON file:', err);
        }

        // Parse the JSON data
        const jsonData = JSON.parse(data);

        evolution.evolvesfrom = jsonData[id].prev_evolution[1];
        evolution.description = jsonData[id].prev_evolution[2];
    });

    return evolution


        
}

module.exports = {getEvolutions};