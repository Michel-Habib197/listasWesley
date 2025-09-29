//Funções questão 1

function calcularTroco() {
  const notas = [50, 20, 10, 5, 2, 1];
  let resultado = ""

  const valorPago = parseFloat(document.getElementById("valorPago").value);
  const valorCompra = parseFloat(document.getElementById("valorCompra").value);

  if (valorPago < valorCompra) {
    //a máquina deve apresentar uma mensagem, informando que a quantia paga é insuficiente para realizar a compra.
    return "<p>A quantia paga é insuficiente para realizar a compra!</p>";
  }

  let troco = valorPago - valorCompra;
  resultado += `<p><strong>Troco: R$ ${troco},00</strong></p>`;

  for (let nota of notas) {
    let qtd = Math.floor(troco / nota);
    troco = troco % nota;
    resultado += `<p>Notas de R$ ${nota},00: ${qtd}</p>`;
  }
  return resultado;
}

function calcular() {
  const compra = parseInt(document.getElementById("valorCompra").value);
  const pago = parseInt(document.getElementById("valorPago").value);

  if (isNaN(compra) || isNaN(pago)) {
    document.getElementById("saida").innerHTML = "Preencha os dois valores!";
    return;
  }

  const saida = calcularTroco(compra, pago)
  document.getElementById("saida").innerHTML = saida;
}

function novoCalculo1() {
  document.getElementById("valorCompra").value = "";
  document.getElementById("valorPago").value = "";
  document.getElementById("saida").innerHTML = "";
}

// ___________________________________________________________________

// Funções questão 2

let numeros = [];

function adicionarNumero() {
  const input = document.getElementById("numeroInput");
  const valor = parseFloat(input.value);

  if (isNaN(valor)) {
    alert("Por favor, digite um número válido!");
  } else {
    numeros.push(valor);
    document.getElementById("resultadoMedia").innerHTML =
      `<p>Números informados até agora: ${numeros.join(', ')}</p>`;
  }

  input.value = "";
  input.focus();
}

function finalizarCalculo() {
  const resultadoMedia = document.getElementById("resultadoMedia");

  if (numeros.length === 0) {
    resultadoMedia.innerHTML = "Nenhum número foi informado.";
    return;
  }

  const soma = numeros.reduce((acc, num) => acc + num, 0);
  const media = soma / numeros.length;

  resultadoMedia.innerHTML = `
      <p>Números informados: ${numeros.join(', ')}</p>
      <p>Quantidade de números: ${numeros.length}</p>
      <p>Soma dos números: ${soma}</p>
      <p><strong>Média aritmética: ${media.toFixed(2)}</strong></p>
      <button onclick="novoCalculo2()">Novo cálculo</button>
    `;
}
function novoCalculo2() {
  numeros = [];
  document.getElementById("resultadoMedia").innerHTML = "";
  document.getElementById("numeroInput").value = "";
  document.getElementById("numeroInput").focus();
}
// ___________________________________________________________________

// Funções questão 3
let numeros3 = [];

function adicionarNumero3() {
  const input = document.getElementById("numeroInput3");
  const valor = parseFloat(input.value);

  if (isNaN(valor)) {
    alert("Por favor, digite um número válido!");
  } else {
    numeros3.push(valor);
    document.getElementById("resultadoMaior").innerHTML =
      `<p>Números informados até agora: ${numeros3.join(', ')}</p>`;
  }

  input.value = "";
  input.focus();
}

function finalizarCalculo3() {
  const resultadoMaior = document.getElementById("resultadoMaior");

  if (numeros3.length === 0) {
    resultadoMaior.innerHTML = "Nenhum número foi informado.";
    return;
  }

  const maior = Math.max(...numeros3);

  resultadoMaior.innerHTML = `
      <p>Números informados: ${numeros3.join(', ')}</p>
      <p>Quantidade de números: ${numeros3.length}</p>
      <p><strong>Maior número: ${maior}</strong></p>
      <button onclick="novoCalculo3()">Novo cálculo</button>
    `;
}

function novoCalculo3() {
  numeros3 = [];
  document.getElementById("resultadoMaior").innerHTML = "";
  document.getElementById("numeroInput3").value = "";
  document.getElementById("numeroInput3").focus();
}

// ___________________________________________________________________

// Funções questão 4

function calcularEquacao() {
  let numA = Number(document.getElementById("valorA").value);
  let numB = Number(document.getElementById("valorB").value);
  let numC = Number(document.getElementById("valorC").value);

  let resultadoDiv = document.querySelector("#resolucao4");
  resultadoDiv.innerHTML = ""; //Apaga o resultado anterior

  if (numA === 0 && numB === 0 && numC === 0) {
    resultadoDiv.innerHTML = "Igualdade confirmada: 0 = 0";
  }
  else if (numA === 0 && numB === 0 && numC !== 0) {
    resultadoDiv.innerHTML = "Coeficientes informados incorretamente";
  }
  else if (numA === 0 && numB !== 0) {
    let raiz = -numC / numB;
    resultadoDiv.innerHTML = `Esta é uma equação de primeiro grau: x = ${raiz}`;
  }
  else {
    let delta = (numB * numB) - (4 * numA * numC);
    if (delta < 0) {
      resultadoDiv.innerHTML = `Esta é uma equação de segundo grau.<br>
          Esta equação não possui raízes reais (delta < 0): delta = ${delta}`;
    }
    else if (delta === 0) {
      let x = -numB / (2 * numA);
      resultadoDiv.innerHTML = `Esta é uma equação de segundo grau.<br>
          Esta equação possui duas raízes reais iguais: x' = x'' = ${x}`;
    }
    else {
      let x1 = (-numB + Math.sqrt(delta)) / (2 * numA);
      let x2 = (-numB - Math.sqrt(delta)) / (2 * numA);
      // arredondar com 2 casas decimais
      resultadoDiv.innerHTML = `Esta é uma equação de segundo grau.<br>
          Esta equação possui duas raízes reais diferentes: delta = ${delta}, 
          x' = ${x1.toFixed(2)}, x'' = ${x2.toFixed(2)}`;
    }
  }
}
function limparCampos() {
  document.getElementById("valorA").value = "";
  document.getElementById("valorB").value = "";
  document.getElementById("valorC").value = "";
  document.getElementById("resolucao4").innerHTML = "";
}
