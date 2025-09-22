//Funções exercício 1:
function mostrarImpares(n) {
    let resultado = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            resultado.push(i);
        }
    }
    return resultado.join(", ");
}

function verificarParidade(n) {
    return n % 2 === 0 ? "Par" : "Impar";
}

function executarEx1() {
    let numero = parseInt(document.getElementById("numero").value);
    let saida = document.getElementById("saida");


    if (isNaN(numero) || numero < 0) {
        saida.innerHTML = "Por favor, digite um número natural.";
        return;
    }

    let impares = mostrarImpares(numero);
    let paridade = verificarParidade(numero);

    saida.innerHTML = `
        <p><strong>a) Números ímpares até ${numero}:</strong> ${impares}</p>
        <p><strong>b) O número ${numero} é:</strong> ${paridade}</p>
    `;
}

// _______________________________________________________________________

//Funções exercício 2:

let vetor = [];

// Captura quando o usuário pressiona Enter no input
document.getElementById("entrada").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        armazenarNumero();
    }
});

// Armazena cada número digitado
function armazenarNumero() {
    let entrada = document.getElementById("entrada");
    let valor = entrada.value;
    let numero = parseInt(valor);

    if (isNaN(numero)) {
        alert("Digite um valor válido!");
        entrada.value = "";
        return;
    }

    if (vetor.length < 10) {
        vetor.push(numero);
        document.getElementById("status").innerHTML =
            `Números digitados até agora: [${vetor.join(", ")}] (${vetor.length}/10)`;
    }

    entrada.value = ""; // limpa a caixa após digitar

    // Se já tiver 10 números, habilita o botão
    if (vetor.length === 10) {
        document.getElementById("executarBtn").disabled = false;
        entrada.disabled = true; // bloqueia o input
    }
}

// (b) Imprimir do início para o fim
function imprimirVetorInicioFim(vetor) {
    return vetor.join(", ");
}

// (c) Imprimir do fim para o início
function imprimirVetorFimInicio(vetor) {
    return vetor.slice().reverse().join(", ");
}

// Função principal que conecta tudo
function executarEx2() {
    document.getElementById("resolucao2a").innerHTML =
        `<strong>Vetor armazenado:</strong> [${vetor.join(", ")}]`;

    document.getElementById("resolucao2b").innerHTML =
        `<strong>Do início para o fim:</strong> [${imprimirVetorInicioFim(vetor)}]`;

    document.getElementById("resolucao2c").innerHTML =
        `<strong>Do fim para o início:</strong> [${imprimirVetorFimInicio(vetor)}]`;
}