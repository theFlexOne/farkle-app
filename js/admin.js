/*
TODO -- Finish moving shit into the file to clean up JS folder
*/



//* The function below be called last when roll button is clicked & rollFreeDice 
//* is called. Updates the dice images to reflect "rollFreeDice >>> rollNumbers"

function updateDieImages(){
    const dieImages = document.querySelectorAll("#diceWrapper label img");
    const dieCheckboxes = document.querySelectorAll("#diceWrapper input");
    dieCheckboxes.forEach((item, i) => {
        item.addEventListener('change', e =>{
            if (e.target.checked) {dieImages[i].src = dieImages[i].src.replace(/([1-6])([fh])(?=\.png)/, "$1h")}
            else {dieImages[i].src = dieImages[i].src.replace(/([1-6])([fh])(?=\.png)/, "$1f")}
        })
    })
}

/*

________________________________________________________________________
* Below is all the relevant modules used in farkle to organize js files
------------------------------------------------------------------------
TODO -- split up into respective js module files
*/

//- comboObj is a static object created by parsing a JSON objects stored in a JSON file.
//- the default JSON file is the one the admin creates, but all others are variations
//- on point rewards. (different rule sets where rules are just the points awarded)
//? a separate object called ~~rulesObject contains all other rules. ("who goes first?", "points to win", etc.) 

scoreRoll = (function() {
    const comboObjects = [
        yahtzee = {
            name: "yahtzee",
            regex: /^([1-6])\1{5}$/,
            points() {3000},
            length: 6
        },
        tripDubs = {
            name: "tripDubs",
            regex: /^(([1-6])\2)(?!\1)(([1-6])\4)(?!\3)(([1-6])\6)(?!\5)$/,
            points() {2000},
            length: 6
        },
        dubTrips = {
            name: "dubTrips",
            regex: /^(([1-6])\2\2)(?!\1)(([1-6])\4\4)(?!\3)$/,
            points: 2000,
            length: 6
        },
        fullHouse = {
            name: "fullHouse",
            regex: /^(([1-6])\2{3})(?!\2)([1-6])\3$/,
            points: 1500,
            length: 6
        },
        straight = {
            name: "straight",
            regex: /^(([1-6])(?!\2)){6}$/,
            points: 2500,
            length: 6
        },
        fiveOfAKind = {
            name: "fiveOfAKind",
            regex: /^([1-6])\1{4}(?!\1)[1-6]?$/,
            points: 1500,
            length: 5
        },
        fourOfAKind = {
            name: "fourOfAKind",
            regex: /^(([1-6])\2{3}(?!\2))(?!(\d)\3)([1-6]*)(?!\4){0,2}$/,
            points: 1000,
            length: 4
        },
        triples = {
            name: "triples",
            regex: /^([1-6])\1\1(?!\1)([1-6])(?!\2\2)/,
            points: NaN,
            length: 3
        },
        singles = {
            name: "ones",
            regex: [ [RegExp], [RegExp] ],
            length: 1,
            points(rollNums) {
                let points = 0;
                const numArray = Array.from(rollNums);
                const counter = {
                    ones: 0,
                    fives: 0
                }
                numArray.forEach(function(num) {
                    if (counter.ones > 3 || counter.fives > 2) {
                        return console.error("invalid singles roll. roll should of been matched in a previous test.");
                    }
                    if (num == 1) {
                        points += 100;
                        counter.ones++
                    }
                    if (num == 5){
                        points += 50;
                        counter.fives++
                    }
                },)
                return points;
            }
        }
    ]
    
    return {
        comboObjectsCopy: comboObjects.slice()
    }
})();

const comboKey = [
    /^([1-6])\1{5}$/,
    /^(([1-6])\2)(?!\1)(([1-6])\4)(?!\3)(([1-6])\6)(?!\5)$/,
    /^(([1-6])\2\2)(?!\1)(([1-6])\4\4)(?!\3)$/,
    /^(([1-6])\2{3})(?!\2)([1-6])\3$/,
    /^(([1-6])(?!\2)){6}$/,
    /^([1-6])\1{4}(?!\1)[1-6]?$/,
    /^(([1-6])\2{3}(?!\2))(?!(\d)\3)([1-6]*)(?!\4){0,2}$/,
    /^([1-6])\1\1(?!\1)([1-6])(?!\2\2)/
];


// //! I NEED THIS BELOW
// const scoringRegexList = (() => {
//     const rHand = [];
//     Object.values(scoringObject).forEach((item)=>{
//         rHand.push(item.regex)
//     })
//     return rHand;
// })()

//; possible object in
    /* 
    const farkle = {
        name: "FARKLE",
        regex: undefined,
        points: 0,
        length: 0,
        farkle(string) {
            if (typeof string) {
                
                string = string.split('');
                string.forEach((item) => {
                    if (item !== "5" || item !== "1") {
                        console.log("FARKLE");
                    }
                })
            }
        }
    }
*/

// ________________________________________________________________________
