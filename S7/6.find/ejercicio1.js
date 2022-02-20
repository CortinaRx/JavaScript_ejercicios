//Dado el siguiente array, usa .find() para econtrar el número 100.


const numbers = [32, 21, 63, 95, 100, 67, 43];

const number = numbers.find(num => {
    if (num === 100){
        return num
    }
});

console.log(number);