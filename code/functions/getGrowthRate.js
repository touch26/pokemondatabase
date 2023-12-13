// Fynctions required


// Get Pokémon growth rate
function getGrowthRate(fetchedGrowthRate, id) {

    const growthrate = {
        "name": null,
        "description": null
    };

    if (fetchedGrowthRate.name == "slow") {
        growthrate.name = "Slow";
        growthrate.description = "Slow";

    } else if (fetchedGrowthRate.name == "medium") {
        growthrate.name = "Medium";
        growthrate.description = "Medium";

    } else if (fetchedGrowthRate.name == "fast") {
        growthrate.name = "Fast";
        growthrate.description = "Fast";

    } else if (fetchedGrowthRate.name == "medium-slow") {
        growthrate.name = "Medium slow";
        growthrate.description = "Medium slow";

    } else if (fetchedGrowthRate.name == "slow-then-very-fast") {
        growthrate.name = "Erratic";
        growthrate.description = "Slow, then very fast";

    } else if (fetchedGrowthRate.name == "fast-then-very-slow") {
        growthrate.name = "Fast, then very slow";
        growthrate.description = "Fast, then very slow";
    } else {
        throw new Error(`Failed fetching growth rate of Pokémon n° ${id+1}`);
    }

    return growthrate;
}


module.exports = {getGrowthRate};