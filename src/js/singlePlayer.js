//Página Principal
var pagSingle = document.querySelector('.pagSingle')

//Variáveis Player
var player1N1 = document.querySelector('.num1')
var valueChoiced1 = Number(player1N1.value)

var player1N2 = document.querySelector('.num2')
var valueChoiced2 = Number(player1N2.value)

var player1N3 = document.querySelector('.num3')
var valueChoiced3 = Number(player1N3.value)

//Variáveis Computador
var machine1 = document.querySelector('.machine1')
var value1Machine = Number(machine1.value)

var machine2 = document.querySelector('.machine2')
var value2Machine = Number(machine2.value)

var machine3 = document.querySelector('.machine3')
var value3Machine = Number(machine3.value)

var mainNumber = 0

var valueMachineA
var valueMin = Math.ceil(1)
var valueMax = Math.floor(3)

//fuctions
function offButtonPlayer (){
    player1N1.disabled = true
    player1N2.disabled = true
    player1N3.disabled = true
}

function offButtonMachine(){
    machine1.disabled = true
    machine2.disabled = true
    machine3.disabled = true
}

function onButtonPlayer (){
    player1N1.disabled = false
    player1N2.disabled = false
    player1N3.disabled = false
}

function onButtonMachine (){
    machine1.disabled = false
    machine2.disabled = false
    machine3.disabled = false
}

function addButtons(){
    player1N1.setAttribute('value', `${valueChoiced1 += 1}`)
    player1N2.setAttribute('value', `${valueChoiced2 += 1}`)
    player1N3.setAttribute('value', `${valueChoiced3 += 1}`)

    machine1.setAttribute('value', `${value1Machine += 1}`)
    machine2.setAttribute('value', `${value2Machine += 1}`)
    machine3.setAttribute('value', `${value3Machine += 1}`)

    mainNumber += 1
    verifyNumber21(mainNumber)
}


function addButtons2(){
    player1N1.setAttribute('value', `${valueChoiced1 += 2}`)
    player1N2.setAttribute('value', `${valueChoiced2 += 2}`)
    player1N3.setAttribute('value', `${valueChoiced3 += 2}`)

    machine1.setAttribute('value', `${value1Machine += 2}`)
    machine2.setAttribute('value', `${value2Machine += 2}`)
    machine3.setAttribute('value', `${value3Machine += 2}`)

    mainNumber += 2
    verifyNumber21(mainNumber)
}


function addButtons3(){
    player1N1.setAttribute('value', `${valueChoiced1 += 3}`)
    player1N2.setAttribute('value', `${valueChoiced2 += 3}`)
    player1N3.setAttribute('value', `${valueChoiced3 += 3}`)

    machine1.setAttribute('value', `${value1Machine += 3}`)
    machine2.setAttribute('value', `${value2Machine += 3}`)
    machine3.setAttribute('value', `${value3Machine += 3}`)

    mainNumber += 3
    verifyNumber21(mainNumber)
}

function verifyNumber21(){
    if(mainNumber === 21) {
        numeroPrincipal = 0

        player1N1.setAttribute('value', `${valueChoiced1 = 1}`)
        player1N2.setAttribute('value', `${valueChoiced2 = 2}`)
        player1N3.setAttribute('value', `${valueChoiced3 = 3}`)
        
        machine1.setAttribute('value', `${value1Machine = 1}`)
        machine2.setAttribute('value', `${value2Machine = 2}`)
        machine3.setAttribute('value', `${value3Machine = 3}`)
    }else{

    }
}

/*function maquina (valueMachineA){
    return Math.floor(Math.random()* (valueMax - valueMin + 1)) + valueMin
}*/



//Buttons
player1N1.onclick = function(){

    addButtons()
    offButtonPlayer()
    onButtonMachine()

}

player1N2.onclick = function(){
    
    addButtons2()
    offButtonPlayer()
    onButtonMachine()

}

player1N3.onclick = function(){
    
    addButtons3()
    offButtonPlayer()
    onButtonMachine()
}

machine1.onclick = function(){

    addButtons()
    offButtonMachine()
    onButtonPlayer()
    valueMachineA()
    
}

machine2.onclick = function(){

    addButtons2()
    offButtonMachine()
    onButtonPlayer()

}

machine3.onclick = function(){

    addButtons3()
    offButtonMachine()
    onButtonPlayer()

}

