//*************************************************/
//* ----------------scoringObject----------------- /
//* ---------------------------------------------- /
//* An object that holds all the scoring           /
//* info/rules                                     /
//*************************************************/

const scoringObject = {
  combos: [{
      name: "yahtzee",
      combo: "111111",
      regex: /^([1-6])\1{5}$/,
      points: 3000,
      numOfDice: 6
    },
    {
      name: "tripDubs",
      combo: "112233",
      regex: /^(([1-6])\2)(?!\1)(([1-6])\4)(?!\3)(([1-6])\6)(?!\5)$/,
      points: 2000,
      numOfDice: 6
    },
    {
      name: "dubTrips",
      combo: "111222",
      regex: /^(([1-6])\2\2)(?!\1)(([1-6])\4\4)(?!\3)$/,
      points: 2000,
      numOfDice: 6
    },
    {
      name: "fullHouse",
      combo: "111122",
      regex: /^(([1-6])\2{3})(?!\2)([1-6])\3$/,
      points: 1500,
      numOfDice: 6
    },
    {
      name: "straight",
      combo: "123456",
      regex: /^(([1-6])(?!\2)){6}$/,
      points: 2500,
      numOfDice: 6
    },
    {
      name: "fiveOfAKind",
      combo: "11111x",
      regex: /^([1-6])\1{4}(?!\1)[1-6]?$/,
      points: 1500,
      numOfDice: 5
    },
    {
      name: "fourOfAKind",
      combo: "1111xx",
      regex: /^(([1-6])\2{3}(?!\2))(?!(\d)\3)([1-6]*)(?!\4){0,2}$/,
      points: 1000,
      numOfDice: 4
    },
    {
      name: "tripOnes",
      combo: "111*",
      regex: "",
      points: undefined,
      numOfDice: 6
    },
    {
      name: "tripTwos",
      combo: "222*",
      regex: "",
      points: undefined,
      numOfDice: 6
    },
    {
      name: "tripThrees",
      combo: "333*",
      regex: "",
      points: undefined,
      numOfDice: 6
    },
    {
      name: "tripFours",
      combo: "444*",
      regex: "",
      points: undefined,
      numOfDice: 6
    },
    {
      name: "tripFives",
      combo: "555*",
      regex: "",
      points: undefined,
      numOfDice: 6
    },
    {
      name: "tripSixes",
      combo: "666*",
      regex: "",
      points: undefined,
      numOfDice: 6
    },
    // { name: undefined, combo: "112234", regex: /^([1-6])\1\1(?!\1)([1-6])(?!\2\2)/, points: 0, numOfDice: 6 },
    // { name: undefined, combo: "112345", regex: /^([1-6])\1\1(?!\1)([1-6])(?!\2\2)/, points: 0, numOfDice: 6 },

  ],
  triplesScores: [{}]
}