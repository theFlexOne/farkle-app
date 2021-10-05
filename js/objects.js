/*****************/
/* farkle Object */
/*****************/

// Umbrella object for the entire Farkle game.
// Contains props & methods & class constructors like:
//   - allUsers, newPlayer(), newGame(), User, Game
const farkle = { // Main Object - "farkle" - primary Object
    allUsers: [],
    allActiveUsers: [],
    User: class User { // Object - "User"
        constructor(userName, IRLName) {
            this.userName = userName; // Get from newUser HTML form
            this.IRLName = IRLName;
            this.id = Date.now();
            this.userNum;
            this._pin; //Get from newUser HTML form. use as password to sign in.
        }
    },
    Game: class Game {
        constructor(){
            this.id = Date.now();
            this.gameNum
        }
    },
    newUser(userName, IRLName) {
        const users = this.allUsers;
        users.push(new this.User(userName, IRLName));
        users[users.length-1].userNum = users.length;
    }
};

/* game Object */
// Each new game generates a new, unique gameObj
const gameObj = {

};

// class User {
//     constructor() {
//         this.id = Date.now();
//         this.user = ""; // Get from newUser HTML form
//         this._pin = pin; //Get from newUser HTML form. use as password to sign in.

//     }
// };

