

const diceForm = document.querySelector('#diceWrapper')
const diceCheckboxes = document.querySelectorAll('#diceWrapper input[type="checkbox"]');
const diceImages = document.querySelectorAll('#diceWrapper img');
const diceLabels = document.querySelectorAll('#diceWrapper label');
const formResetHTML = `
        <label for="d1" name="dice"
          ><img
            data-die-status="free"
            src="./images/black-transparent-dice/die1.png"
            alt="Die #1"
            title="Die #1"
            width="125"
          />
          <input type="checkbox" id="d1" name="d1" hidden />
        </label>
        <label for="d2" name="dice"
          ><img
            data-die-status="free"
            src="./images/black-transparent-dice/die2.png"
            alt="Die #2"
            title="Die #2"
            width="125"
          />
          <input type="checkbox" id="d2" name="d2" hidden />
        </label>
        <label for="d3" name="dice"
          ><img
            data-die-status="free"
            src="./images/black-transparent-dice/die3.png"
            alt="Die #3"
            title="Die #3"
            width="125"
          />
          <input type="checkbox" id="d3" name="d3" hidden />
        </label>
        <label for="d4" name="dice"
          ><img
            data-die-status="free"
            src="./images/black-transparent-dice/die4.png"
            alt="Die #4"
            title="Die #4"
            width="125"
          />
          <input type="checkbox" id="d4" name="d4" hidden />
        </label>
        <label for="d5" name="dice"
          ><img
            data-die-status="free"
            src="./images/black-transparent-dice/die5.png"
            alt="Die #5"
            title="Die #5"
            width="125"
          />
          <input type="checkbox" id="d5" name="d5" hidden />
        </label>
        <label for="d6" name="dice"
          ><img
            data-die-status="free"
            src="./images/black-transparent-dice/die6.png"
            alt="Die #6"
            title="Die #6"
            width="125"
          />
          <input type="checkbox" id="d6" name="d6" hidden />
        </label>
`


const createNewId = () => Date.now();

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

const addListeners = () => {
  const rollButton = document.querySelector('#rollButton');
  rollButton.addEventListener('click', rollDice);
  diceLabels.forEach(label => {
    console.log(label);
    label.addEventListener('click', e => {
      console.log(e.target);
      (label.checked) ? e.target.className = "held" : e.target.className = "";
    })
  })
  
};

export class Game {
  constructor() {
    console.log("A new game has begun!");
    diceForm.innerHTML = formResetHTML;
    addListeners();
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
  }
}