// Ahora vamos a trabajar con JSON SERVER para simular una api. Es muy fácil de usar. Simplemente instálalo de manera global usando el comando  `npm i -g json-server` y una vez
// lo tengas instalado, ejecuta este comando `json-server --watch exercise-2.json` en la posición donde esté el archivo exercise-2.json. 
//Los datos que nos brindará serán los alojados en el archivo exercise-2.json y estarán accesibles por defecto en la url localhost:3000.
// Para este ejercicio vamos a obtener y pintar en el html una serie de notas del diario de nuestro queridísimo Eliot. Para ello deberemos ejecutar el comando que comentabamos anteriormente y hacer un .fetch() a la url `http://localhost:3000/diary`.
// Una vez tengas los datos tenemos que ordenarlos por fecha de menor a mayor con la propiedad .date. Nuestro carismático personaje es un poco caótico y escribe las notas en páginas salteadas...
// Cuando lo tengas crea un div para cada nota del diario e introduce un ``<h3>``, un  ``<h5>`` y un ``<p>`` para su .title, .date y .description respectivamente.
// Finalmente añade un botón para poder eliminar las notas del diario. En concreto hay una que a Eliot no le apetece recordar mucho...

newArray = [];

const allItems = async () =>{
    const allItemsElliot = await fetch('http://localhost:3000/diary');
    const allItemsElliotToJson = await allItemsElliot.json();
    const orderDiary = diaryWithDays(allItemsElliotToJson);

    console.log(allItemsElliotToJson)
    
    for (const page of orderDiary) {
        printDiary(page)
    }
    

}
   
let diaryWithDays = (pages) => {
   return pages.sort((a, b) => new Date(a.date) - new Date(b.date))
}
   
allItems();

const printDiary = (notes) =>{
    let div$$ = document.createElement('div');
    let h3$$ = document.createElement('h3');
    let h5$$ = document.createElement('h5');
    let p$$ = document.createElement('p');
    let button$$ = document.createElement('button');
    div$$.appendChild(button$$);

    document.body.appendChild(div$$);
    div$$.appendChild(h3$$);
    div$$.appendChild(h5$$);
    div$$.appendChild(p$$);

    h3$$.innerHTML = notes.title;
    h5$$.innerHTML = notes.date;
    p$$.innerHTML = notes.description;
    button$$.textContent = 'No quiero recordar'

    button$$.addEventListener('click', () => removeDiv$$(div$$))


}

const removeDiv$$ = (node) =>{
    node.remove()
}
