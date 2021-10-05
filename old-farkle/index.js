//*************************************************/
//* ----------------DOM selectors----------------- /
//* ---------------------------------------------- /
//*************************************************/


//*************************************************/
//* ----------------Event Listeners--------------- /
//* ---------------------------------------------- /
//*************************************************/
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

function dieClickListener() {
  const dice = [...(document.querySelectorAll('.die-area') ) ];
  dice.forEach(die => {
    die.addEventListener('click', () => {
      
    })
  })


}




//*************************************************/
//* ----------------rollDice---------------------------------- /
//* ---------------------------------------------- /
//* Simulates rolling all un-held dice in-game.    /
//* generates rdm numbers and updates game images. /
//*************************************************/
const rollDice = () => {
  //*  0.) Declared variables
  const diceHTMLLabels = Array.from(document.querySelectorAll('#dice > label'));

  //*  1.) Queries dice HTML elements and return the number of unchecked dice.
  
  //* 2.) Function takes freeDice as an argument and return a string of random numbers between 1-6 with a length of freeDice
  const rollStr = (() => {
    const freeDice = (() => {
      let freeDice = 0;
      diceHTMLLabels.forEach(label => {
        if (!label.control.checked) {
          freeDice++;
        }
      });
      return freeDice;
    })();
    let str = "";
    for (let i = 0; i < freeDice; i++) {
      str += Math.floor(Math.random() * 6) + 1;
    }
    return str;
  })();

  //* 3.) Function that updates the dice images in-game based on the numbers returned in rollStr
  const replaceDieImages = (() => {
    let i = 0;
    diceHTMLLabels.forEach((label) => {
      if (!label.control.checked) {
        // label.control.
      }
    })

  })();


  //* 4.) Check if the rollStr is a farkle.
  
  return // doesn't return anything.
};




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