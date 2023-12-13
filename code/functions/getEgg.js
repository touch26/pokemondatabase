// Fynctions required
const {fetchData} = require('./fetchData');

// Map and process Pokémon abilities
async function getEgg(fetchedEggGroups, fetchedHatchCounter, id) {

    const egg = {
        "groups": [],
        "cycles": null
    }

    for (let j=0; j<fetchedEggGroups.length; j++) {
        if (fetchedEggGroups[j]) {
            
            const eggGroupData = await fetchData(fetchedEggGroups[j].url);
            const index = eggGroupData.names.findIndex(element => element.language.name === "en");

            egg.groups.push(eggGroupData.names[index].name);
            
        } else {
            throw new Error(`Failed fetching egg groups of Pokémon n° ${id}`)
        }
    }

    egg.cycles = fetchedHatchCounter;

    return egg
}


module.exports = {getEgg};