function exercicio7() {

    let numeros = [];

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o número ${i + 1} (de 10):`));
    
    // Verifica se o valor é um número válido
    while (isNaN(numero)) {
        numero = parseInt(prompt("Valor inválido! Digite novamente o número " (+ i + 1), "(de 10):"));
    }

}

// Calcula a soma dos números
let soma = 0;
for (let numero of numeros) {
    soma += numero;
}

// Calcula a média
let media = soma / 10;

// Exibe o resultado
alert(`A média dos 10 números é: ${media}`);
console.log(`Números: [${numeros.join(', ')}]`);
console.log(`Média: ${media}`);
}