// let num = Number(prompt('Digite um número.Para sair digite 0'))
// let soma = 0

// while(num !==0){
//     soma = soma + num
//     // soma += num - vale o mesmo que soma = soma + num
//     num = Number(prompt('Digite um número.Para sair digite 0'))
// }

// alert(`A soma dos números é ${soma}`)


// const array = [7, 6, 5, 4, 3, 2, 1]
// for(let i = 0; i <= array.length; i++){
//     console.log(`O número do índice é ${i} é ${array[i]}`)
// }


// pratica em aula - exercicio 1
let admin = 'a'
let usuario = prompt('Qual seu tipo de usuário?. Responda com A,B ou C').toUpperCase()
while(usuario !== admin.toUpperCase()){
    alert('Acesso negado')
    usuario = prompt('Qual seu tipo de usuário?. Responda com A,B ou C').toUpperCase
    }
    alert('Boas vindas, admin!')

// pratica em aula - exercicio 2 -- for para imprimir a  tabuada do 2

// exercício 2

let num
for (let i = 0; i < num; i++) {
     num = i*2 
    console.log(num)}

// exercicio 3
const arrayStrings = ['banana', 'uva', 'goiaba']
for (let i = 0; i < arrayStrings.length; i++) {
        console.log(arrayStrings[i].toUpperCase())
    }