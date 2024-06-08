alert("Bem-vindo ao jogo do número secreto");
let chute;
let numeroMaximo= 1000
let numeroSecreto= parseInt(Math.random() * numeroMaximo + 1)
let qtdTentativas=1

while (chute != numeroSecreto){
    chute=prompt(`Digite um número de 1 a ${numeroMaximo}`);

  // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
    break;}
    else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
       // tentativas = tentativas + 1;
       qtdTentativas++;
    }
}
console.log (numeroSecreto)

let palavraTentativa = qtdTentativas > 1? 'tentativas' : 'tentativa';

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${qtdTentativas} ${palavraTentativa}.`);

