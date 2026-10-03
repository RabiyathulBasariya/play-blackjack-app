let player = {
    name: "per",
    chips: 200
}

console.log(player.chips)
let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";

let Game = document.getElementById("Game");
let SumEl = document.getElementById("Sum-el");
let CardEl = document.getElementById("Card-el");

let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name +": $"+ player.chips;


function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1;

    if (random === 1) {
        return 11;
    }

    else if (random > 10) {
        return 10;
    }

    else {
        return random;
    }

}


function startGame() {
    isAlive = true;
    let random1 = getRandomCard();
    let random2 = getRandomCard();
    cards = [random1, random2];
    sum = random1 + random2;
    renderGame();
}

function renderGame() {

    CardEl.textContent = "Card: "
    SumEl.textContent = "Sum: " + sum;

    for (i = 0; i < cards.length; i++) {
        CardEl.textContent += cards[i] + " ";
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    }

    else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    }

    else {
        message = "You're out of the game!";
        isAlive = false;
    }

    Game.textContent = message;

}



function newCard() {
    console.log("Drawing a new card from the deck");

    if (hasBlackJack === false && isAlive === true) {
        let card = getRandomCard();

        sum += card;

        cards.push(card);
        console.log(cards)
    }

    renderGame();

}