// <!-- Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. 
//Una vez lo tengas compruebalo con un console.log. -->

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Abel Cabeza", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

for(let i = 0; i < alumns.length ; i++){
    let approvedCount = 0;
    if(alumns[i].T1 == true){
        approvedCount += 1   
}

if(alumns[i].T2 == true){
    approvedCount += 1
}

if(alumns[i].T3 == true){
    approvedCount += 1
}


if(approvedCount >= 2){
    alumns[i].isApproved = true;
}else {
    alumns[i].isApproved = false;
}
                              
}console.log(alumns)






// //for(let i = 0; i < alumns.length ; i++){
//     let approvedCount = 0;
//     approvedCount = alumns[i].T1 ? approvedCount + 1 : approvedCount
//     approvedCount = alumns[i].T2 ? approvedCount + 1 : approvedCount
//     approvedCount = alumns[i].T3 ? approvedCount + 1 : approvedCount
//     alumns[i].isApproved = (approvedCount >= 2) ? true : false;
    
// }console.log(alumns)
