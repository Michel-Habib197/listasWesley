let vetor = [];
let matriz = [];

// ---------------- VETOR ----------------
function criarInputsVetor() {
  const div = document.getElementById("vetor-inputs");
  for (let i = 0; i < 10; i++) {
    div.innerHTML += `<input type="number" id="vet${i}">`;
  }
}

function lerVetor() {
  vetor = [];
  for (let i = 0; i < 10; i++) {
    vetor.push(parseInt(document.getElementById("vet" + i).value) || 0);
  }
  document.getElementById("saida-vetor").innerText = "Vetor lido: " + vetor.join(", ");
}

function imprimirVetor(v) {
  document.getElementById("saida-vetor").innerText = "Início → Fim: " + v.join(", ");
}

function imprimirVetorInvertido(v) {
  document.getElementById("saida-vetor").innerText = "Fim → Início: " + v.slice().reverse().join(", ");
}

function imprimirPosicoesImpares(v) {
  const impares = v.filter((_, i) => i % 2 === 1);
  document.getElementById("saida-vetor").innerText = "Posições ímpares: " + impares.join(", ");
}

function somaPosicoesPares(v) {
  return v.reduce((soma, val, i) => i % 2 === 0 ? soma + val : soma, 0);
}

function mostrarSomaPares(v) {
  document.getElementById("saida-vetor").innerText = "Soma posições pares: " + somaPosicoesPares(v);
}

function maiorValor(v) {
  return Math.max(...v);
}

function mostrarMaiorValor(v) {
  document.getElementById("saida-vetor").innerText = "Maior valor: " + maiorValor(v);
}

// ---------------- MATRIZ ----------------
function criarInputsMatriz() {
  const div = document.getElementById("matriz-inputs");
  let html = "";
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      html += `<input type="number" id="mat${i}${j}">`;
    }
    html += "<br>";
  }
  div.innerHTML = html;
}

function lerMatriz() {
  matriz = [];
  for (let i = 0; i < 5; i++) {
    let linha = [];
    for (let j = 0; j < 5; j++) {
      linha.push(parseInt(document.getElementById("mat" + i + j).value) || 0);
    }
    matriz.push(linha);
  }
  imprimirMatriz(matriz);
}

function imprimirMatriz(m) {
  let saida = "Matriz:\n";
  for (let i = 0; i < m.length; i++) {
    saida += m[i].join(" ") + "\n";
  }
  document.getElementById("saida-matriz").innerText = saida;
}

function diagonalPrincipal(m) {
  let diag = [];
  for (let i = 0; i < m.length; i++) diag.push(m[i][i]);
  document.getElementById("saida-matriz").innerText = "Diagonal principal: " + diag.join(", ");
}

function diagonalSecundaria(m) {
  let diag = [];
  for (let i = 0; i < m.length; i++) diag.push(m[i][m.length - 1 - i]);
  document.getElementById("saida-matriz").innerText = "Diagonal secundária: " + diag.join(", ");
}

function linhasImpares(m) {
  let linhas = m.filter((_, i) => i % 2 === 1);
  document.getElementById("saida-matriz").innerText = "Linhas ímpares:\n" + linhas.map(l => l.join(" ")).join("\n");
}

function colunasPares(m) {
  let resultado = [];
  for (let i = 0; i < m.length; i++) {
    resultado.push(m[i].filter((_, j) => j % 2 === 0));
  }
  document.getElementById("saida-matriz").innerText = "Colunas pares:\n" + resultado.map(l => l.join(" ")).join("\n");
}

function linhasParesColunasImpares(m) {
  let resultado = [];
  for (let i = 0; i < m.length; i += 2) {
    let linha = [];
    for (let j = 1; j < m[i].length; j += 2) {
      linha.push(m[i][j]);
    }
    resultado.push(linha);
  }
  document.getElementById("saida-matriz").innerText = "Linhas pares & colunas ímpares:\n" + resultado.map(l => l.join(" ")).join("\n");
}

// Inicializa inputs quando a página carrega
window.onload = function() {
  criarInputsVetor();
  criarInputsMatriz();
};
