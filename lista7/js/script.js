//Funções questão 1

function calcularTroco() {
  const notas = [50, 20, 10, 5, 2, 1];

  const valorPago = parseFloat(document.getElementById("valorPago").value);
  const valorCompra = parseFloat(document.getElementById("valorCompra").value);

  if (valorPago < valorCompra) {
    //a máquina deve apresentar uma mensagem, informando que a quantia paga é insuficiente para realizar a compra.
    console.log("A quantia paga é insuficiente para realizar a compra!");
    return;
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
  const compra = parseInt(document.getElementById("compra").value);
  const pago = parseInt(document.getElementById("pago").value);

  if (isNaN(compra) || isNaN(pago)) {
    document.getElementById("saida").innerHTML = "Preencha os dois valores!";
    return;
  }

  const saida = calcularTroco(compra, pago)
  document.getElementById("saida").innerHTML = saida;
}

// ___________________________________________________________________

// Funções questão 2

function calcularMedia() {
  const resultadoMedia = document.getElementById("resultadoMedia");
  resultadoMedia.innerHTML = "Digite os numeros (digite 'fim' para finalizar):";
  let numeros = []
  function receberNumero() {
    const input = prompt("Digite um numero( Ou 'fim' para finalizar)");
    if (input === null || input.toLowerCase() === 'fim') {
      if (numeros.length === 0) {
        resultadoMedia.innerHTML = "Nenhum numero foi infomado.";
        return;
      }

      const soma = numeros.reduce((acc, num) => acc + num, 0);
      const media = soma / numeros.length;

      resultadoMedia.innerHTML = `
      <p>Números informados: ${numeros.join(', ')}</p>
      <p>Quantidade de números: ${numeros.length}</p>
      <p>Soma dos números: ${soma}</p>
      <p><strong>Média aritimética: ${media.toFixed(2)}</strong></p>
      `;
    }
    return;
  }
  const numero = parseFloat(input);
  if (isNaN(numero)) {
    alert("Por favor, digite um numero valido");
    receberNumero();
  } else {
    numeros.push(numero);
    receberNumero();
  }
  receberNumero();
}

// ___________________________________________________________________

// Funções questão 3

function calcularMaiorNumero() {
  const maiorNumero = document.getElementById("maiorNumero");
  maiorNumero.innerHTML = "Digite os numeros (digite 'fim' para finalizar)"

  let numeros = []

  function receberNumero() {
    const input = prompt("Digite um numero (ou 'fim' para finalizar)");
    if (input === null || input.toLowerCase() === 'fim') {
      if (numeros.length === 0) {
        maiorNumero.innerHTML("Nenhum numero foi informado");
        return;
      }
      const maior = Math.max(...numeros);

      maiorNumero.innerHTML = `
        <p>Números informados: ${numeros.join(', ')}</p>
        <p>Quantidade de números: ${numeros.length}</p>
        <p><strong>Maior número: ${maior}</strong></p>
        `;
      return;
    }

    const numero = parseFloat(input);
    if (isNaN(numero)) {
      alert("Por favor, digite um número válido.");
      receberNumero();
    } else {
      numeros.push(numero);
      receberNumero();
    }

  }
  receberNumero();
}

// ___________________________________________________________________

// Funções questão 4

function calcularEquacao() {
  let numA = Number(prompt("Digite o valor de A:"));
  let numB = Number(prompt("Digite o valor de B:"));
  let numC = Number(prompt("Digite o valor de C:"));

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
