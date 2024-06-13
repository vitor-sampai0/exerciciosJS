let ArrayNumeros = [30, 20, 20, 30, 31];

let b = 0;

console.log('numeros encontrados:');
for(i = 0; i < ArrayNumeros.length; i++){
    console.log(ArrayNumeros[i])
    b += ArrayNumeros[i]
}
console.log('Soma dos numeros encontrados: ');
console.log(b);