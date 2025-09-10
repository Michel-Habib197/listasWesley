function calcularTroco(){
     const notas = [50, 20, 10, 5, 2, 1];

    const valorPago = parseFloat(document.getElementById("valorPago").value);
    const valorCompra = parseFloat(document.getElementById("valorCompra").value);

    if(valorPago < valorCompra){
        //a máquina deve apresentar uma mensagem, informando que a quantia paga é insuficiente para realizar a compra.
        console.log("A quantia paga é insuficiente para realizar a compra!");
        return;
    }

      let troco = valorPago - valorCompra;
      resultado += `<p><strong>Troco: R$ ${troco},00</strong></p>`;

      for(let nota of notas){
        
      }



}