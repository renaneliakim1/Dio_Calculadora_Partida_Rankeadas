/* # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro (acho que devia ser "menor ou igual")
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**" */

let quantidadeVitorias = prompt('Digite a quantidade de vitorias do seu heroi');
let quantidadeDerrotas = prompt('Digite a quantidade de derrotas do seu heroi');
let nivel = '';
let saldoVitorias;

function saldo (){
    saldoVitorias =  quantidadeVitorias - quantidadeDerrotas;
}

saldo();

if (saldoVitorias >= 101){
    nivel =  'Imortal';
} else if (saldoVitorias >= 91){
    nivel =  'Lendario';
}else if (saldoVitorias >= 81){
    nivel =  'Diamnate';
}else if (saldoVitorias >= 51){
    nivel =  'Ouro';
}else if (saldoVitorias >= 21){
    nivel =  'Prata';
}else if (saldoVitorias >= 11){
    nivel = 'Bronze';
}else if (saldoVitorias <= 10){
    nivel =  'Ferro';
}else{
    console.log('Dados invalidos');
}
    
console.log('O Herói tem de saldo de ' + saldoVitorias +  ', está no nível de ' + nivel);