//Variáveis
var inputPlayer = document.querySelector('.name1')
var inputPlayer2 = document.querySelector('.name2')
var buttonPlay = document.querySelector('.btnAvanced')

//LocalStorage
localStorage.setItem('inputPlayer', inputPlayer.value)
var namePlayer1 = localStorage.getItem('inputPlayer')

localStorage.setItem('inputPlayer2', inputPlayer2.value)
var namePlayer2 = localStorage.getItem('inputPlayer2')
var url = "/html/Multiplayer.html"

export var nomeJogador1
export var nomeJogador2
//Fuctions

function responseNamePlayer2() {
    axios.get(`https://api.github.com/users/${inputPlayer2.value}`)
    .then((res) => {
        localStorage.setItem("jogador2", res.data.login)
        window.open(url)
        window.focus
    })
    .catch(() => {
        alert(`O Github ${inputPlayer2.value} não existe!`)
    })
}


    buttonPlay.onclick = function functionAxios() {
        
            axios.get(`https://api.github.com/users/${inputPlayer.value}`)
        .then(res =>{
            localStorage.setItem("jogador1", res.data.login)
            
            responseNamePlayer2() 
        })
        .catch(() => {
            alert(`O GitHub ${inputPlayer.value} não existe!`);
            
        })

            nomeJogador1 = localStorage.getItem("jogador1")
            nomeJogador2 = localStorage.getItem("jogador2")
    }

    export default {
        nomeJogador1,
        nomeJogador2
    }