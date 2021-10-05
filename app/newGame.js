

const diceCheckboxes = document.querySelectorAll('#diceWrapper input[type="checkbox"]');
const diceImages = document.querySelectorAll('#diceWrapper img');

const createNewId = () => Date.now().toString().slice(0, -6);
const rollDie = () => Math.floor(Math.random() * 6) + 1;
const rollFreeDice = freeDice => {
  const rollNums = [];
  for (let i = 0; i < freeDice; i++) {
    rollNums.push(rollDie())
  }
  return rollNums;
};

const freeDiceAmount = () => {
  // debugger;
  let freeNum = 0;
  diceCheckboxes.forEach((item, i, array) => {
    if (!array[i].checked) {
      freeNum++;
    }
  })
  return freeNum;
  // console.log(diceCheckboxes);
};

const rollDice = () => {
  const freeDice = freeDiceAmount();
  const rolledDice = rollFreeDice(freeDice); // returns an array of rolled die values
  // console.log(rolledDice);
  let rdIndex = 0;
  diceCheckboxes.forEach((item, i, array) => {
    // console.log(rdIndex);
    // console.log(array);
    // console.log(array[i]);
    // console.log(array[i].checked);
    if (!array[i].checked) {
      //update image
      let replacementSrc = diceImages[i].src;
      replacementSrc = `.\\images\\${rolledDice[rdIndex]}f.png`
      diceImages[i].src = replacementSrc;
      rdIndex++;
    }
  })
  if (rdIndex !== rolledDice.length) {
    console.error("rdIndex !== number of rolled dice")
    console.error("rdIndex->", rdIndex, "number of rolled dice->", rolledDice.length)
  }
  return rolledDice;
};

class Game {
  constructor() {
    console.log("A new game has begun!");
    this.id = createNewId();
    this.players = [];
    this.rules = ""; // name of the rules used for game, found in the rules object or json
    this.rulesPath = ""; // path to rules object or json
    this.gameLog = {
      rollHistory: [],
      turnHistory: [],
      roundHistory: [],
      playersHistory: [],
      scoreHistory: []
    };
    this.rollDice = rollDice;
  }

}

