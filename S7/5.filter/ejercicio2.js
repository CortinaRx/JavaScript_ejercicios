//Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.


const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesPar = ages.filter(agepar => {
    if(agepar % 2 == 0){
    return agepar

    }
});

console.log(agesPar)
