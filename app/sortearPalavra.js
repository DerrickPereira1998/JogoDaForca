const lista = ['banana','elevador','padrasto','limpeza','espingarda','cigarro','nostalgia','envelope',
               'abacaxi','levedura','girassol','basquete','ansiedade','estacionamento','arquiteto','crocodilo',
               'protesto','flutuante','magnitude','descobridor','perspectiva','maquiagem','Esmagamento','Estofamento',
               'contagioso','antepassado','Percentagem','Almanaque','casamento','banimento','Magnetizado','Confidencial',
               'Argentina','Faculdade','submeter','balbuciar','dinamite','Esquiador','Guilhotina','Representar','Caranguejo']

const palavra = gerarPalavraAleatoria()
console.log(palavra)
let letrasDaPalavra = montarArrayDeLetras(palavra)
console.log(letrasDaPalavra)
let letrasUsadas = []

function gerarPalavraAleatoria(){
    return lista[parseInt(Math.random() * lista.length)].toUpperCase()
}

function montarArrayDeLetras(palavra){
    var letras = [] 
    for(var x = 0; x < palavra.length ;x++){
        if (letras.includes(palavra.substring(x,x+1)) == false){
            letras.push(palavra.substring(x,x+1))
        }
    }
    return letras
}