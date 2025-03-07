const numeros = [10, 20, 30, 40, 50];

numeros.push(60);
console.log(numeros);

numeros.shift();
console.log(numeros);


console.log(Math.max(...numeros));

console.log(Math.min(...numeros));