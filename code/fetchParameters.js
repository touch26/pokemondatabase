// A function to declare fetch parameters

function fetchParameters() {

    const offset = 0;   // Starting index
    const limit = 10;    // Number of pokemon to fetch

    return [offset, limit]
}

module.exports = {fetchParameters};