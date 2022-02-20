//  Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let newUl$$ = document.createElement('ul')
document.body.appendChild(newUl$$);

for (let i = 0; i < apps.length; i++) {
    let newLi$$ = document.createElement('li');
    newLi$$.textContent = apps[i];
    newUl$$.appendChild(newLi$$);
    
    
}


