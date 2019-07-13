var elAddDice = document.getElementById("add-dice");
var elRoll = document.getElementById("roll");
var elParent = document.getElementById("parent");
var elClassList = ["dice-1", "dice-2", "dice-3", "dice-4", "dice-5", "dice-6"];

function addDice() {
    var newDiv = document.createElement("div");
    newDiv.className = "dice class-1";
    elParent.appendChild(newDiv);
};

elAddDice.addEventListener("click", addDice);

function changeDice() {
    var allDices = document.querySelectorAll(".parent-box div");
    allDices.forEach(function (dice) {
        dice.classList = elClassList[Math.floor(Math.random() * elClassList.length)];
    });
};

elRoll.addEventListener("click", changeDice);







