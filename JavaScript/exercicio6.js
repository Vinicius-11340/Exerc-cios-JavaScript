function exercicio6() {
    let opcao = 0;
    let n1 = 0;
    let n2 = 0;
    let resultado = 0;

    do {

        alert("Escolha uma opção de 1 a 5: ")

        opcao = parseInt(prompt("(1) somar (2) subtrair (3) multiplicar (4) dividir (5) sair: "))

        switch (opcao) {
            case 1:
                parseInt(prompt("Informe dois números inteiros: "))
                resultado = n1 + n2
                alert("O valor da sua soma é:" + resultado);
                break;

            case 2:
                parseInt(prompt("Informe dois números inteiros: "))
                resultado = n1 + n2
                alert("Seu carro está proíbido de circular na terca-feira.");
                break;

            case 3:
                parseInt(prompt("Informe dois números inteiros: "))
                resultado = n1 + n2
                alert("Seu carro está proíbido de circular na quarta-feira.");
                break;

            case 4:
                parseInt(prompt("Informe dois números inteiros: "))
                resultado = n1 + n2
                alert("Seu carro está proíbido de circular na quinta-feira.");
                break;

            case 5:
                prompt("Programa Encerrado!!")
        }
    } while (opcao >= 1 && opcao <= 4)
}