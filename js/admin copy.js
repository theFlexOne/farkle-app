const thisDiceRoll = [];
diceFree = function(){

}

// probably a method for an over-arching game object like gameTable = {}
// so rollFreeDice() will be:  gameTable.rollFreeDice()
// might want to mutate into a 'getter'

rollFreeDice = function(){
    
    for (let i = 0; i < numberOfDiceToRoll; i++) {
        diceRoll[i] = Math.floor(Math.random() * diceFree) + 1;
    };
}


// function to call when "ROLL!!!" button is clicked

// function rollFreeDice(freeDice = NaN) {

//     // iterate over
//     const freeDice // number of "free" dice/ not held dice.
//     array.forEach(element => {
        
//     });
//     if (this.free === true) {

//     }
    
//     for (let i = 0; i < numberOfDiceToRoll; i++) {
//         diceRoll[i] = Math.floor(Math.random() * numberOfDiceToRoll) + 1;
//         };
    
  
// }; 

