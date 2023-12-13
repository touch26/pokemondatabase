// Fynctions required

// Get Pokémon generation
function getGeneration(fetchedGeneration, id) {

    let generation = 0;

    if (fetchedGeneration.name == "generation-i") {
        generation = 1;

    } else if (fetchedGeneration.name == "generation-ii") {
        generation = 2;

    } else if (fetchedGeneration.name == "generation-iii") {
        generation = 3;

    } else if (fetchedGeneration.name == "generation-iv") {
        generation = 4;

    } else if (fetchedGeneration.name == "generation-v") {
        generation = 5;

    } else if (fetchedGeneration.name == "generation-vi") {
        generation = 6;
        
    } else if (fetchedGeneration.name == "generation-vii") {
        generation = 7;
        
    } else if (fetchedGeneration.name == "generation-viii") {
        generation = 8;
        
    } else if (fetchedGeneration.name == "generation-ix") {
        generation = 9;
        
    } else {
        throw new Error(`Failed fetching generation of Pokémon n° ${id+1}`);
    }

    // Control
    if (generation === 0) {
        throw new Error(`Failed fetching generation of Pokémon n° ${id+1}`);
    }

    return generation;
}


module.exports = {getGeneration};