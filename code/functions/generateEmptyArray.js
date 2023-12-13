// Generate an empty array containing N objects

function generateEmptyArray(numberOfObjects) {
    // Create an array with empty objects
    const arrayOfEmptyObjects = Array.from({ length: numberOfObjects }, () => ({}));
  
    return arrayOfEmptyObjects;
  }


  module.exports = {generateEmptyArray};