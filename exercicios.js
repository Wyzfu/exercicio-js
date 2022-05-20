const console = require( './extras/console');

// //exercicio 01
// /* Ex 1. Escreva um algoritmo que leia um número digitado pelo usuário e mostre a mensagem “Número maior do
// que 10! ”, caso este número seja maior, ou “Número menor ou igual a 10! ”, caso este número seja menor ou igual.*/

// function exercicio1(){
//     const numero = console.getNumber("Informe um número:");

//     if(numero > 10){
//         console.log('Este número é maior que 10')
//     }else{
//         console.log('Este número é menor ou igual a 10')
//     }
// }

// exercicio1();





//exercicio2
/*Ex 2. Escreva um algoritmo que leia dois números digitados pelo usuário e exiba o resultado da sua soma
*/

// function exercicio2(){
//     const numero1 = console.getNumber("Informe o primeiro numero da soma")
//     const numero2 = console.getNumber("Informe o segundo numero da soma")
//     const soma =(numero1,numero2)=> numero1 + numero2;
//     var vlr = soma(numero1 , numero2);
//     console.log('Soma dos numeros:' + vlr);
// }

// exercicio2();





//exercicio 3
/*Ex 3. Escreva um algoritmo que leia os valores de dois números inteiros distintos nas variáveis A e B e informe
qual deles é o maior. Caso os números sejam iguais informar ao usuário que a sequência de números informados é
inválida.
*/

// function exercicio3(){
//     const nA = console.getNumber("Digite o primeiro numero:");
//     const nB = console.getNumber("Digite o segundo numero:");

//     if(nA > nB ){
//         console.log("O primeiro número é maior que o segundo")
//     }else if(nB > nA){
//         console.log("O segundo número é maior que o primeiro")
//     }else{
//         console.log("Numeros iguais sao inválidos")
//     }

// }

// exercicio3();




//exercicio 4
/*Ex 4. Escreva um algoritmo que leia dois números e ao final mostre a soma, subtração, multiplicação e a divisão
dos números lidos.
*/

// function exercicio4(){
//     const n1 = console.getNumber("Digite um número: ")
//     const n2 = console.getNumber("Digite mais um número: ")

//     const soma = (n1,n2) => n1 + n2
//     var vlr = soma(n1,n2)
//     console.log('Valor da soma: ' + vlr)

//     const subtração = (n1,n2) => n1 - n2
//     var vlr = subtração(n1,n2)
//     console.log('Valor da subtração: ' + vlr)

//     const multiplicação = (n1,n2) => n1 * n2
//     var vlr = multiplicação(n1,n2)
//     console.log('Valor da multiplicação; '+ vlr)

//     const divisão = (n1,n2) => n1 / n2
//     var vlr= divisão(n1,n2)
//     console.log('Valor da divisao: ' + vlr)

// }

// exercicio4();





//exercicio 5
/*Ex 5. Leia valores nas variáveis A e B, e efetue a troca dos valores de forma que o valor da variável A passe a ser
o valor da variável B e o valor da variável B passe a ser o valor da variável A. Apresentar uma mensagem com o
valor original de cada variável e outra com os valores trocados.
*/

// function exercicio5(){
//     const v1 = console.getNumber("Digite o primeiro número:")
//     const v2 = console.getNumber("Digite o segundo número;")

//     const valor=(v1) => v2
//     var vlr= valor(v1)
//     console.log('O valor do primeiro número é: ' + vlr)

//     const valor2=(v2) => v1
//     var vl= valor2(v2)
//     console.log('O valor do segundo número é: ' + vl)


//     console.log('Haha, pegadinha do malandro, eu te enganei :D')

//     const valor1=(v1) => v1
//     var vlr= valor1(v1)
//     console.log('O valor do primeiro número é: ' + vlr)

//     const valor22=(v2) => v2
//     var vl= valor22(v2)
//     console.log('O valor do segundo número é: '+ vl)
    
// }

// exercicio5()





//exercicio 6
/*Ex 6. Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de
conversão é:
F = (9 * C + 160) / 5
*/

// function exercicio6(){
//     const celsius = console.getNumber("Digite um temperatura: ")

//     const Fahrenheit = (9 * celsius + 160) / 5

//     console.log('Em Fahrenheit é: ' + Fahrenheit)
// }

// exercicio6();





//exercicio 7
/*Ex 7. Escreva um algoritmo que leia um número e diga, através de uma mensagem, se este número está no
intervalo entre 100 e 200. Caso o número esteja fora do intervalo o usuário também deverá ser informado.
*/

// function exercicio7(){
//     const numero = console.getNumber("Digite um número:")

//     if(numero > 100 , numero < 200){
//         console.log('Este número está no intervalo de 100 e 200')
//     }else{
//         console.log("Este número NÃO está no intervalo entre 100 e 200")
//     }

// }
// exercicio7();






//exercicio 8
/*Ex 8. Escreva um algoritmo que leia um número e mostre uma mensagem caso este número seja maior ou igual
a 50, outra se ele for menor que 50.
*/

// function exercicio8(){
//     const numero = console.getNumber("Digite um número:")

//     if (numero == 50 , numero > 50){
//         console.log('Este número é maior ou igual a 50 XD')
//     }else{
//         console.log('Este número é menor que 50')
//     }
// }

// exercicio8();





//exercicio 9
/*Ex 9. Leia dois números nas variáveis A e B e identifique se os valores são iguais ou diferentes. Caso eles sejam
iguais imprima uma mensagem dizendo que são iguais. Caso sejam diferentes, informe que são diferentes e qual
número é o maior.
*/

// function exercicio9(){
//     const n1 = console.getNumber("Digite um número:")
//     const n2 = console.getNumber("Digite mais um número:")

//     if(n1 == n2){
//         console.log('Os valores são iguais')
//     }else if (n1 > n2){
//         console.log('Os valores são diferentes e o maior número é ' + n1 )
//     }else{
//         console.log('Os valores são diferentes é o maior número é ' + n2)
//     }
// }

// exercicio9();







//exercicio 10
/*Ex 10. Escreva um algoritmo que leia um número de 1 a 5 e escreva-o por extenso. Caso o usuário digite um
valor que não esteja neste intervalo, exibir a mensagem: “Número inválido! ”.
*/















//exercicio 14
/*Ex 14. A expressão an = a1 + (n – 1) * r é denominada termo geral da Progressão Aritmética (PA). Nesta fórmula,
temos que an é o termo de ordem n (n-ésimo termo), r é a razão e a1 é o primeiro termo da Progressão Aritmética.
Escreva um algoritmo que encontre o n-ésimo termo de uma progressão aritmética. Exemplo: a1 = 10, n = 7, r = 3.
Resultado: an = 28
*/

// function exercicio14(){
//     const a1 = console.getNumber("Escreva o valor do primeiro termo:")
//     const n = console.getNumber("Escreva o valor de n:")
//     const r = console.getNumber("Escreva o valor da razão:")

//     const an = a1 + (n - 1) * r

//     console.log('O valor de an é: ' + an)

// }
// exercicio14();






//exercicio 15
/*Ex 15. Tendo como dados de entrada dois pontos quaisquer no plano, P1(x1, y1) e P2(x2,y2), calcule e retorne a
distância entre eles. A fórmula que efetua tal cálculo é: d = raiz ( ( ( x2 - x1 ) ^ 2 ) + ( ( y2 - y1 ) ^ 2 ) )
Exemplo: p1(0, 5), p2(10, 20). Distancia: 18,03
*/

// function exercicio15(){
//     const x1 = console.getNumber("Digite o valor de x1")
//     const x2 = console.getNumber("Digite o valor e x2")

//     const y1 = console.getNumber("Digite o valor de y1")
//     const y2 = console.getNumber("Digite o valor de y2")

//     const d = ( ( ( x1 - x2 ) ^ 2 ) + ( ( y1 - y2 ) ^ 2 ) ) 

//     console.log('A distancia é: ' + d)
// }

// exercicio15();






//exercicio 16
/*Ex 16. Elabore um algoritmo que receba três notas de um aluno e retorne a sua média aritmética. Exemplo:
nota1 = 10.0, nota2 = 5.5, nota3 = 8.0. Média: 7.83
*/

// function exercicio16(){
//     const n1 = console.getNumber("Digite sua primeira nota:")
//     const n2 = console.getNumber("Digite sua segunda nota:")
//     const n3 = console.getNumber("Digite sua terceira nota:")

//     const media = (n1 + n2 + n3)/3

//     console.log("Sua média final será: " + media)
// }

// exercicio16();





//exercicio 17 
/*Ex 17. Elabore um algoritmo que receba três notas de um aluno os pesos referentes a cada nota e retorne a sua
média ponderada.
Cálculo da média ponderada:
nota1 * peso1 + nota2 * peso2 + nota3 * peso3
 peso1 + peso2 + peso3
Exemplo: nota1 = 10.0, nota2 = 5.5, nota3 = 8.0, peso1 = 5, peso2 = 3, peso3 = 2. Média: 8.25
*/

// function exercicio17(){
//     const nota1 = console.getNumber("Digite sua primeira nota:")
//     const peso1 = console.getNumber("Digite o peso desta prova:")
    
//     const nota2 = console.getNumber("Digite o peso de sua segunda nota:")
//     const peso2 = console.getNumber("Digite o peso desta prova:")
    
//     const nota3 = console.getNumber("Digite sua terceira nota:")
//     const peso3 = console.getNumber("Digite o peso desta prova:")


//     const media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3)

//     console.log('Sua média ponderada este ano será:' + media)
// }

// exercicio17();









//exercicio 18
/*Ex 18.Elabore um algoritmo que receba três notas de um aluno e retorne a sua média harmônica.
*/







//exercicio 19
/*Ex 19. Faça um algoritmo que receba o raio e a altura de um cilindro e retorne o seu volume calculado de acordo
com a seguinte fórmula: volume = 3.14 * raio2 * altura;
Exemplo: raio = 10, altura = 15. Volume = 4710
*/

// function exercicio19(){
//     const raio = console.getNumber("Digite o valor do raio :")
//     const altura = console.getNumber("Digite o valor da altura:")

//     const volume = 3.14 * (raio * raio) * altura

//     console.log('O valor do volume será: ' + volume)
// }

// exercicio19();






//exercicio 20
/*Ex 20. Elabore um algoritmo que calcule a quantidade de litros de combustível gasta em uma viagem, utilizando
um automóvel que faz 12km por litro e considerando que são fornecidos o tempo em hora e a velocidade média da
viagem.
*/





