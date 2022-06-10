//Variáveis
var inputPlayer = document.querySelector('.name1')
var inputPlayer2 = document.querySelector('.name2')
var buttonPlay = document.querySelector('.btnAvanced')

//LocalStorage
localStorage.setItem('inputPlayer', inputPlayer.value)
let namePlayer1 = localStorage.getItem('inputPlayer')

localStorage.setItem('inputPlayer2', inputPlayer2.value)
let namePlayer2 = localStorage.getItem('inputPlayer2')

//Fuctions


    buttonPlay.onclick = function functionAxios() {
        var url = "/html/Multiplayer.html"
            axios.get(`https://api.github.com/users/${inputPlayer.value}`)
        .then(res =>{
            window.open(url)
            window.focus
        })
        .catch(() => {
            alert(`O GitHub ${inputPlayer.value} não existe!`);
        })

        
            axios.get(`https://api.github.com/users/${inputPlayer2.value}`)
        .then(res =>{
            window.open(url)
            window.focus
        })
        .catch(() => {
            alert(`O GitHub ${inputPlayer2.value} não existe!`);
            
        })
    }

     



