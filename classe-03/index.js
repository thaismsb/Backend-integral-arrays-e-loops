const numeros = [54, 22, 14, 87, 10, 284];

let encontrado = false;
for(let i=0; i<numeros.length;i++){
    const numero = numeros[i];
    if(numero === 10){
        console.log(`O número 10 está no índice ${i}.`);
        encontrado = true;
    }
}
 if(!encontrado){
     console.log("-1")
 }