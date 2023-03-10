
import {dadosBanco} from "./database.js";

let indice = 0;

function carroselAvancar(){

    const elementoCompletoEsquerda = document.querySelector('.carrosel_direta');
    const linkEsquerda = document.querySelector('.esquerda_link');
    const imagemEsquerda = document.querySelector('.esquerda_imagem');

    const elementoCompletoMeio = document.querySelector('.carrosel_meio');
    const linkMeio = document.querySelector('.meio_link');
    const descricaoMeio = document.querySelector('.descricao_meio');
    const tituloMeio = document.querySelector('.meio_titulo');
    const imagemMeio = document.querySelector('.meio_imagem');

    const elementoCompletoDireita = document.querySelector('.carrosel_esquerda');
    const linkDireita = document.querySelector('.direita_link');
    const imagemDireita = document.querySelector('.direita_imagem');


    /* 
        imagemDireita.setAttribute('src',`${dadosBanco[5].imagem}`);
        linkDireita.href = `${dadosBanco[5].url}` 
    */
    imagemMeio.setAttribute('style', 'transform: scale(1.2)');
    setTimeout(() => {
        imagemMeio.setAttribute('style', 'transform: scale(1)');
        if(indice<dadosBanco.length-1){
            indice++
    
            imagemMeio.setAttribute('src',`${dadosBanco[indice].imagem}`);
            linkMeio.href = `${dadosBanco[indice].url}`; 
            tituloMeio.innerHTML = `${dadosBanco[indice].titulo}`;
            descricaoMeio.innerHTML = `${dadosBanco[indice].descricao}`;
    
            if(indice>=1 && indice<dadosBanco.length-1){
                let esquerda = indice;
                esquerda--
                let direita = indice
                direita++
                imagemDireita.setAttribute('src',`${dadosBanco[direita].imagem}`);
                linkDireita.href = `${dadosBanco[direita].url}`; 
    
                imagemEsquerda.setAttribute('src',`${dadosBanco[esquerda].imagem}`);
                linkEsquerda.href = `${dadosBanco[esquerda].url}`; 
            } else if(indice==dadosBanco.length-1) {
                imagemDireita.setAttribute('src',`${dadosBanco[0].imagem}`);
                linkDireita.href = `${dadosBanco[0].url}`; 
    
                imagemEsquerda.setAttribute('src',`${dadosBanco[dadosBanco.length-2].imagem}`);
                linkEsquerda.href = `${dadosBanco[dadosBanco.length-2].url}`; 
            }
    
            
        }else if(indice===dadosBanco.length-1){
            indice = 0;
            imagemMeio.setAttribute('src',`${dadosBanco[0].imagem}`);
            linkMeio.href = `${dadosBanco[0].url}`; 
            tituloMeio.innerHTML = `${dadosBanco[0].titulo}`;
            descricaoMeio.innerHTML = `${dadosBanco[0].descricao}`;
    
    
            imagemDireita.setAttribute('src',`${dadosBanco[1].imagem}`);
            linkDireita.href = `${dadosBanco[1].url}`; 
    
            imagemEsquerda.setAttribute('src',`${dadosBanco[dadosBanco.length-1].imagem}`);
            linkEsquerda.href = `${dadosBanco[dadosBanco.length-1].url}`; 
            
    
        }
        const span = document.querySelector('.number_span');
        span.innerHTML = `${indice}`
    }, 500);
    

}
const btnAvancar = document.querySelector('.button_avancar');
btnAvancar.addEventListener('click', ()=>{
    carroselAvancar();
})






function carroselRetorcer(){

    const elementoCompletoEsquerda = document.querySelector('.carrosel_direta');
    const linkEsquerda = document.querySelector('.esquerda_link');
    const imagemEsquerda = document.querySelector('.esquerda_imagem');

    const elementoCompletoMeio = document.querySelector('.carrosel_meio');
    const linkMeio = document.querySelector('.meio_link');
    const descricaoMeio = document.querySelector('.descricao_meio');
    const tituloMeio = document.querySelector('.meio_titulo');
    const imagemMeio = document.querySelector('.meio_imagem');

    const elementoCompletoDireita = document.querySelector('.carrosel_esquerda');
    const linkDireita = document.querySelector('.direita_link');
    const imagemDireita = document.querySelector('.direita_imagem');

    imagemMeio.setAttribute('style', 'transform: scale(1.2)');
    setTimeout(() => {
        imagemMeio.setAttribute('style', 'transform: scale(1.0)');
        if(indice>0){
            indice--
            imagemMeio.setAttribute('src',`${dadosBanco[indice].imagem}`);
            linkMeio.href = `${dadosBanco[indice].url}`; 
            tituloMeio.innerHTML = `${dadosBanco[indice].titulo}`;
            descricaoMeio.innerHTML = `${dadosBanco[indice].descricao}`;
    
            if(indice>=1 && indice<dadosBanco.length-1){
                let esquerda = indice;
                esquerda--
                let direita = indice
                direita++
                imagemDireita.setAttribute('src',`${dadosBanco[direita].imagem}`);
                linkDireita.href = `${dadosBanco[direita].url}`; 
    
                imagemEsquerda.setAttribute('src',`${dadosBanco[esquerda].imagem}`);
                linkEsquerda.href = `${dadosBanco[esquerda].url}`; 
            } else if(indice==0) {
                imagemDireita.setAttribute('src',`${dadosBanco[1].imagem}`);
                linkDireita.href = `${dadosBanco[1].url}`; 
    
                imagemEsquerda.setAttribute('src',`${dadosBanco[dadosBanco.length-1].imagem}`);
                linkEsquerda.href = `${dadosBanco[dadosBanco.length-1].url}`; 
            }
            console.log(indice)
            
        }else if(indice===0){
            indice = dadosBanco.length-1;
            imagemMeio.setAttribute('src',`${dadosBanco[indice].imagem}`);
            linkMeio.href = `${dadosBanco[indice].url}`; 
            tituloMeio.innerHTML = `${dadosBanco[indice].titulo}`;
            descricaoMeio.innerHTML = `${dadosBanco[indice].descricao}`;
    
    
            imagemDireita.setAttribute('src',`${dadosBanco[dadosBanco.length-3].imagem}`);
            linkDireita.href = `${dadosBanco[dadosBanco.length-3].url}`; 
    
            imagemEsquerda.setAttribute('src',`${dadosBanco[dadosBanco.length-2].imagem}`);
            linkEsquerda.href = `${dadosBanco[dadosBanco.length-2].url}`; 
            
    
        }
        const span = document.querySelector('.number_span');
        span.innerHTML = `${indice}`
    }, 500);    
    
    
    
}
const btnRetornar = document.querySelector('.button_retornar');
btnRetornar.addEventListener('click', ()=>{
    carroselRetorcer();
})

setInterval(carroselAvancar, 4000);