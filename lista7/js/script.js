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