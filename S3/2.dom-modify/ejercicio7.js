

let car = {
    name: 'Ford',
    apellido: 'Ricardo',
    nombreCompleto: function (name, apellido){
        this.name + this.apellido
    }
}

for (const key in car) {
    console.log(key, car[key])

    
    }
