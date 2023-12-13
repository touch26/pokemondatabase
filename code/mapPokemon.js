// Functions required
const {getStats} = require('./functions/getStats');
const {getAbilities} = require('./functions/getAbilities');
const {getSprites} = require('./functions/getSprites');
const {getTypes} = require('./functions/getTypes');

// Map and process data from endpoint "pokemon"
async function mapPokemon(pokemon, database, id) {

  // Abilities
  database[id].abilities = await getAbilities(pokemon.abilities, id);

  // Sprites
  database[id].sprites = getSprites(pokemon.sprites, id);

  // Stats and EV yeld
  const statsData = getStats(pokemon.stats, id);
  database[id].basestats = statsData.stats;
  database[id].EVyeld = statsData.EVyeld;

  // API name
  database[id].APIname = pokemon.name;

  // Height [m] and weight [kg]
  database[id].height = pokemon.height/10;
  database[id].weight = pokemon.weight/10;

  // Pokémon ID
  database[id].id = pokemon.id;

  // Pokémon types
  database[id].types = await getTypes(pokemon.types, id);

}


module.exports = {mapPokemon};