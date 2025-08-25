// Toggle acessibilidade
const botaoAcessibilidade = document.getElementById("botao-acessibilidade");
const opcoes = document.getElementById("opcoes-acessibilidade");

botaoAcessibilidade.addEventListener("click", () => {
  opcoes.classList.toggle("d-none");
  const expanded = botaoAcessibilidade.getAttribute("aria-expanded") === "true";
  botaoAcessibilidade.setAttribute("aria-expanded", !expanded);
});

// Aumentar e diminuir fonte
const aumentar = document.getElementById("aumentar-fonte");
const diminuir = document.getElementById("diminuir-fonte");
let tamanho = 100;

aumentar.addEventListener("click", () => {
  tamanho += 10;
  document.body.style.fontSize = `${tamanho}%`;
});

diminuir.addEventListener("click", () => {
  if (tamanho > 70) {
    tamanho -= 10;
    document.body.style.fontSize = `${tamanho}%`;
  }
});
