const getRandomCard = () => {
    let randomNumer = Math.floor(Math.random() * 12) + 1;
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

let cards = []
let sum = 0 
let hasBlackJack = false
let isAlive = false
let gameOver = false;
let message = ""
let player = {
    name: 'ronnen',
    chips: 0
}


let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")


const playGame = () => {
    if (isAlive !== true && gameOver !== true) {
   
    isAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard() 
    sum += firstCard
    sum += secondCard

    cards.push(firstCard)
    cards.push(secondCard)

    renderGame()

    }
    else{
        alert("can't");    

    }
}

const newCard = () => {
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    else{
        alert("can't")

    }

}

const renderGame = () => {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack! 10$! click on GO AGAIN to play more"
        hasBlackJack = true
        player.chips += 10
        playerEl.textContent = `Player: $ ${player.chips}`
    } else {
        message = "You're out of the game! -5$. click on GO AGAIN to play more"
        isAlive = false
        player.chips -= 5;
        playerEl.textContent = `Player: $ ${player.chips}`

        gameOver = true;
    }
    messageEl.textContent = message
}

const newGame = () =>{
    if (isAlive === false || hasBlackJack === true){
        cards = []
        sum = 0 
        hasBlackJack = false
        isAlive = false
        gameOver = false;
        playGame()
    }
    else{
        alert("can't")
    }
}