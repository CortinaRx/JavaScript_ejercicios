//Convierte la siguiente función con un fetch utilizando async-await. Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;

// function getCharacters () {
//     fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
// }

// getCharacters();

newArray = [];

const getAllCharacters = async () => {
  const getCharacters = await fetch("https://rickandmortyapi.com/api/character");
  const getCharactersToJson = await getCharacters.json();
  for (const element of getCharactersToJson.results) {
        print(element)
        
  }
  
  // console.log(getCharactersToJson);
  
};

getAllCharacters();

const print = (character) => {
  const div$$ = document.createElement('div');
  const h1$$ = document.createElement('h1');
  const img$$ = document.createElement('img');

  document.body.appendChild(div$$);
  div$$.appendChild(h1$$);
  div$$.appendChild(img$$);

  img$$.setAttribute('src', character.image)
  h1$$.innerHTML= character.name;



}
