//En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e 
//imprimiendolo por consola.



const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
}

const {name: nombre, race: raza} = animalFunction();

console.log(nombre)
console.log(raza)