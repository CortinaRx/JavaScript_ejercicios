

//Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
newDiv$$ = document.createElement('div');
document.body.appendChild(newDiv$$);
for (let i = 0; i < 6; i++) {
    newP$$ = document.createElement('p')
    newDiv$$.appendChild(newP$$);

    
    
}