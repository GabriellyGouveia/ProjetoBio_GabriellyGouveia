// garantindo que o JS só rode depois que a página HTML carregar toda
document.addEventListener("DOMContentLoaded", function () {
  // 1. pegando o ano atual pro rodapé (pra não precisar mudar na mão todo ano)
  const spanAno = document.getElementById("ano-atual");
  if (spanAno) {
    spanAno.textContent = new Date().getFullYear();
  }

  // 2. A validação manual do formulário pelo JS foi REMOVIDA!
  // Agora o HTML (tag 'required') faz a validação e o FormSubmit faz o envio real.

  // 3. lógica das setinhas do carrossel de projetos (interação extra exigida)
  const btnProximo = document.getElementById("btn-prox");
  const btnAnterior = document.getElementById("btn-ant");
  const containerProjetos = document.querySelector(".projetos-container");

  if (btnProximo && containerProjetos) {
    btnProximo.addEventListener("click", function () {
      containerProjetos.scrollBy({ left: 300, behavior: "smooth" }); // rola 300px pra direita
    });
  }

  if (btnAnterior && containerProjetos) {
    btnAnterior.addEventListener("click", function () {
      containerProjetos.scrollBy({ left: -300, behavior: "smooth" }); // rola 300px pra esquerda
    });
  }

  // 4. fazendo o menu hamburguer abrir e fechar no mobile
  const btnHamburguer = document.getElementById("menu-hamburguer");
  const menuNav = document.getElementById("nav-menu");

  if (btnHamburguer && menuNav) {
    btnHamburguer.addEventListener("click", function () {
      // se tiver a classe 'ativo', ele tira. se não tiver, ele bota.
      menuNav.classList.toggle("ativo");
    });
  }
});