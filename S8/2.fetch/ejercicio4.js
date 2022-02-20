////En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.

//EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.


//En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado
// y que si el usuario hace click en este botón eliminemos 
//el parrafo asociado.



let newButton$$ = document.createElement('button');
const button$$ = document.querySelector('button');
    
const search = () =>{
const input$$ = document.querySelector('input');
fetch('https://api.nationalize.io' + '?name=' + input$$.value).then(res => res.json()).then(resParsedToJson =>{
    console.log(resParsedToJson)
    newChar(resParsedToJson)
})
}

const newChar = (person) => {
    let newP$$ = document.createElement('p');
    
    

    let texto = `El nombre de ${person.name} tiene`; 
    for (const country of person.country) {
        let porcentage = country.probability;
        texto += `un ${porcentage} porciento de ser de ${country.country_id}`   
    }

    newP$$.textContent = texto;

    document.body.appendChild(newP$$)
    newP$$.appendChild(newButton$$);
    newButton$$.textContent = 'X'
    newButton$$.addEventListener('click', () => {removeP(newP$$)})
}

let removeP = (node) =>{
    node.remove()
}



button$$.addEventListener('click', search)