  
// ! This Is the CURRENT build for "roll"
// const turn = {
//   allRolls: [],
//   currentRoll: allRolls[length-1] || undefined,
  
// }

function Roll(_sortedRoll1){
  
  // * --freeDice--* //
  const freeDice = (() => {
    const diceCheckBox = document.querySelectorAll(".die");
    const freeArr = [];
    let freeNum = 0;
    diceCheckBox.forEach(( _e, i, arr) => {
        if (!arr[i].checked) {
            freeArr.push(1);
        } else {
            freeArr.push(0);
        }
    });
    freeArr.forEach(item => freeNum += item);
    return {freeNum, freeArr};
  })();

  // * --rawRoll--* //
  const rawRoll = (() => {
    // ---> rawRoll <-- //
    const _rawRoll = [];
    for (let i = 0; i < freeDice.freeNum; i++) {
      _rawRoll.push(Math.floor(Math.random() * 6) + 1);
    }
    return _rawRoll;
  })();

  // * --sortedRoll--* //
  const sortedRoll = (() => rawRoll.slice().sort())();

  // * --cipheredRoll--* //
  const cipheredRoll = (() => {
    let tempArr1 = sortedRoll.slice();
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
  })()

  // * --value of "new Roll()"--* //
  return {freeNum: freeDice.freeNum, freeArr: freeDice.freeArr, rawRoll, sortedRoll, cipheredRoll};
}







