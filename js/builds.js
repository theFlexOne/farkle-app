const sessionRollHistory = []; // test purposes only

//***********************************************/
//** Final Roll Function **//
//* rollFreeDice() will be the end wrapper function.
//* functions underneath are to be inserted into 
//* rollFreeDice() when finished.
//***********************************************/

function rollFreeDice(){  //; returns an object
  const rawRollArr = (function() { //; rollNumbers is returned as an object prop
    let result = [];
    document.querySelectorAll("#diceWrapper input").forEach(die => {
      if (die.checked) {
        result.push(0);
      } else {
        result.push(Math.floor(Math.random() * 6) + 1);
      }
    });
    return result
  })();

  const scoringCode = (function() {
    const arrCopy = rawRollArr.slice().sort().reverse();
    let result = [];
    let i = 0;
    while (arrCopy.length > 0) {
      if (arrCopy[i] === arrCopy[i + 1]) {
        i++;
      } else {
        result.push(arrCopy.splice(0, i + 1));
        i = 0;
      }
    }
    return result.sort((a, b) => b.length - a.length).flat().join("");
  })();
  return console.log("rawRollArr = ", rawRollArr, "scoringCode = ", `"${scoringCode}"`);
  
};
  // console.log(typeof rollNumbers);
  

  //; returns rollPoints & rollName
const rollPoints = (function*() {
  yield pointsTotal = 0;
  if (typeof rollNumbers !== "string") {
    return console.error("rollNumbers is not a string", (typeof rollNumbers));    
  }
  for (const prop in scoringObject) {
    console.log(prop);
    if (prop == "triples") {
      break;
    }
    console.log(typeof prop);
    // if (prop.regex.test(rollNumbers) && typeof prop.points === "number") {
      // pointsTotal += prop.points
    // }
  }
  return pointsTotal;

})();





  
//   //; This is the return value of rollFreeDice(), an object.
//   return {
//     rawRoll,
//     cleanRoll,
//     rollPoints
//     // rollName
//   }
// };


function test1() {
  const rHand = Object.values(scoringObject);
  const lHand = [];
  rHand.forEach((item) => {
      if (item.points){
          lHand.push(item.name);
      }
  })
  return lHand;
}



//* scoreRoll() returns the point value of a rollNumbers or "FARKLE" if value = 0.
function scoreRoll(string = "336624") {
  console.log(string);
  const nums = string;
  const scoringList = Object.values(scoringObject);
  let totalPoints = 0;
  let remainder;
  for (let i = 0; i < 8; i++) {
    if (scoringList[i].regex.test(nums)) {
      if (scoringList[i].length === 6) {return totalPoints += scoringList[i].points}
      else {
        totalPoints += scoringList[i].points;
        nums = nums.split('').splice(0, scoringList[i].length);
        console.log(nums, remainder);
      break;
    } // almost there. mess with if else shit
  } 

  }
  scoringObject.singles.points();
  return totalPoints;
}

function triplesPoints() {

}

function singleDiePoints() {

}


//***********************************************/
//***********************************************/


















// const getRollTotal = (code, rHand) => {
//   fullCode = fillOutCode(code);
//   console.log(fullCode);
// }
/*
//  * -fillOutCode()- *  //
*/
// function fillOutCode(code) {
//   if (code.length !== 6) {
//     code = Array.from(code);
//     while (code.length < 6){
//       code.push("0");
//     }
//     code = code.join(''); 
//   }
//   if (code.length !== 6) {
//     console.error("code.length is not 6");
//   } else {
//     return code
//   }
// }

// function matchCode(code, _roll) {
//   console.log(code);
//   if (typeof code == "string") {
//       const len = code.length;
//   } else {
//       console.error("code is not a string");
//   }
// }