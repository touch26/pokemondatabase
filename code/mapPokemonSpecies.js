// Functions required
const {getEgg} = require('./functions/getEgg');
const {getGender} = require('./functions/getGender');
const {getGrowthRate} = require('./functions/getGrowthRate');
const {getName} = require('./functions/getName');
const {getGeneration} = require('./functions/getGeneration');
const {getEvolutions} = require('./functions/getEvolutions');

// Map and process data from endpoint "pokemon-species"
async function mapPokemonSpecies(pokemonSpecies, database, id) {
  
    // Base happiness
    database[id].basehappiness = pokemonSpecies.base_happiness;

    // Capture rate
    database[id].capturerate = pokemonSpecies.capture_rate;

    // Egg groups and egg cycles
    database[id].egg = await getEgg(pokemonSpecies.egg_groups, pokemonSpecies.hatch_counter, id);

    // Evolutions
    //database[id].evolution = getEvolutions(id);

    // Switchable form
    database[id].switchableforms = pokemonSpecies.forms_switchable;

    // Genderless, gender rates and gender differences
    database[id].gender = getGender(pokemonSpecies.gender_rate, pokemonSpecies.has_gender_differences, id);

    // Generation
    database[id].generation = getGeneration(pokemonSpecies.generation, id);

    // Growth rate
    database[id].growthrate = getGrowthRate(pokemonSpecies.growth_rate, id);

    // Baby, mythical or legendary Pokémon
    database[id].baby = pokemonSpecies.is_baby;
    database[id].mythical = pokemonSpecies.is_mythical;
    database[id].legendary = pokemonSpecies.is_legendary;

    // Names (en)
    database[id].name = getName(pokemonSpecies.names, id)

}


module.exports = {mapPokemonSpecies};