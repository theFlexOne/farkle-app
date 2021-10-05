
// * This is the Roll class


// ! This Is the CURRENT build for "roll"


const turnObj = (() => { // ! turnObj will be a function that calls a new Turn object in the future. ->>- for now is an IIFE.
  
  const allRolls = [];
  let currentRoll;
  newRoll = function(_currentRoll) {
    allRolls.push(Roll());
    currentRoll = new Roll()
  };


  return {
    allRolls,
    currentRoll,
    newRoll
  } 
})()