
const appInit = () => {
  const dieImages = Array.from(document.querySelectorAll("#diceWrapper label img"));
  const dieCheckboxes = Array.from(document.querySelectorAll("#diceWrapper input"));
  const dieCheckboxesLabels = Array.from(document.querySelectorAll("#diceWrapper label"));
  const rollDiceButton = document.getElementById("rollDiceButton");

  console.dir(dieImages);

  const setEventListeners = () => {
    console.log("START");
    
    const getDiceNumbers = () => {
      let freeDiceCounter = 0;
      dieCheckboxes.forEach(checkbox => !checkbox.checked ? freeDiceCounter++ : freeDiceCounter)
      console.log(freeDiceCounter);
      return freeDiceCounter;
    };
    const rollDice = () => {
      const rolledDice = [];
      const diceNumbers = getDiceNumbers();
      dieCheckboxes.forEach((checkbox, i) => {
        if (!checkbox.checked) rolledDice.push(Math.floor(Math.random() * 6) + 1);
        else rolledDice.push(0);
      })
      console.log(rolledDice.join(''));
      return rolledDice.join('');
    };

    dieCheckboxes.forEach((item, i) => {
      const imageSrc = dieImages[i].src
      item.addEventListener('change', e =>{
        if (e.target.checked) dieImages[i].src = dieImages[i].src.replace(/([1-6])([fh])(?=\.png)/, "$1h");
        else dieImages[i].src = dieImages[i].src.replace(/([1-6])([fh])(?=\.png)/, "$1f");
      });
    });

    rollDiceButton.addEventListener("click", (e) => {
      const rollDiceNumbers = rollDice();
      console.log(rollDiceNumbers);
      // debugger;

      //todo     <-- here -->
      // dieCheckboxes.forEach((checkbox, i, array) => {
      //   if (!checkbox.checked) {
      //     const src = checkbox.children[0].src;
      //     console.dir(src);
      //     src = src.replace(/([1-6])([fh])(?=\.png)/, `${rollDiceNumbers[i]}$2`);
      //     i++;
      //   }
      // })


      e.preventDefault();
    })


  };

  setEventListeners();
};
    // dieImages.addEventListener('click', () => {
    //   debugger
    //   dieImages.forEach((img, i, images) => {
    //     const imageEnding = img.src.slice(-5, -4)
    //     console.dir(imageEnding);

        // if ( === "f") {
        //   console.log("free");
        // } else {
        //   console.log("held");
        // }
      
const dieCheckboxes = appInit();