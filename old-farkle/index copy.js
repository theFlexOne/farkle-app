
const dieImages = document.querySelectorAll("#diceWrapper label img");
const dieCheckboxes = document.querySelectorAll("#diceWrapper input");
const rollDiceButton = document.getElementById("rollDiceButton");
let roll = 1;

const rollFreeDice = () => {
  let count = 0;
  dieCheckboxes.forEach(checkbox => !checkbox.checked ? count++ : undefined);
  console.log(count);
  return count;
};


//! Event Listeners
//!<--------------->

dieCheckboxes.forEach((item, i) => {
  item.addEventListener('change', e =>{
    if (e.target.checked) {
      dieImages[i].src = dieImages[i].src.replace(/([1-6])([fh])(?=\.png)/, "$1h");
    }
    else {
      dieImages[i].src = dieImages[i].src.replace(/([1-6])([fh])(?=\.png)/, "$1f")
    }
  });
});

dieCheckboxes.forEach((item, i) => {
  item.addEventListener('change', e =>{
    //TODO ---> replace below with dieCheckboxes.forEach()
    if (e.target.checked) {
      dieImages[i].src = dieImages[i].src.replace(/([1-6])([fh])(?=\.png)/, "$1h");
    }
    else {
      dieImages[i].src = dieImages[i].src.replace(/([1-6])([fh])(?=\.png)/, "$1f")
    }
  });
});


rollDiceButton.addEventListener('click', rollFreeDice);

















// function dieClickListener() {
//   const dice = [...(document.querySelectorAll('.die-area') ) ];
//   dice.forEach(die => {
//     const classes = die.classList;
//     console.log(classes);
//     die.addEventListener('click', [...classes].includes('free') ? classes.remove('free') : classes.add('free'));  
//     })
//   }
















// die faces to be appended
/*
const FACE_SIX = '
<div class="face six">\n
<div class="container">\n
            <div class="dot"></div>\n
            <div class="dot"></div>\n
            <div class="dot"></div>\n
          </div>\n
          <div class="container">\n
            <div class="dot"></div>\n
            <div class="dot"></div>\n
            <div class="dot"></div>\n
          </div>\n
        </div>'
        
        
<div id="dieFive">
        <div class="face five">
          <div class="container">
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
          <div class="container">
            <div class="dot"></div>
          </div>
          <div class="container">
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
      </div>

<div id="dieFour">
        <div class="face four">
          <div class="container">
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
          <div class="container">
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
      </div>

<div id="dieThree">
        <div class="face three">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>

<div id="dieTwo">
        <div class="face two">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>

<div id="dieOne">
        <div class="face one">
          <div class="dot"></div>
        </div>
      </div>





*/