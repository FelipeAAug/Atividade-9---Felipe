   var navegar = prompt(`Seja bem vindo! Para navegar pelo site, digite onde deseja ir! 1-sistema bancario 2-calculadora 3-aumento de salario 4-triangulos`)


   //SALDO
if (navegar == 'sistema bancario' ||navegar == '1')  {
    alert(`Bem vindo ao simulador de sistema bancário!`)
var saldoinicial = Number(prompt("Digite seu saldo:"))
var valorcompra = Number(prompt("insira o valor da compra: "))

if (valorcompra > saldoinicial) {
    alert(`Compra não efetuada. Saldo insuficiente!`)
}
if (valorcompra < saldoinicial) {
    alert(`Compra efetuada! Seu saldo atual é ${saldoinicial - valorcompra} R$`)
}
}
    //CALCULADORA
else if (navegar == 'calculadora' || navegar == '2') {
alert('Bem vindo a calculadora!')
var operacao = prompt("Digite 'S' para soma, 'M' para subtração, 'X' para multiplicação e 'D' para divisão")
 
 if (operacao == 'S' ||operacao == 's') {
    var num1 = parseInt(prompt('Digite o primeiro número:'))
    var num2 = parseInt(prompt('Digite o segundo número:'))
    var soma = num1+num2
    alert(` O resultado é: ${soma}!`)
 }
else if (operacao == 'M' ||operacao == 'm') {
    var num3 = parseInt(prompt('Digite o primeiro número:'))
    var num4 = parseInt(prompt('Digite o segundo número:'))
    var subt = num3-num4
    alert(` O resultado é: ${subt}!`)
 }
else if (operacao == 'X' || operacao == 'x') {
    var num5 = parseInt(prompt('Digite o primeiro número:'))
    var num6 = parseInt(prompt('Digite o segundo número:'))
    var multi = num5*num6
    alert(` O resultado é: ${multi}!`)
 }
else if (operacao == 'D' || operacao == 'd') {
    var num7 = parseInt(prompt('Digite o primeiro número:'))
    var num8 = parseInt(prompt('Digite o segundo número:'))
    var divi = num7/num8
    alert(` O resultado é: ${divi}!`)
 }
}

 //SALÁRIO
else if (navegar == 'aumento de salario' || navegar == '3') {
 alert('Seja bem vindo!')
 let salario = Number(prompt("Insira seu salário para obter o aumento: "))

 if (salario <= 280) {
    var aumento = salario*20/100
    var salariofinal = salario+aumento
    alert(`Você recebeu um aumento de ${aumento}R$, o equivalente a 20% do seu salário de ${salario}R$!. Seu novo salário é de: ${salariofinal}R$!`) 
 }
else if (salario >280 && salario <=700) {
    var aumento = salario*15/100
    var salariofinal = salario+aumento
    alert(`Você recebeu um aumento de ${aumento}R$, o equivalente a 15% do seu salário de ${salario}R$!. Seu novo salário é de: ${salariofinal}R$!`) 
 }
else if (salario >700 && salario <1500) {
    var aumento = salario*10/100
    var salariofinal = salario+aumento
    alert(`Você recebeu um aumento de ${aumento}R$, o equivalente a 10% do seu salário de ${salario}R$!. Seu novo salário é de: ${salariofinal}R$!`) 
 }
 else if (salario >=1500) {
    var aumento = salario*5/100
    var salariofinal = salario+aumento
    alert(`Você recebeu um aumento de ${aumento}R$, o equivalente a 5% do seu salário de ${salario}R$!. Seu novo salário é de: ${salariofinal}R$!`) 
 }
}

 //TRIÂNGULOS
else if (navegar == 'triangulos' || navegar == '4') {
 var lado1 = Number(prompt("Insira o primeiro lado do triângulo: "))
 var lado2 = Number(prompt("Insira o segundo lado do triângulo: "))
 var lado3 = Number(prompt("Insira o terceiro lado do triângulo: "))
 var somalados = lado1+lado2+lado3
 if (somalados != 180) {
    alert(`A soma dos lados não é 180, portanto, não é um triângulo. Tente novamente! `)
 }
 if (lado1 === lado2 && lado1 === lado3 && somalados === 180) {
    alert(`Este é um Triângulo Equilátero!`)
 }
 else if (somalados === 180 && lado1 === lado2 && lado1 != lado3||lado1 === lado3 && lado1 != lado2||lado2 === lado3 && lado2 != lado1) {
    alert(`Este é um triângulo Isósceles!`)
 }
 else if (lado1 != lado2 && somalados === 180||lado1 != lado3 && somalados === 180||lado2 != lado3 && somalados === 180) {
    alert(`Este é um triângulo Escaleno!`)
 }
}
