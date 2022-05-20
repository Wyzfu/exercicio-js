/************************************************************************************
    AULA: Introdução ao Javascript

    1. Ambiente de desenvolvimento;
    2. Variáveis var, let, const, string, number e boolean;
    3. Operadores de atribuição, aritméticos, relacionais, lógicos e unários;
    4. Estruturas de decisão if/else, ternárias e switch;
    5. Estruturas de repetição while, do/while, for, for/in e for/of;
    6. Arrays e funções.
    7. Módulos.

    .code runner: ctrl + alt + n  para rodar o código
                  ctrl + alt + m  para interromper a execuação

 ***********************************************************************************/

// Variáveis var, let, const, string, number, boolean,
// operador de atribuição e aritméticos (=, +, -, *, /, %):
// operadores de atribuição aritméticos (=, *=, /=, +=, -=):
// relacionais (==, !=, <, >, <=, >=) e lógicos (!, &&, ||) e unários (++, --):
// (VARIÁVEIS) + (OPERADORES) + (ESTRUTURAS)
// Estruturas de decisão if/else, ternárias e switch:
// Estruturas de repetição while, do/while, for, for/in e for/of,  arrays.
// Funções convencionais e seta.
// Modulos.


var x = 100;
var y = '100';

console.log(typeof x);
console.log(typeof y);


//multiplicar os valores
var resultado = x * y;
console.log(resultado);

//ira colocar os valores do x e y um do lado do outro
var resultado = x + y;
console.log(resultado);


//somar o valor de a e b
function somar (a , b){
    return a + b;
}
console.log(somar(10, 5));
console.log(somar(12,5.5));

//ou
console.log(((a,b)=> a+b)(10,5));

//se colocar uma variavel voce pode repetir varias contas so de chamar essa variavel
const somarFunc = (a,b)=> a+b;


//assim fará somar cruzadas
const v1 = [10,3,5,9,8];
const v2 = [13,5,14,7,6];

for(nv1 of v1){
    for(nv2 of v2){
        console.log(somarFunc(nv1,nv2));
    }
}


