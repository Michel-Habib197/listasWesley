function calcularIdade() {
  // pega o ano de nascimento
  const anoNascimento = parseInt(document.getElementById("anoNascimento").value);

  // pega o ano atual direto do sistema
  const anoAtual = new Date().getFullYear();

  if (isNaN(anoNascimento)) {
    alert("Digite um ano de nascimento válido.");
    return;
  }

  // calcula as idades
  const idadeAtual = anoAtual - anoNascimento;
  const idadeEm2050 = 2050 - anoNascimento;

  // mostra na tela
  document.getElementById("idadeAtual").textContent = idadeAtual + " anos";
  document.getElementById("idade2050").textContent = idadeEm2050 + " anos";
}

function calcularNovoSalario(){
  //Calcula o salário atual
  const salarioAtual = parseFloat(document.getElementById("salarioAtual").value)

  //Pega o novo salário
  const novoSalario = salarioAtual + salarioAtual*0.25;

  //Mostra o novo salário na tela
  document.getElementById("novoSalario").textContent = novoSalario.toFixed(2) + "reais"
}

function converterCelsiusFahrenheit(){
  //Armazenar a temperatura em graus celsius
  const tempCel = parseFloat(document.getElementById("tempCel").value)

  //Converter graus celsius para fahrenheit
  const tempFahr = (tempCel*1.8) + 32

  //Aparecer a temperatura em Fahrenheit na tela
  document.getElementById("tempFahr").textContent = tempFahr.toFixed(0) + "°F"
}

function calcularMediaNotas(){
  //Pegar o valor das notas
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);

  //Calcular media
  mediaNotas = (nota1 + nota2 + nota3)/3;

  //Mostrar a média das notas na tela
  document.getElementById("mediaNotas").textContent = mediaNotas.toFixed(1);
}

function calcularHipotenusa(){
  //Pegar a medida dos catetos
  const cateto1 = parseFloat(document.getElementById("cateto1").value);
  const cateto2 = parseFloat(document.getElementById("cateto2").value);

  //Calcular hipotenusa
  quadradoHipo = Math.pow(cateto1, 2) + Math.pow(cateto2, 2)
  hipotenusa = Math.sqrt(quadradoHipo)

  //Mostrar a medida da hipotenusa na tela
  document.getElementById("hipotenusa").textContent = hipotenusa.toFixed(1)
}