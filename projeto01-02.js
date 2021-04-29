var recebeTexto = document.getElementById('recebeMsg');
var rodar = document.getElementById('rodar');
var rodar1 = document.getElementById('rodar1');

var codificar = document.getElementById('codificar');
var decodificar = document.getElementById('decodificar');

var select = document.getElementById('select');

//resposta
var caixaResposta = document.getElementById('mostraMsg');

//cifra de cesar
var mostraIncremento = false;
var cifraIncremento = document.getElementById('cifraIncremento');
var cifraIncrementoP = document.getElementById('cifraIncrementoP');

function cifraCoda(texto){

    var arrTexto = texto.split('');
    var codLetras = [];
    var codLetras2 = [];
    var str = '';
    var incrementoVlr = document.getElementById('inputVlr');
    var incrementoToNumber = parseInt(incrementoVlr.value);
    // console.log(incrementoToNumber)

    if(rodar.innerText == 'Codificar' && mostraIncremento == true){

        for(var i = 0; i<arrTexto.length; i++){

            codLetras.push(arrTexto[i].charCodeAt() + incrementoToNumber);
            codLetras2.push(String.fromCharCode(codLetras[i]));
            str = codLetras2.join('');
            caixaResposta.value = str;
        }
    }

    // console.log(str)
}

function cifraDecoda(texto){

    var arrTexto = texto.split('');
    var codLetras = [];
    var codLetras2 = [];
    var str = '';
    var incrementoVlr = document.getElementById('inputVlr');
    var incrementoToNumber = parseInt(incrementoVlr.value);
    // console.log(incrementoToNumber)

    if(rodar1.innerText == 'Decodificar' && mostraIncremento == true){

        for(var i = 0; i<arrTexto.length; i++){

            codLetras.push(arrTexto[i].charCodeAt() - incrementoToNumber);
            codLetras2.push(String.fromCharCode(codLetras[i]));
            str = codLetras2.join('');
            caixaResposta.value = str;
        }

    }

    // console.log(str)
}

//base64
function base64Codifica(){

    var dadoCodificado = window.btoa(recebeTexto.value);

    if (rodar.innerText == 'Codificar') {
      caixaResposta.value = dadoCodificado;
    }

}

function base64Decodifica(){

    var dadoDecodificado = window.atob(recebeTexto.value);

    if (rodar1.innerText == 'Decodificar') {
        caixaResposta.value = dadoDecodificado;
    }

}

//Escolhe qual a regra (Cifra ou Base)
select.addEventListener('change', ()=>{

    if(select.value == 'cifraDeCesar'){

        // console.log('cifraDeCesar')
        
        cifraIncremento.classList.remove('incrementoInvisivel');
        cifraIncrementoP.classList.remove('incrementoInvisivel');
        
        
    }else if(select.value == 'base64'){

        // console.log('base64')
        
        cifraIncremento.classList.add('incrementoInvisivel');
        cifraIncrementoP.classList.add('incrementoInvisivel');
    }

})

//mostra botão 'codificar'
codificar.addEventListener('click', ()=>{

    if(codificar){

        rodar.innerText = 'Codificar';
        rodar.classList.remove('invisivel');
        rodar1.classList.add('invisivel');
        mostraIncremento = true;

    }else {rodar.classList.add('invisivel');
        mostraIncremento = false;
    }
})

//mostra botão 'decodificar'
decodificar.addEventListener('click', ()=>{

    if(decodificar){

        rodar1.innerText = 'Decodificar';
        rodar1.classList.remove('invisivel');
        rodar.classList.add('invisivel');
        mostraIncremento = true;
        
    }else {rodar1.classList.add('invisivel');
        mostraIncremento = false;
    }
})

//Ao clicar...
rodar.addEventListener('click', (evento)=>{

    evento.preventDefault();
    // console.log(recebeTexto.value)
    if(select.value == 'base64'){
        base64Codifica();

    }else if(select.value == 'cifraDeCesar'){
        cifraCoda(recebeTexto.value);
    }
    caixaResposta.classList.remove('mostraMsgInv');
    
})

rodar1.addEventListener('click', (evento)=>{

    evento.preventDefault();
    // console.log(recebeTexto.value)
    if(select.value == 'base64'){
        base64Decodifica();

    }else if(select.value == 'cifraDeCesar'){
        cifraDecoda(recebeTexto.value);
    }
    caixaResposta.classList.remove('mostraMsgInv');
    
})