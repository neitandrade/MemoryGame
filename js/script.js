//Ao digitar = habilitar o button
//Ao clicar o button = ir para outra page

const input = document.querySelector('.logininput')
const button = document.querySelector('.loginbutton')
const form = document.querySelector('.loginform')

//function validateInput(){} ou 

const validateInput = ({ target }) => {
    if (target.value.length > 2){
        button.removeAttribute('disabled');
        return; 
    } 

    button.setAttribute('disabled','')
    //else {button.setAttribute('disabled', '') //set == 2 valores, disabled nao precisa de nenhum valor = ''} ou
    //adiciona return na function para ela pular para proximo bloco
}

const handleSubmit = (event) => {
    event.preventDefault(); //bloquear o recarregamento de página

    localStorage.setItem('player', input.value); //2 parametros, chave e valor
    window.location = 'pages/game.html'; //Redirecionar para nova página

}

input.addEventListener('input', validateInput) //after function ?
form.addEventListener('submit', handleSubmit) 
