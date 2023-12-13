// Functions needed

// return Pokémon sprites
function getGender(fetchedGender, fetchedGenderDifferences, id) {

    // variable to be returned
    const gender = {
        "genderless": null,
        "maleratio": null,
        "femaleratio": null,
        "genderdifferences": null
    }

    // get gender
    if (fetchedGender == -1) {
        gender.genderless = true;
    } else {
        gender.genderless = false,
        gender.maleratio = (8-fetchedGender)/8*100;
        gender.femaleratio = fetchedGender/8*100;
        gender.genderdifferences = fetchedGenderDifferences;
    }

    // control
    if (gender.genderless === null) {
        throw new Error(`Failed fetching gender informations of Pokémon n° ${id}`)
    }

    return gender
}


module.exports = {getGender};