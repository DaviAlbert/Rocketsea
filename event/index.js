const botao = document.querySelector('button')

botao.addEventListener('click', click)

function click(){
    document.querySelector('p').classList.toggle('hide')
}