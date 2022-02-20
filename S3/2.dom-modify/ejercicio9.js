// Basandote en el siguiente html y 
//javascript,inserta p con el texto 'Voy dentro!', 
//dentro de todos los div con la clase .fn-insert-here

// ```html

let getDiv$$ = document.querySelectorAll(".fn-insert-here")
console.log(getDiv$$)


for (let i = 0; i < getDiv$$.length; i++) {
    let newP$$ = document.createElement('p');
    newP$$.textContent = 'Voy Dentro!';
    getDiv$$[i].appendChild(newP$$)
}