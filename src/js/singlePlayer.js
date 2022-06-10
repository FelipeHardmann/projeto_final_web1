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


//Variável de Número principal 
var mainNumber = 0




//fuctions
function machineRandom(){
    var valueMin = Math.ceil(1)
    var valueMax = Math.floor(3)  
    return Math.floor(Math.random() * (valueMax - valueMin + 1)) + valueMin
}

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
    }else if (mainNumber > 21){
        
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


function verifyWinner(){
    if(player1N1 === 21 || player1N2 === 21 || player1N3 === 21){
        alert('Jogador Ganhou')
    }else if (machine1 === 21 || machine2 === 21 || machine3 === 21){
        alert('Máquina venceu')
    }
}

function machinePlay(){
    setTimeout(()=> {
        var machineValue = machineRandom()
    
        mainNumber += machineValue

        player1N1.setAttribute('value', `${valueChoiced1 += machineValue}`)
        player1N2.setAttribute('value', `${valueChoiced2 += machineValue}`)
        player1N3.setAttribute('value', `${valueChoiced3 += machineValue}`)

        machine1.setAttribute('value', `${value1Machine += machineValue}`)
        machine2.setAttribute('value', `${value2Machine += machineValue}`)
        machine3.setAttribute('value', `${value3Machine += machineValue}`)
        verifyNumber21()
        verifyWinner()

        onButtonPlayer()
        }, 2000)

}




//Buttons fuctions clicks
player1N1.onclick = function(){

    addButtons()
    offButtonPlayer()
    onButtonMachine()
    machinePlay()
    verifyWinner()
    verifyNumber21()

}

player1N2.onclick = function(){
    
    addButtons2()
    offButtonPlayer()
    onButtonMachine()
    machinePlay()
    verifyWinner()
    verifyNumber21()
    
}

player1N3.onclick = function(){
    
    addButtons3()
    offButtonPlayer()
    onButtonMachine()
    machinePlay()
    verifyWinner()
    verifyNumber21()
}