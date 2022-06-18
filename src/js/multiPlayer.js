
import  "./cadastro" 
//main
var pagSingle = document.querySelector('.pagSingle')

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

var numeroPrincipal = 0

var sectionWinner = document.querySelector('#sec2')

//Criando funções
//Funções ativar e desativar
function desligarBut1 (){
    player1Num1.disabled = true
    player1Num2.disabled = true
    player1Num3.disabled = true
}

function desligarBut2 (){
    player2Num1.disabled = true
    player2Num2.disabled = true
    player2Num3.disabled = true
}

function ativarBut1(){
    player1Num1.disabled = false
    player1Num2.disabled = false
    player1Num3.disabled = false
}

function ativarBut2 (){
    player2Num1.disabled = false
    player2Num2.disabled = false
    player2Num3.disabled = false
}

//funções de somar
function somarButtons(){
    player1Num1.setAttribute('value', `${valueChoiced1Player1 += 1}`)
    player1Num2.setAttribute('value', `${valueChoiced2Player1 += 1}`)
    player1Num3.setAttribute('value', `${valueChoiced3Player1 += 1}`)
    
    player2Num1.setAttribute('value', `${valueChoiced1Player2 += 1}`)
    player2Num2.setAttribute('value', `${valueChoiced2Player2 += 1}`)
    player2Num3.setAttribute('value', `${valueChoiced3Player2 += 1}`)
    numeroPrincipal += 1
    verificarIs21(numeroPrincipal)
}
function somarButtons2(){
    player1Num1.setAttribute('value', `${valueChoiced1Player1 += 2}`)
    player1Num2.setAttribute('value', `${valueChoiced2Player1 += 2}`)
    player1Num3.setAttribute('value', `${valueChoiced3Player1 += 2}`)
    
    player2Num1.setAttribute('value', `${valueChoiced1Player2 += 2}`)
    player2Num2.setAttribute('value', `${valueChoiced2Player2 += 2}`)
    player2Num3.setAttribute('value', `${valueChoiced3Player2 += 2}`)
    numeroPrincipal += 2
    verificarIs21(numeroPrincipal)
}

function somarButtons3() {
    player1Num1.setAttribute('value', `${valueChoiced1Player1 += 3}`)
    player1Num2.setAttribute('value', `${valueChoiced2Player1 += 3}`)
    player1Num3.setAttribute('value', `${valueChoiced3Player1 += 3}`)
    
    player2Num1.setAttribute('value', `${valueChoiced1Player2 += 3}`)
    player2Num2.setAttribute('value', `${valueChoiced2Player2 += 3}`)
    player2Num3.setAttribute('value', `${valueChoiced3Player2 += 3}`)
    numeroPrincipal += 3
    verificarIs21(numeroPrincipal)
}


//função de verificar número principal e resetar os valores
function verificarIs21() {
  
    console.log(numeroPrincipal)
    if(numeroPrincipal === 21) {
        if (player1Num1.disabled === true) {
            sectionWinner.innerHTML = `Parabéns, o ${var1} venceu`
        sectionWinner.style.display = "flex"
        numeroPrincipal = 0
        
        player1Num1.setAttribute('value', `${valueChoiced1Player1 = 1}`)
        player1Num2.setAttribute('value', `${valueChoiced2Player1 = 2}`)
        player1Num3.setAttribute('value', `${valueChoiced3Player1 = 3}`)
        
        player2Num1.setAttribute('value', `${valueChoiced1Player2 = 1}`)
        player2Num2.setAttribute('value', `${valueChoiced2Player2 = 2}`)
        player2Num3.setAttribute('value', `${valueChoiced3Player2 = 3}`)
        } else {
            sectionWinner.innerHTML = `Parabéns, o ${var2} venceu`
        sectionWinner.style.display = "flex"
        numeroPrincipal = 0
        
        player1Num1.setAttribute('value', `${valueChoiced1Player1 = 1}`)
        player1Num2.setAttribute('value', `${valueChoiced2Player1 = 2}`)
        player1Num3.setAttribute('value', `${valueChoiced3Player1 = 3}`)
        
        player2Num1.setAttribute('value', `${valueChoiced1Player2 = 1}`)
        player2Num2.setAttribute('value', `${valueChoiced2Player2 = 2}`)
        player2Num3.setAttribute('value', `${valueChoiced3Player2 = 3}`)
        }
        
    }
}

//funções de click
player1Num1.onclick = function(){
    
    somarButtons()
    desligarBut1()
    ativarBut2()
    
}

player1Num2.onclick = function(){
    
    somarButtons2()
    desligarBut1()
    ativarBut2()

}

player1Num3.onclick = function(){
    
    somarButtons3()
    desligarBut1()
    ativarBut2()

}

player2Num1.onclick = function(){
    
    somarButtons()
    desligarBut2()
    ativarBut1()

}

player2Num2.onclick = function(){
    
    somarButtons2()
    desligarBut2()
    ativarBut1()

}

player2Num3.onclick = function(){
    
    somarButtons3()
    desligarBut2()
    ativarBut1()

}


//funções para names player1 e player2
