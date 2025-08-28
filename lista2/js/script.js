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