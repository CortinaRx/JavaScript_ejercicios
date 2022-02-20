//Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div.
//Recuerda que no solo puedes insertar elementos con .appendChild.

let allDiv$$ = document.querySelectorAll('div');

let newP$$ = document.createElement('p')

newP$$.textContent = 'Voy en medio!'

document.body.insertBefore(newP$$, allDiv$$[1])

