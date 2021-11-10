const letras = ["A", "a", "B", "C", "E", "e"];

let soma= 0;

for(let letra of letras){
    if(letra ==="e" || letra ==="E") {
        soma++
    }
}

if(soma === 0){
    console.log('Nenhuma letra "E" ou "e" foi encontrada.')
}else if(soma === 1){
    console.log('Foi encontrada 1 letra "E" ou "e".')
}else{
    console.log(`Foram encontradas ${soma} letras "E" ou "e".`)
}








