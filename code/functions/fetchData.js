// Helper function to fetch Pokémon data

async function fetchData(pokemonUrl) {
  const response = await fetch(pokemonUrl);
  const data = await response.json();
  return data;
}


module.exports = {fetchData};