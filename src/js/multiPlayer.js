// Variáveis Player 1

var player1 = document.querySelector('.player1')

var player1Num1 = document.querySelector('.player1Num1')
var valueChoiced1Player1 = Number(player1Num1.value)

var player1Num2 = document.querySelector('.player1Num2')
var valueChoiced2Player1 = Number(player1Num2.value)

var player1Num3 = document.querySelector('.player1Num3')
var valueChoiced3Player1 = Number(player1Num3.value)


// Variáveis Player 2
var player2 = document.querySelector('.player2')

var player2Num1 = document.querySelector('.player2Num1')
var valueChoiced1Player2 = Number(player2Num1.value) 

var player2Num2 = document.querySelector('.player2Num2')
var valueChoiced2Player2 = Number(player2Num2.value)

var player2Num3 = document.querySelector('.player2Num3')
var valueChoiced3Player2 = Number(player2Num3.value)


//Clicks player 1
player1Num1.addEventListener('click', () => {

    player1Num1.disabled = false
    player1Num2.disabled = false
    player1Num3.disabled = false

    player2Num1.disabled = true
    player2Num2.disabled = true
    player2Num3.disabled = true

    player1Num1.setAttribute('value', `${valueChoiced1Player1 += 1}`)
    player1Num2.setAttribute('value', `${valueChoiced2Player1 += 1}`)
    player1Num3.setAttribute('value', `${valueChoiced3Player1 += 1}`)
    player2Num1.setAttribute('value', `${valueChoiced1Player2 += 1}`)
    player2Num2.setAttribute('value', `${valueChoiced2Player2 += 1}`)
    player2Num3.setAttribute('value', `${valueChoiced3Player2 += 1}`)
    /*wrapperMainNumber.innerHTML = `${mainNumber += 1}`
    wrapperMainNumber.style.fontSize = '70pt'
    isTurnPlayer1 = true
    verifyMainNumber(mainNumber)*/

})

numChoicedPlay2.addEventListener('click', () => {

    player1Num1.disabled = true
    player1Num2.disabled = true
    player1Num3.disabled = true

    player2Num1.disabled = false
    player2Num2.disabled = false
    player2Num3.disabled = false
    
    player1Num1.setAttribute('value', `${valueChoiced1Player1 += 2}`)
    player1Num2.setAttribute('value', `${valueChoiced2Player1 += 2}`)
    player1Num3.setAttribute('value', `${valueChoiced3Player1 += 2}`)
    player2Num1.setAttribute('value', `${valueChoiced1Player2 += 2}`)
    player2Num2.setAttribute('value', `${valueChoiced2Player2 += 2}`)
    player2Num3.setAttribute('value', `${valueChoiced3Player2 += 2}`)
    /*wrapperMainNumber.innerHTML = `${mainNumber += 2}`
    wrapperMainNumber.style.fontSize = '70pt'
    isTurnPlayer1 = true
    verifyMainNumber(mainNumber)*/
})

numChoicedPlay3.addEventListener('click', () => {

    player1Num1.disabled = false
    player1Num2.disabled = false
    player1Num3.disabled = false

    player2Num1.disabled = true
    player2Num2.disabled = true
    player2Num3.disabled = true
   
    player1Num1.setAttribute('value', `${valueChoiced1Player1 += 2}`)
    player1Num2.setAttribute('value', `${valueChoiced2Player1 += 2}`)
    player1Num3.setAttribute('value', `${valueChoiced3Player1 += 2}`)
    player2Num1.setAttribute('value', `${valueChoiced1Player2 += 2}`)
    player2Num2.setAttribute('value', `${valueChoiced2Player2 += 2}`)
    player2Num3.setAttribute('value', `${valueChoiced3Player2 += 2}`)
    /*wrapperMainNumber.innerHTML = `${mainNumber += 3}`
    wrapperMainNumber.style.fontSize = '70pt'
    isTurnPlayer1 = true
    verifyMainNumber(mainNumber)*/
})




