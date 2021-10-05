/**********************************************/
/* Placeholder for the farkle body (turnObj): */
/**********************************************/
const currentTurn = [];
// var currentRoll;
// const pointer = playerTurn[0];

/* Delete everything above this line for final merge */

/***********************************/
/* Declared funtions (at the top): */
/***********************************/
const sortedRollTest1 = [3, 3, 3, 3, 3, 3]; // The function that returns a cipher code
const sortedRollTest2 = [3, 3, 3, 4, 4, 4]; // from the sorted roll (sortedRoll).
const sortedRollTest3 = [3, 3, 4, 4, 6, 6]; // Intended to be the value of v-rollCode with
const sortedRollTest4 = [3, 3, 3, 3, 4, 4]; // v-sortedRoll as the argument hence "_sortedRoll"
const sortedRollTest5 = [1, 2, 3, 4, 5, 6]; //

/* simple function that returns a random number 1 - 6; it rolls one die */
function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
} //simulates rolling 1 die

//* ---> This function is key <-- //
function rollDice() {
  currentRoll = []; // - to return
  // --> pre-testing for error
  if (freeDice()[0] > 6) {
    return console.error("ERROR!!!\nTOO MANY DICE");
  } else if (freeDice()[0] === 0) {
    return console.log("All dice are currently being held");
  } else {

    //! ---> rawRoll <-- //
    const rawRoll = [];
    // for (let i = 0; i < freeDice()[0]; i++) {
    //   rawRoll.push(Math.floor(Math.random() * 6) + 1);
    // }

    dieCheckboxes.forEach((box) => {
      if (box.checked) {
        rawRoll.push(0);
      } else {
        rawRoll.push(Math.floor(Math.random() * 6) + 1);
      }
    });

    //! ---> sortedRoll <-- //
    let sortedRoll = rawRoll.slice().sort().filter(Boolean);

    //! ---> comboCode <-- //
    let comboCode = rollCipher(sortedRoll);

    //! ---> rollObj (to return)(END) <-- //
    currentRoll.push(rawRoll, sortedRoll, comboCode);
    if (!rawRoll.length === freeDice && !sortedRoll.length === freeDice) {
      console.error("ERROR!!!");
    } else {
      // -----------> storing rollObj in currentTurn <-- //
      currentTurn.push(currentRoll);
      console.log(currentRoll[0] + "\n\n" + currentRoll[1] + "\n\n" + currentRoll[2]);
      changeImages();
      return currentRoll;
    }
  }
}




function changeImages() {
  // let currentRoll = currentRoll[0];
  dieImages.forEach((_img, i, arr) => {
    if (currentRoll[0][i] === 0) {
      this.continue;
    } else {
      arr[i].src = arr[i].src.replace(/([1-6])([fh])(?=\.png)/, `${currentRoll[0][i]}$2`);
    }
  })
}




function rollCipher(_sortedRoll1) {
  let tempArr1 = _sortedRoll1.slice();
  let tempArr2 = [];
  let accum = 0,
    count;
  while (tempArr1.length > 0) {
    if (tempArr1[accum] === tempArr1[accum + 1]) {
      accum++;
    } else {
      tempArr2.push(tempArr1.splice(0, accum + 1));
      accum = 0;
    }
  }
  tempArr2 = tempArr2.sort((a, b) => b.length - a.length).flat();
  // console.log(tempArr2);
  count = 1;
  tempArr2.forEach((item, i, arr) => {
    if (item === arr[i + 1]) {
      tempArr1.push(count);
    } else {
      tempArr1.push(count++);
    }
  });
  // console.log(tempArr1);
  return tempArr1.join("");
}

// function scoreRoll() {

// }



/* //! Trying to copy freeDice into a scoped array

function rollDice() {
  // currentRoll = []; // - to return
  let _freeDice = freeDice();
  console.log(_freeDice[0] + '\n' + _freeDice[1]);
  //! --> pre-testing for error
  if (_freeDice[0] > 6) {
    return console.error("ERROR!!!\nTOO MANY DICE");
  } else if (_freeDice[0] === 0) {
    return console.log("All dice are currently being held");
  } else {

    //! ---> rawRoll <-- //
    const rawRoll = [];
    // for (let i = 0; i < freeDice()[0]; i++) {
    //   rawRoll.push(Math.floor(Math.random() * 6) + 1);
    // }

    dieCheckboxes.forEach((box) => {
      if (box.checked) {
        rawRoll.push(0);
      } else {
        rawRoll.push(Math.floor(Math.random() * 6) + 1);
      }
    });

    //! ---> sortedRoll <-- //
    let sortedRoll = rawRoll.slice().sort().filter(Boolean);

    //! ---> comboCode <-- //
    let comboCode = rollCipher(sortedRoll);

    //! ---> rollObj (to return)(END) <-- //
    currentRoll.push(rawRoll, sortedRoll, comboCode);
    if (!rawRoll.length === _freeDice[1] && !sortedRoll.length === _freeDice[1]) {
      console.error("ERROR!!!");
    } else {
      // -----------> storing rollObj in currentTurn <-- //
      currentTurn.push(currentRoll);
      console.log(currentRoll[0] + "\n\n" + currentRoll[1] + "\n\n" + currentRoll[2]);
      changeImages();
      return currentRoll;
    }
  }
}

*/