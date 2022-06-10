//Variáveis
var inputPlayer = document.querySelector('.name1')
var inputPlayer2 = document.querySelector('.name2')
var buttonPlay = document.querySelector('.btnAvanced')

//LocalStorage
localStorage.setItem(inputPlayer, inputPlayer.value)
let name = localStorage.getItem(inputPlayer)

//Fuctions


/*function verifyGit(){
    axios.get(`https://api.github.com/users/${inputPlayer.value}`)
.then(res =>{
    
    document.getElementsByClassName('name').value = res.data.name
    
})
.catch(() => {
    alert(`O GitHub ${inputPlayer.value} não existe!`);
})
}
*/

    buttonPlay.onclick = function() {
        var url = "/html/Multiplayer.html"
            axios.get(`https://api.github.com/users/${inputPlayer.value}`)
        .then(res =>{
            window.open(url)
            window.focus
        })
        .catch(() => {
            alert(`O GitHub ${inputPlayer.value} não existe!`);
        })
    }
        



//Função de abir nova aba
/*function openInNemTab(openPagMulti){
    const win = window.open(openPagMulti, '_blank')
}
const openPagMulti = 'http://127.0.0.1:5500/html/Multiplayer.html'
*/
