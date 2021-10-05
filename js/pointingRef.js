/* pointingReference Object:
    A) holds all the ways a roll can point or "pointingCombos";
    B) main object is an array of combos, seperated  into arrays by number of dice. 
        * store as JSON object so 
*/

const allPossibleCombos = [["111111", "111112", "111122", "111123", "111222", "111223", "111234", "112233", "112234", "112345", "123456"], ["11111", "11112", "11122", "11123", "11223", "11234", "12345"], ["1111", "1112", "1122", "1123", "1234"], ["111", "112", "123"]];
const allPossibleCombosPoints = [3000, 1500, 1500, 1000, 2000, "tripsFunc()", "tripsFunc()", 2000, "fourOrFiveFunc()", "fourOrFiveFunc()", 2500, 1500, 1000, "tripsFunc()", "tripsFunc()", "fourOrFiveFunc()", "fourOrFiveFunc()", "fourOrFiveFunc()", 1000, "tripsFunc()", "fourOrFiveFunc()", "fourOrFiveFunc()", "fourOrFiveFunc()"];

// const temp1 = (() => {
//     scoringObject
// })()



// scoringObject.yahtzee['nameLength'] = scoringObject.yahtzee.name.length;



const comboKeyPoints = [
    "yahtzee",
    "tripDubs",
    "dubTrips",
    "fullHouse",
    "straight",
    "fiveOfAKind",
    "fourOfAKind",
    "triples"
];

const scoringCombosArray = (() => {
    const rHand = [];
    comboKeyPoints.forEach( item => rHand.push(item));
    return rHand;
})();

const scoringCombosObject = {
    comboKey: [
        /^([1-6])\1{5}$/,
        /^(([1-6])\2)(?!\1)(([1-6])\4)(?!\3)(([1-6])\6)(?!\5)$/,
        /^(([1-6])\2\2)(?!\1)(([1-6])\4\4)(?!\3)$/,
        /^(([1-6])\2{3})(?!\2)([1-6])\3$/,
        /^(([1-6])(?!\2)){6}$/,
        /^([1-6])\1{4}(?!\1)[1-6]?$/,
        /^(([1-6])\2{3}(?!\2))(?!(\d)\3)([1-6]*)(?!\4){0,2}$/,
        /^([1-6])\1\1(?!\1)([1-6])(?!\2\2)/
    ],
    // insert more here
};

const testComboCode1 = ["1", "6"];
const testComboCode2 = ["11", "66"];
const testComboCode3 = ["111223", "666225"];
const testComboCode4 = ["1111", "6666"];
const testComboCode5 = ["11111", "66666"];
const testComboCode6 = ["111111", "666666"];
const testComboCode7 = ["111122", "556666"];
const testComboCode8 = ["333", "333"];


const testComboCodeFail6_1 = ["111123", "666645"];
const testComboCodeFail6_2 = ["111234", "666145"];
const testComboCodeFail6_3 = ["111112", "666661"];
const testComboCodeFail6_4 = ["112234", "551146"];

const testComboCodeFail5_1 = ["11111", "11111"];
const testComboCodeFail5_2 = ["11112", "11115"];
const testComboCodeFail5_3 = ["11122", "44411"];
const testComboCodeFail5_4 = ["11223", "55441"];


//   *scoring references*   //
const comboMisses = ["112234", "112345"];

const fullCombosObj = {
    fullCombos: ["111111", "112233", "111222", "111122", "123456"],
    fullCombosPoints: [3000, 2000, 2000, 1500, 2500]
};

const fourOrfiveObj = {
    fourOrfive: ["111112", "111123"],
    fourOrfivePoints: [1500, 1000]
};

const triplesObj = {
    triples: ["222", "333", "444", "555", "666"],
    triplesPoints: [200, 300, 400, 500, 600]
};


let pointsTotal = 0;
function scoreRoll(tempProp, _pointsTotal) {
    let copyProp = tempProp.slice(); // !  <<<--- this will be returned
    let scoreIndex = Math.abs(copyProp[0].length - 6);
    let combos = scoringCombos1[scoreIndex].combos;
    let points = scoringCombos1[scoreIndex].points;
    // let tempTotal;
    // if (_pointsTotal == true){

    // }
    console.log(copyProp[0] + ' - ' + scoreIndex);
    // console.log(tempProp, tempProp[0], tempProp[1]);
    if (scoreIndex < 3 && combos.includes(copyProp[0])) {
        pointsTotal += points[combos.indexOf(copyProp[0])];
        // if (scoringCombos[scoreIndex].combos.includes(copyProp)) {
            copyProp[1].splice(0, combos[0].length);
            // return console.log("YAY!!!", pointsTotal);
        // }
    } else if (scoreIndex === 3) {
        copySorted = copyProp[1].slice(0, 3).join('')
        console.log(copyProp[1]);
        if (combos.includes(copySorted)) {
            pointsTotal += (points[combos.indexOf(copySorted)]);
            // Array.from(copyProp[0]).splice(0, scoreIndex).join('');
            copyProp[1].splice(0, 3);
            console.log(copyProp[1], pointsTotal);
            
        }
        console.log(copySorted);
    } else if (copyProp[1].length === 0) {
            return console.log("YAY!!! DONE!!!", pointsTotal);
    } else if (scoreIndex === 4) {
        console.log("HERE!!!");
        tempProp[1].forEach((item, i, arr) => {
            if (item === 1) {
                pointsTotal += points[0];
            } else if (item === 5) {
                pointsTotal += points[1];
            }
        })
        return console.log("You're total points this roll are:  ---   ", pointsTotal);
    }
    copyProp[0] = Math.floor(parseInt(copyProp[0]) / 10).toString();
    console.log(copyProp);
    scoreRoll(copyProp);
}


















// function getPointsRecursive (combo/* = currentRoll[2]*/, roll/* = currentRoll[1]*/){
//     let len = combo.length;
//     let diceIndex = Math.abs(len - 6);
//     let list = (diceIndex < 4 && diceIndex > -1 ? scoringCombos[diceIndex] : "falsey");
//     console.log(diceIndex, scoringCombos[diceIndex], list);
//     let pointIndex = list[0].indexOf(combo);
//     if (combo === "111"){
//         let triple = roll.join('').match(/([1-6])\1{3,}/)[0];
//         console.log(triple === "555");
//         return console.log("Run through 3 dice cycle next");
//     } else if (len > 3 && len < 7) {
//         if (pointIndex > -1){
//             return list[1][pointIndex];
//         }
//     } else{

//     }
//     combo = combo.substring(0, combo.length-1);
//     console.log(combo);
//     return;
// }

// function getPointsForLoop (combo = testComboCode){
//     let index = Math.abs(combo.length - 6) // gives index to search in for "combo"
//     for (let i = index; i < 3; i++) {
//         if (scoringCombos[index][0].includes(combo)) {
//             let j = scoringCombos[index][0].indexOf(combo);
//             return scoringCombos[index][1][j];
//         } else {
//             combo = String.toString(parseInt(combo) / 10);
//             console.log(combo);
//         }
//     }
// }

// function getPointsWhile (combo = testComboCode) {
//     var count = Math.abs(combo.length - 6);
//     while (count < 3){
//         if (scoringCombos[count][0].includes(combo)) {
//             let index = scoringCombos[count][0].indexOf(combo);
//             let points = scoringCombos[count][1][index];
//             // console.log(index);
//             // console.log(points);
//             return points;
//         } else {
//             combo = combo.split('').splice(0, combo.length-1).join('');
//             count++;
//         }
//     }
//     console.log("YAY!!");
//     // console.log("The count is " + count);
//     // if (count = 3){
//     // }
// }


// let scoringTable = scoringCombos[scoreIndex];
// let index = 0
// while (scoreIndex < 2) {
//     if (comboCodeTest === scoringTable[0][i]) {
//         return scoringTable[1][0];
//     } else {
//         scoreIndex++;
//         comboCodeTest = Math.floor(comboCodeTest / 10);
//         scoringTable = scoringCombos[scoreIndex];
//         console.log(comboCodeTest, scoreIndex);
        
//     }
// }












/* -VvV- this is the old code below -VvV- 

const winCombos = {

    sixDice: {
        combosArr: [111111, 123456, 111122, 112233, 111222],
        yahtzee: {
            index: 0,
            code: 111111,
            points: 3000 //make all points ammount dynamic; set by a seperate JSON file.
        },
        straight: {
            index: 1,
            code: 123456,
            points: 2500 //make all points ammount dynamic; set by a seperate JSON file.
        },    
        fullBoat: {
            index: 2,
            code: 111122,
            points: 2500 //make all points ammount dynamic; set by a seperate JSON file.
        },
        tripDubs: {
            index: 3,
            code: 112233,
            points: 2500 //make all points ammount dynamic; set by a seperate JSON file.
        },
        dubTrips: {
            index: 4,
            code: 111222,
            points: 2500 //make all points ammount dynamic; set by a seperate JSON file.
        },
    },
    fiveDice: {
        combosArr: [11111],
        fiveOfAKind: {
            index: 0,
            code: 11111,
            points: 1500 //make all points ammount dynamic; set by a seperate JSON file.
        },
    },
    fourDice: {
        combosArr: [1111],
        fourOfAKind: {
            index: 0,
            code: 1111,
            points: 1000 //make all points ammount dynamic; set by a seperate JSON file.
        },
    },
    threeDice: {
        combosArr: [666, 555, 444, 333, 222],
        threeSixes: {
            index: 0,
            code: 666,
            points: 600 //make all points ammount dynamic; set by a seperate JSON file.
        },
        threeFives: {
            index: 1,
            code: 555,
            points: 500 //make all points ammount dynamic; set by a seperate JSON file.
        },
        threeFours: {
            index: 2,
            code: 444,
            points: 400 //make all points ammount dynamic; set by a seperate JSON file.
        },
        threeThrees: {
            index: 3,
            code: 333,
            points: 300 //make all points ammount dynamic; set by a seperate JSON file.
        },
        threeTwos: {
            index: 4,
            code: 222,
            points: 200 //make all points ammount dynamic; set by a seperate JSON file.
        }
    }
    // twoDice = [
    //     [p1,p1], [p1,p5], [p1,pX], [p5,p5], [p5,pX], [pX,pX]
    // ],
    // oneDie = [
    //     [p1], [p5], [pX]
    // ],
    
}; */



/*
const scoringCombos = [
    six = {
        // combos requiring 6 dice to roll
        combos: ["111111", "123456", "111122", "112233", "111222"],
        points: [3000, 2500, 2500, 2500, 2500]
    },
    five = {
        // combos requiring 5 dice to roll
        combos: ["11111"],
        points: [1500]
    },
    four = {
        // combos requiring 4 dice to roll
        combos: ["1111"],
        points: [1000]
    },
    three = {
        // combos requiring 6 dice to roll
        combos: ["666", "555", "444", "333", "222"],
        points: [600, 500, 400, 300, 200]
    },
    singles = {
        combos: [1, 5],
        points: [100, 50]
    }
];
*/



/*
// [
//             /^([1-6])\1{5}$/,
//             /^(([1-6])\2)(?!\1)(([1-6])\4)(?!\3)(([1-6])\6)(?!\5)$/,
//             /^(([1-6])\2\2)(?!\1)(([1-6])\4\4)(?!\3)$/,
//             /^(([1-6])\2{3})(?!\2)([1-6])\3$/,
//             /^(([1-6])(?!\2)){6}$/,
//             /^([1-6])\1{4}(?!\1)[1-6]?$/,
//             /^(([1-6])\2{3}(?!\2))(?!(\d)\3)([1-6]*)(?!\4){0,2}$/,
//             /^([1-6])\1\1(?!\1)([1-6])(?!\2\2)/    
//         ]
*/