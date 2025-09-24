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
            `Números digitados até agora: [${vetor.join(", ")}]`;
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

// ____________________________________________________________________
// Funções Exercício 3

let matriz = [];
let valores = [];

// Captura enter no input
document.getElementById("entrada3").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        armazenarNumeroMatriz();
    }
});

// (a) Armazenar Matriz
function armazenarNumeroMatriz() {
    let entrada = document.getElementById("entrada3");
    let numero = parseInt(entrada.value);

    if (isNaN(numero)) {
        alert("Digite um número válido!");
        entrada.value = "";
        return;
    }

    if (valores.length < 9) {
        valores.push(numero);
        document.getElementById("status3").innerHTML =
            `Valores digitados até agora: [${valores.join(", ")}] (${valores.length}/9)`;
    }

    entrada.value = "";

    if (valores.length === 9) {
        document.getElementById("executarBtn3").disabled = false;
        entrada.disabled = true;

        // Preenche matriz 3x3
        matriz = [];
        for (let i = 0; i < 3; i++) {
            matriz.push(valores.slice(i * 3, i * 3 + 3));
        }
    }
}

// (b) Imprimir matriz na tela
function imprimirMatriz(m) {
    return m.map(linha => `[${linha.join(", ")}]`).join("<br>");
}

// (c) Imprimir colunas pares
function imprimirColunasPares(m) {
    let resultado = [];
    for (let i = 0; i < m.length; i++) {
        let linha = [];
        for (let j = 0; j < m[i].length; j++) {
            if ((j + 1) % 2 === 0) {
                linha.push(m[i][j]);
            }
        }
        resultado.push(`[${linha.join(", ")}]`);

    }
    return resultado.join("<br>");
}

// (d) Imprimir linhas impares
function imprimirLinhasImpares(m) {
    let resultado = [];
    for (let i = 0; i < m.length; i++) {
        if ((i + 1) % 2 !== 0) {
            resultado.push(`[${m[i].join(", ")}]`);
        }
    }
    return resultado.join("<br>");
}

// Função principal
function executarEx3() {
    document.getElementById("resolucao3a").innerHTML =
        `<strong>Matriz preenchida:</strong><br>${imprimirMatriz(matriz)}`;

    document.getElementById("resolucao3b").innerHTML =
        `<strong>Matriz completa:</strong><br>${imprimirMatriz(matriz)}`;

    document.getElementById("resolucao3c").innerHTML =
        `<strong>Colunas pares:</strong><br>${imprimirColunasPares(matriz)}`;

    document.getElementById("resolucao3d").innerHTML =
        `<strong>Linhas ímpares:</strong><br>${imprimirLinhasImpares(matriz)}`;
}