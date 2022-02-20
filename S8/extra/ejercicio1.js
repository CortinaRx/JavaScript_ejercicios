//En base a la api de Breaking Bad (https://breakingbadapi.com/), 
//vamos a desarrollar una página dinámicamente en la que visualizar una galería con las imagenes y los nombres de los personajes de la serie.
// Para ellos es necesario usar el endpoint 'https://breakingbadapi.com/api/characters'.
//Si te fijas en la respuesta de la api, la imagen está en la propiedad 'img' y el título en la propiedad 'name'.

const getAllCharacter = async () =>{
    const allCharacter = await fetch('https://breakingbadapi.com/api/characters');
    const allCharacterToJson = await allCharacter.json();
    for (const character of allCharacterToJson) {
        charCreator(character)
    }

    console.log(allCharacterToJson)



}

getAllCharacter(); 

const charCreator = (char) =>{
    const div$$ = document.createElement('div');
    const img$$ = document.createElement('img');
    const newH1$$ = document.createElement('h1');

    document.body.appendChild(div$$);
    div$$.appendChild(img$$);
    div$$.appendChild(newH1$$);
    img$$.setAttribute('src', char.img)
    newH1$$.innerHTML = char.name;
    


}