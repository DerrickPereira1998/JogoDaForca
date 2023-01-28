//Função usada para decidir o resultado da tela
function verificaSeOChutePossuiValorValido(chute) {

    if (chute == 'GAME OVER') {
        document.body.innerHTML = `
        <h2>GAME OVER</h2>
        <button id="jogar-novamente" class="btn-jogar" onclick="voltarInicio()">Jogar Novamente!</button>
        `
        document.body.style.backgroundColor = "black";
    }

    //Checa para ver se a palavra letra foi falada
    if (chute.substring(0, 5) == 'LETRA' && chute.length <= 7 && isCharacterALetter(chute.substring(6,7))) {
        chute = chute.substring(6, 7)
        console.log(chute)
    }

    //Validação do chute
    if (chute == palavra ) {
        telaDeVitoria()
    }
    else if (chute.length == 1 && isCharacterALetter(chute) == true) {
        //Letra ja usada
        if(letrasUsadas.includes(chute)){
            elementoChute.innerHTML += '<div>Letra já dita!</div>' 
        }
        //Letra encontrada na palavra
        else if(letrasDaPalavra.includes(chute)){
            console.log(letrasDaPalavra)
            letrasUsadas.push(chute)
            preencherLetras() 
        }
        //letra não usada
        else{
            letrasUsadas.push(chute)
            console.log(letrasUsadas)
            preencherLetras()
        }
    }
    else {
        elementoChute.innerHTML += `
        <div>Valor inválido</div>
        <div>Exemplo de valor valido: "Letra Z"</div>
        `
    }

    //Cria tela de vitoria caso todas as letras forem preenchidas
    if(letrasDaPalavra.every(item => letrasUsadas.includes(item))){
        telaDeVitoria()
    }
}

//função usada para verificar o erro e como resolve-lo
function chuteErrado(chute) {

}

//checa se o valor é uma letra
function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
}

//função usada para preencher o div com as letras descobertas
function preencherLetras(){
    elementoLetras.innerHTML = ""
    for(let x = 0; x < palavra.length; x++){
        if(letrasUsadas.includes(palavra.substring(x,x+1))){
            elementoLetras.innerHTML += `
            <p id="letra">${palavra.substring(x,x+1)}</p>
            ` 
        }
        else{
            elementoLetras.innerHTML += `
            <p id="letra"> </p>
            ` 
        }
    }
}

function telaDeVitoria(){
    document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>A palavra era ${palavra}</h3>
        <button id="jogar-novamente" class="btn-jogar" onclick="voltarInicio()">Jogar Novamente!</button>
        `
}