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

