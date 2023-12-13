// Fynctions required
const {fetchData} = require('./fetchData');

// Map and process Pokémon abilities
async function getTypes(fetchedTypes, id) {

    const types = [];

    for (let j=0; j<fetchedTypes.length; j++) {
        if (fetchedTypes[j]) {
            
            const typeData = await fetchData(fetchedTypes[j].type.url);
            const index = typeData.names.findIndex(element => element.language.name === "en");

            types.push(typeData.names[index].name);

        } else {
            throw new Error(`Failed fetching types of Pokémon n° ${id}`)
        }
    }

    return types
}


module.exports = {getTypes};