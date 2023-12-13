// Fynctions required

// Map and process Pokémon abilities
function getName(fetchedNames, id) {

    let name = null;

    const index = fetchedNames.findIndex(element => element.language.name === "en");
    name = fetchedNames[index].name;
            
    // Contol
    if (name === null) {
        throw new Error(`Failed fetching name of Pokémon n° ${id+1}`)
    }

    return name
}


module.exports = {getName};