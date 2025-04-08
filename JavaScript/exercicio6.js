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

                alert("Informe dois números inteiros: ")
                n1 = parseInt(prompt("Informe o primeiro número: "));
                n2 = parseInt(prompt("Informe o segundo número: "));


                if (isNaN(n1) || isNaN(n2)) {
                    alert("Por favor, insira números válidos!");
                } else {
                    resultado = n1 + n2;
                    alert("O valor da sua soma é: " + resultado);
                }
                break;

            case 2:

               alert("Informe dois números inteiros: ")
                n1 = parseInt(prompt("Informe o primeiro número: "));
                n2 = parseInt(prompt("Informe o segundo número: "));


                if (isNaN(n1) || isNaN(n2)) {
                    alert("Por favor, insira números válidos!");
                } else {
                    resultado = n1 - n2;
                    alert("O valor da sua subtração é: " + resultado);
                }
                break;

            case 3:
                alert("Informe dois números inteiros: ")
                n1 = parseInt(prompt("Informe o primeiro número: "));
                n2 = parseInt(prompt("Informe o segundo número: "));


                if (isNaN(n1) || isNaN(n2)) {
                    alert("Por favor, insira números válidos!");
                } else {
                    resultado = n1 * n2;
                    alert("O valor da sua multiplicação é: " + resultado);
                }
                break;

            case 4:
                alert("Informe dois números inteiros: ")
                n1 = parseInt(prompt("Informe o primeiro número: "));
                n2 = parseInt(prompt("Informe o segundo número: "));


                if (isNaN(n1) || isNaN(n2)) {
                    alert("Por favor, insira números válidos!");
                } else {
                    resultado = n1 / n2;
                    alert("O valor da sua divisão é: " + resultado);
                }
                break;

            case 5:
                alert("Programa Encerrado!!")
        }
    } while (opcao >= 1 && opcao <= 4)
}