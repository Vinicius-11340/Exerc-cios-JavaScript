function exercicio1() {
    let quantidade = 0;
    let preco_total = 0;

    quantidade = parseInt(prompt("Informe a quantidade de maçãs compradas: "));

    if (quantidade >= 12) {
        preco_total = quantidade * 1.95;
    } else {
        preco_total = quantidade * 2.30;
    } 

    alert("O preço total da compra é: R$" + preco_total);
}