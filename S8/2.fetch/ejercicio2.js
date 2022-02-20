// //Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() 
// para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.
//const baseUrl = 'https://api.nationalize.io';

const input$$ = document.querySelector('input');
const button$$ = document.querySelector('button');

const search = () =>{
fetch('https://api.nationalize.io' + '?name=' + input$$.value).then(res => res.json()).then(resParsedToJson =>{
    console.log(resParsedToJson)
})}

button$$.addEventListener('click', search)


