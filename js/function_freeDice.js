





function freeDice(){
    const dice = document.querySelectorAll(".die");
    const freeDiceArr = [];
    let freeDice = 0;
    dice.forEach(( _node, i, arr) => {
        if (!arr[i].checked) {
            freeDiceArr.push(1);
        } else {
            freeDiceArr.push(0);
        }
    });
    freeDiceArr.forEach(item => freeDice += item);
    return [freeDice, freeDiceArr];
}





