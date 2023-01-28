//Elementos da DOM a serem modificados
const elementoLetras = document.getElementById('letrasdiv')
const elementoChute = document.getElementById('chute')
const elementoBtnAjuda = document.getElementById('botao-ajuda')
const elementoAjuda = document.getElementById('ajuda')
const elementoTitleMensage = document.getElementById('title-mensage')


//Reconhecimento de Voz
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    elementoAjuda.remove();
    elementoTitleMensage.remove();
    chute = e.results[0][0].transcript
    chute = chute.toUpperCase()
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiValorValido(chute) //Contida em validação.js
}

//Função que exibe o chute na tela
function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => {
    recognition.start()
    
})