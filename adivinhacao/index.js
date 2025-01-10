let aleatorio = Math.round(Math.random() * 10)
console.log("Número aleatório: "+aleatorio)
let x = 0

const tentar = document.querySelector('#tentar')
const reset = document.querySelector('#novamente')
const tela1 = document.querySelector('.tela1')
const tela2 = document.querySelector('.tela2')
const h2 = document.querySelector('.tela2 h2')
const p = document.querySelector('.tela1 p')

tentar.addEventListener('click', handleClick)
reset.addEventListener('click', novamente)

function novamente(){
  toggleTela()

  aleatorio = Math.round(Math.random() * 10)
  document.querySelector('.tela1 p').innerText = `Adivinhe um número entre 0 e 10`

  console.log("Novo núemro aleatório"+aleatorio)
}

function handleClick(event) {
  event.preventDefault()
  const numero = document.querySelector('#numero').value

  if (Number(numero) == aleatorio) {
    toggleTela()

    if(x == 1){
      h2.innerText = `acertou em ${x} tentativa!`
    }else{
      h2.innerText = `acertou em ${x} tentativas!`
    }
  }else{
    x++
    console.log("Núemro de tentatívas atual"+x)
    p.innerText = `Não acertou, tente novamente!`
  }
}

function toggleTela(){
  tela1.classList.toggle('hide')
  tela2.classList.toggle('hide')
}