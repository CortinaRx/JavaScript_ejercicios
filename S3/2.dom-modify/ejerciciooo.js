



let x = (mensaje) =>{
console.log(mensaje)

}

let y = (a, b, imp) =>{
    let resultado = a + b
    imp(resultado)
}

y(1, 3, x);