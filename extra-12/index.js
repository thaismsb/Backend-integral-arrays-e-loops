const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

while (filaDeDentro.length <= 4) {
    filaDeDentro.push(filaDeFora[0])
    filaDeFora.shift()
}

console.log(filaDeDentro);
console.log(filaDeFora);