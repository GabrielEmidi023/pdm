
const frase = "lol é podre com força";


const maiuscula = frase.toUpperCase();
console.log("Frase em maiúsculas: ", maiuscula);

const minuscula = frase.toLowerCase();
console.log("Frase em minúsculas: ", minuscula);

const fraseInvertida = frase.split('')
                              .reverse()
                              .join(''); 
console.log("Frase invertida: ", fraseInvertida);

const letraAntiga = 'a';
const letraNova = 'o';

const fraseAlterada = frase.replace(new RegExp(letraAntiga, 'g'), letraNova);
console.log("Frase com 'a' substituído por 'o': ", fraseAlterada);  
