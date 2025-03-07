const num = 5;

function calcularValor(num) {
    return {
        dobro: num * 2,
        triplo: num * 3,
        quadrado: num * num
    };
}
const resultados = calcularValor(num);
console.log(resultados); 
