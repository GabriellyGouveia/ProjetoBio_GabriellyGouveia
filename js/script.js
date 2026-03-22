// garantindo que o JS só rode depois que a página HTML carregar toda
document.addEventListener("DOMContentLoaded", function () {
  // 1. pegando o ano atual pro rodapé (pra não precisar mudar na mão todo ano)
  const spanAno = document.getElementById("ano-atual");

  // verifica se o elemento existe na página antes de usar
  if (spanAno) {
    // insere automaticamente o ano atual
    spanAno.textContent = new Date().getFullYear();
  }

  // 3. lógica das setinhas do carrossel de projetos
  const btnProximo = document.getElementById("btn-prox");
  const btnAnterior = document.getElementById("btn-ant");

  // container que guarda os projetos (onde acontece o scroll)
  const containerProjetos = document.querySelector(".projetos-container");

  // botão de avançar
  if (btnProximo && containerProjetos) {
    btnProximo.addEventListener("click", function () {
      // rola o container 300px pra direita com animação suave
      containerProjetos.scrollBy({ left: 300, behavior: "smooth" });
    });
  }

  // botão de voltar
  if (btnAnterior && containerProjetos) {
    btnAnterior.addEventListener("click", function () {
      // rola 300px pra esquerda
      containerProjetos.scrollBy({ left: -300, behavior: "smooth" });
    });
  }

  // 4. menu hamburguer (mobile)
  const btnHamburguer = document.getElementById("menu-hamburguer");
  const menuNav = document.getElementById("nav-menu");

  if (btnHamburguer && menuNav) {
    btnHamburguer.addEventListener("click", function () {
      // adiciona ou remove a classe "ativo"
      // isso controla se o menu aparece ou não no CSS
      menuNav.classList.toggle("ativo");
    });
  }
});