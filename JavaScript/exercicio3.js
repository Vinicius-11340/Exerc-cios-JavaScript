function exercicio3() {
    let final_placa = 0;

    final_placa = parseInt(prompt("Informe o último digito da sua placa: "))



    switch (final_placa) {
        case 0:
            alert("Seu carro está proíbido de circular na segunda-feira.");
            break;

        case 1:
            alert("Seu carro está proíbido de circular na terca-feira.");
            break;

        case 2:
            alert("Seu carro está proíbido de circular na quarta-feira.");
            break;

        case 3:
            alert("Seu carro está proíbido de circular na quinta-feira.");
            break;

        case 4:
            alert("Seu carro está proíbido de circular na sexta-feira.");
            break;

        case 5:
            alert("Seu carro está proíbido de circular na segunda-feira.");
            break;

        case 6:
            alert("Seu carro está proíbido de circular na terça-feira.");
            break;

        case 7:
            alert("Seu carro está proíbido de circular na quarta-feira.");
            break;

        case 8:
            alert("Seu carro está proíbido de circular na quinta-feira.");
            break;

        case 9:
            alert("Seu carro está proíbido de circular na sexta-feira.");
            break;
        default:
            alert("Valor de final de placa é inválido!")
    }
} 