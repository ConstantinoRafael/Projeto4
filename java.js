let ncartas = prompt("Com quantas cartas quer jogar?");

while(ncartas < 4 || ncartas > 14 || ncartas%2 !==0){
    ncartas = prompt("Com quantas cartas quer jogar?");
}

const imagens = ['img1.png','img1.png','img2.png','img2.png','img3.png','img3.png','img4.png','img4.png','img5.png','img5.png','img6.png','img6.png','img7.png','img7.png'];

const imgs =[];

for( i = 0; i < ncartas; i++) {
    imgs.push(imagens[i]);
}

imgs.sort(comparador);

function comparador() { 
	return Math.random() - 0.5; 
}

const lista = document.querySelector('ul');

for( i = 0; i < ncartas; i++) {
    let cartinha = `
        <div class="cartaToda nao-virada" onclick="selecionarCarta(this)" data-carta="${imgs[i]}">
            <img class= "frente" src="${imgs[i]}" />   
            <img class= "verso " src="bird.png" />
        </div>
    `;
     
    lista.innerHTML = lista.innerHTML + cartinha;
}

let primeiraCarta;
let segundaCarta;
let bloquearCartas;

let contadorJogadas = 0;

function selecionarCarta(carta){
    if(bloquearCartas === true) return false;

    carta.classList.add('virada');
    carta.classList.remove('nao-virada');
    
    contadorJogadas++;
   
    if(!primeiraCarta){
        primeiraCarta = carta;

        return false;
    }

    segundaCarta = carta;
    
    checaPar();

   
    
}

let contadorAlerta = 0;

function checaPar(){
    let cartasIguais = primeiraCarta.dataset.carta === segundaCarta.dataset.carta;
    
    

    if(cartasIguais === false) {
        setTimeout(desviraCarta,1000);

    } else {
        limparCartas();
        contadorAlerta++;
    }

    setTimeout(mensagemFinal,500);

}

function desviraCarta(){
    bloquearCartas = true;

    primeiraCarta.classList.remove('virada');
    segundaCarta.classList.remove('virada');
    primeiraCarta.classList.add('nao-virada');
    segundaCarta.classList.add('nao-virada');

    limparCartas();
}

function limparCartas() {
    bloquearCartas = false;
    primeiraCarta = null;
    segundaCarta = null;
}

function mensagemFinal() {
    if(contadorAlerta == ncartas/2){
        alert('Você ganhou em '+contadorJogadas/2+' jogadas!');
    }
}






