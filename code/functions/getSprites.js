// Functions needed

// return Pokémon sprites
function getSprites(fetchedSprites, id) {

    // variable to be returned
    const sprites = {
        "default": null,
        "shiny": null
    }

    // get sprites
    if (fetchedSprites) {
        sprites.default = fetchedSprites.front_default;
        sprites.shiny = fetchedSprites.front_shiny;
    } else {
        throw new Error(`Failed fetching sprites of Pokémon n° ${id}`)
    }

    return sprites
}


module.exports = {getSprites};