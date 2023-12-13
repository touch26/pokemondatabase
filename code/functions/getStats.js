// Functions needed

// return stats end EVyeld
function getStats(fetchedStats, id) {

  // Name to assign to stats
  const correctnames = ["HP", "Att", "Def", "SpA", "SpD", "Spe"];

  // const to be returned
  const stats = {
      "stats": {},
      "EVyeld": []
  };

    
  // cycle between every stat 
  let k=0;
  let TOT=0;
  for (let j=0; j<6; j++) {
        
    // get stat value and sum to TOT
    stats.stats[correctnames[j]] = fetchedStats[j].base_stat;
    TOT = TOT+fetchedStats[j].base_stat;
        
    // get effort values associated with the stat
    if (fetchedStats[j].effort !==0) {
      stats.EVyeld[k] = `${fetchedStats[j].effort} ${correctnames[j]}`;
       k++; 
    };

  };

  // Add TOT key in stats
  stats.stats.TOT = TOT;
    
  return stats
}


module.exports = {getStats};


//throw new Error(`Failed fetching stats of Pokémon n° ${id}`)