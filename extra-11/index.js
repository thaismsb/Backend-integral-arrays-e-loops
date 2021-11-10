const original = [5, 7, 13, 17, 26, 34, 118, 245];

let novo =[];

for(let item of original){
    if((item >= 10 && item <=20) || item>100){
        novo.push(item)
    }
}

console.log(novo);