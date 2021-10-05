allTurns = 




turnNum = -1
class Turn{
    constructor(){
        this.turnNum = ++turnNum;
        this.allRolls = {
            rawRolls: [],
            sortedRolls: [],
        };
    }
}