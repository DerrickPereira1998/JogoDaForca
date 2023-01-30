function infoAjuda(){
    //pagina de ajuda
    document.body.innerHTML = `
        <h2>Bem vindo ao meu jogo!</h2>
        <h3 class="ajudatexto">Esse é um jogo da forca basico que utiliza o microfone para ser jogado.</h3>
        <h3 class="ajudatexto">Para isso quando aparecer um pop-up perguntando se o jogo pode utilizar o microfone, por favor aceite, se não o reconhecimento de voz não sera ativado! Se isso ja tiver acontecido, por favor reative a permissão do microfone no navegador <a href="https://support.google.com/chrome/answer/2693767?hl=pt-BR&co=GENIE.Platform%3DDesktop&oco=0" target="blank"> (clique aqui para saber como)</a></h3>
        <h3 class="ajudatexto">Se estiver com problemas para dizer letras no microfone não tenha medo, diga "letra" e depois a letra que quer incluir. Ex: "LETRA H"</h3>
        <h3 class="ajudatexto">Se quizer tentar adivinhar a palavra, complete todas as letras na imagem, ou diga a palavra em voz alta.</h3>
        <h3 class="ajudatexto">Muito obrigado por jogar!<h3>
        <button id="jogar-novamente" class="btn-jogar" onclick="voltarInicio()">Voltar ao jogo</button>
        `
}

function voltarInicio(){
    window.location.reload()
}