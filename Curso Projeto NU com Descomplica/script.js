function inputValor() {
    let inputTexto = document.querySelector('#name')
    let inputValue = inputTexto.value

    let mostrarTexto = document.querySelector('#resultado')
    mostrarTexto.innerHTML = `Bem Vindo(a) ${inputValue}!`
}

let buttonPrimary = document.querySelector('.primary');
buttonPrimary.addEventListener('click', inputValor)

function removerValor() {
    let inputTexto = document.querySelector('#name')
    let inputValue = inputTexto.value

    let mostrarTexto = document.querySelector('#resultado')
    mostrarTexto.innerHTML = ""

}
let buttonSecundary = document.querySelector('.secundary');
buttonSecundary.addEventListener('click', removerValor)