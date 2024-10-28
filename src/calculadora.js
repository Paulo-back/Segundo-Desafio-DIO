
const entrada = require('prompt-sync')({sigint: true});

//Inicio das funções.
function Saldo(qtdVitorias,qtdDerrotas){
    let SaldoWin = (qtdVitorias - qtdDerrotas);
    return SaldoWin;
}
function rank(SaldoWin){
    switch(true){
        case (SaldoWin>=0 && SaldoWin <= 10):
            return "Ferro";
            
        case (SaldoWin >= 11 && SaldoWin <=20):
            return "Bronze";
            
        case (SaldoWin >= 21 && SaldoWin <=50):
            return "Prata";
            
        case (SaldoWin >= 51 && SaldoWin <=80):
            return "Ouro";
            
        case (SaldoWin >= 81 && SaldoWin <=90):
            return "Diamante";
            
        case (SaldoWin >= 91 && SaldoWin <=100):
            return "Lendário";
            
        case (SaldoWin >= 101):
            return "Imortal";

        default:
            return "Sem elo!\nPorque voce teve mais derrotas que vitorias 🤣";
    }
}
function Recebenome(){
    console.log("Digite seu nome Heroi: ");
    let nomeCompleto = entrada();
    let nome = nomeCompleto.split(/[\s-_]+/)[0];
    return nome;
}//Fim das funções.

//Inicio do código.
let i= 0;
const name = Recebenome();
let qtdVitorias,qtdDerrotas;

console.log(`\nHeroi ${name} este ato chegou ao fim!`);
console.log("\nAgora vamos calcular qual foi seu rank depois desse intenso Ato!");
    do{
    console.log("\nQuantas vitorias foram obtidas nesse ato?");
    qtdVitorias = parseInt(entrada());
    console.log("E quantas derrotas?");
    qtdDerrotas = parseInt(entrada());
    if(qtdVitorias>= 0  && qtdDerrotas >=0){
        let saldoVitorias = Saldo(qtdVitorias,qtdDerrotas);
        let nivel = rank(saldoVitorias);
        console.log(`\nHeroi ${name} seu saldo de vitorias foi de ${saldoVitorias} e seu elo foi o: **${nivel}**`);
        i=0;
    }else{
        console.log("\nErro ao digitar sua vitorias ou derrotas!");
        console.log("\nPor favor digite numeros");
        i++;
}
}while(i!= 0);
//Fim.
