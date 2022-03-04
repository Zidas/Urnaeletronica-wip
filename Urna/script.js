let deltitulo = document.querySelector('.d-1-1 span')
let cargo = document.querySelector('.d-1-2 span')
let dados = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1right')
let numeros = document.querySelector('.d-1-3')

let etapaAtual = 0;
let numero = '';

function Comecar(){
    let etapa = etapas[etapaAtual];
    let numerohtml = '';
    
    for(let i=0;i<etapa.numeros;i++){
        if(i === 0) {
            numerohtml += '<div class="quadrado pisca"></div>'; 
        } else{
        numerohtml += '<div class="quadrado"></div>';
    }
    }

    deltitulo.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    dados.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numerohtml;
}

function interfaceatt(){
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){ 
            return true;
        } else{
            return false;
        }
    
    });
    if(candidato.length > 0){
        candidato = candidato[0];
        deltitulo.style.display = 'block';
        dados.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`;
        aviso.style.display = 'block';
        
        let fotosHtml = '';
        for(let i in candidato.fotos){
            fotosHtml += ` <div class="d1-imagem"><img src=${candidato.fotos[i].url} alt=""/> ${candidato.fotos[i].legenda}</div>`;

        }
        lateral.innerHTML = fotosHtml
    }

    }




function clicou(n){
    let elnumero = document.querySelector('.quadrado.pisca');
    if(elnumero !== null){
        elnumero.innerHTML = n;
        numero = `${numero}${n}`;

        elnumero.classList.remove('pisca');
        if(elnumero.nextElementSibling !== null){
            elnumero.nextElementSibling.classList.add('pisca');
        }
        else{
            interfaceatt();
        }

    }
}
function branco() {

}

function corrige() {

}

function confirma() {
}

Comecar();