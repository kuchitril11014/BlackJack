/**
 * 2C = Two of Clubs(Trebol)
 * 2D = Two of Diamond (Diamante)
 * 2H = Two of Hear(Corazones)
 * 2S = Two of Spades(Espadas)
 */

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

//Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');

const divCartasJugador = document.querySelector('#jugador-cartas');
const puntosHtml = document.querySelectorAll('small');

let puntosJugador = 0;
let puntosComputadora = 0;



// Esta funcion crea una baraja barajeada
const crearDeck = () => {

    for(let i = 2; i <= 10; i++){
                for( let tipo of tipos ){
                    deck.push( i + tipo );
                }
            }
            for (let tipo of tipos){
                for(let esp of especiales){
                    deck.push(esp + tipo);
                }
            }
        
        deck = _.shuffle(deck);
        console.log(deck);
        return deck;
}

crearDeck();


//esta funcion me permite tomar una carta

const pedirCarta = ()=>{

    if (deck.length === 0){
        throw 'No hay más Cartas';
    }

    const carta = deck.pop();
    // console.log(deck);
    console.log(carta);
    return deck;
        
}

// pedir carta
const valorCarta = (carta) => {

    const valor = carta.substring ( 0, carta.length, -1 );
        return ( isNaN ( valor ))?
                ( valor === 'A' ) ? 11 : 10
                : valor * 1;
                
    }

//Eventos
btnPedir.addEventListener('click', ()=>{//funcion callback
    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHtml[0].innerText = puntosJugador;
    
    //creamos una imagen en memoria
    const imgCarta = document.createElement('img');
    //creamos el src
    imgCarta.src = `/assets/cartas/${carta}.png`;

    //insertarlo en el html
    divCartasJugador.append(imgCarta);



    console.log(puntosJugador);
})