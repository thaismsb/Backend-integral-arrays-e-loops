const nomes = ["Ana", "Joana","Carlos", "amanda"];

let nomesA = [];

for(let item of nomes){
    if(item[0] === "a" || item[0] === "A"){
        nomesA.push(item)
    }
}
console.log(nomesA);
