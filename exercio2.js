let string = ('gosto de cachorros e gatos');

let vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

let split = string.split('');

let TodasVogais = [];

for(let i = 0; i < split.length; i++){
    if(vogais.includes(split[i])){
        TodasVogais.push(split[i]);
    }
}

console.log('total de vogais encontradas na string: ' + TodasVogais.length);
console.log('todas as vogais encontradas: ' + TodasVogais);