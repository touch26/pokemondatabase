// Fynctions required
const {fetchData} = require('./fetchData');

// Map and process Pokémon abilities
async function getAbilities(fetchedAbilities, id) {

    const abilities = {
        "normal": [],
        "hidden": []
    };

    for (let j=0; j<fetchedAbilities.length; j++) {
        if (fetchedAbilities[j]) {
            
            const abilityData = await fetchData(fetchedAbilities[j].ability.url);
            const index = abilityData.names.findIndex(element => element.language.name === "en");

            if (!fetchedAbilities[j].is_hidden) {
                abilities.normal.push(abilityData.names[index].name);
            } else if (fetchedAbilities[j].is_hidden) {
                abilities.hidden.push(abilityData.names[index].name);
            } else {
                throw new Error(`Ability of Pokémon n° ${id} is neither normal or hidden`)
            }
        } else {
            throw new Error(`Failed fetching abilities of Pokémon n° ${id+1}`)
        }
    }

    return abilities
}


module.exports = {getAbilities};