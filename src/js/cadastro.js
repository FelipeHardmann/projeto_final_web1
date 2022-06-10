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
//Fuctions

function responseNamePlayer2() {
    axios.get(`https://api.github.com/users/${inputPlayer2.value}`)
    .then((res) => {
        console.log(res);
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
            console.log(res);
            responseNamePlayer2() 
        })
        .catch(() => {
            alert(`O GitHub ${inputPlayer.value} não existe!`);
            
        })

          
    }