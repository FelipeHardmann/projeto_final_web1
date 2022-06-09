//Variáveis
var inputPlayer = document.getElementsByClassName('.name')
var buttonPlay = document.getElementsByClassName('btnAvanced')



//Fuctions

function verifyGit(){
    axios.get(`https://api.github.com/users/${inputPlayer.value}`)
.then(res =>{
    
    document.getElementsByClassName('name').value = res.data.name
    
})
.catch(() => {
    alert(`O GitHub ${inputPlayer.value} não existe!`);
})
}


buttonPlay.onclick = function(){
    verifyGit()
}


//Função de abir nova aba
/*function openInNemTab(openPagMulti){
    const win = window.open(openPagMulti, '_blank')
}
const openPagMulti = 'http://127.0.0.1:5500/html/Multiplayer.html'
*/
