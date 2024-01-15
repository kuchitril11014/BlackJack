// // querySelector() recupera el primer elemento que cumpla la condicion
// //querySelectorAll() Recupera todos los elementos que cumplan la condicion
// document.querySelector('img') //mientras que este te recupera el primer elemento encontrado
// document.querySelectorAll('img') //te selecciona todas las imagenes

// document.querySelector('small').innerText = 'ah perro';  //esto se usa para cambiar el texto que quieras
// document.querySelector('.titulo').innerHTML = '<b>hola</b>' //esto se usa para cambiar las etiquetas html que quieras
// document.querySelector('header').innerText = 'cero' //esto se usa para cambiar las etiquetas html que quieras

// // tomar elementos por su id
// document.getElementBtId('#computadora-cartas');

// // ojo cuando busques por tag con querySelector
// document.querySelector('carta')//estara buscando el tag de <carta></carta>
// document.querySelector('.carta')//estara buscando el tag de la clase <carta></carta>

// // tambien para buscar por clases pudieramos usar lo siguiente
// document.getElementsByClassName();


// /** PARA MEJORES PRACTICAS Y NO LLENAR DE QUERYS EL ARCHIVO PORQUE LO HACE MAS PESADO
//  ES RECOMENDABLE ALMACENARLO EN UNA VARIABLE PARA QUE EL CODIGO SEA MAS RAPIDO

// const titulo = document.querySelector('.titulo');
// //de esta manera si necesitamos llamar el elemento hacemos mencion a la variable
// titulo.innerText = 'hola mundo';


// // para crear elementos en el html
// const divBotones = document.querySelector('#divBotones');
// document.createElement('button');

// const botonNuevo = document.createElement('button');
// divBotones.append(botonNuevo);
// botonNuevo.innerText = 'Destruir el mundo';
// botonNuevo.classList.add('btn'); 