const fs = require('fs');
const {fetchParameters} = require('./fetchParameters');
const {generateEmptyArray} = require('./functions/generateEmptyArray');
const {fetchData} = require('./functions/fetchData');
const {mapPokemon} = require('./mapPokemon');
const {mapPokemonSpecies} = require('./mapPokemonSpecies');

// Parameters for data fetching
const offset = 0;   // Starting index
const limit = 809;    // Number of pokemon to fetch

// Generate URLs
const pokemonUrl = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;                     // pokemon endpoint
const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species?offset=${offset}&limit=${limit}`;      // pokemon-species endpoint

// Create an empty array to store Pokemon data
const database = generateEmptyArray(limit);



// Make fetch requests to get the list of Pokémon from both URLs
Promise.all([
    fetch(pokemonUrl), 
    fetch(pokemonSpeciesUrl)
])
  .then(responses => Promise.all(responses.map(response => response.json())))
  .then(async data => {
    const [pokemonList, pokemonSpeciesList] = data;

    // Process data from the first URL
    await Promise.all(
      pokemonList.results.map(async (pokemon, i) => {
        const pokemonData = await fetchData(pokemon.url);
        await mapPokemon(pokemonData,database, i);
      })
    );

    // Process data from the second URL
    await Promise.all(
      pokemonSpeciesList.results.map(async (pokemonSpecies, i) => {
        const pokemonSpeciesData = await fetchData(pokemonSpecies.url);
        await mapPokemonSpecies(pokemonSpeciesData, database, i);
      })
    );
  })
  .then(() => {
    // Save the array to a file
    fs.writeFileSync('output.json', JSON.stringify(database, null, 2));
    console.log(`Pokemon data has been saved.`);
  })
  .catch(error => {
    console.error("Error:", error);
  });
