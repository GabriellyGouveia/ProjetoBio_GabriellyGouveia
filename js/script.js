// garantindo que o JS só rode depois que a página HTML carregar toda
document.addEventListener("DOMContentLoaded", function () {
  // 1. pegando o ano atual pro rodapé (pra não precisar mudar na mão todo ano)
  const spanAno = document.getElementById("ano-atual");

  // verifica se o elemento existe na página antes de usar
  if (spanAno) {
    // insere automaticamente o ano atual
    spanAno.textContent = new Date().getFullYear();
  }

  // 2. lógica das setinhas do carrossel de projetos
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

  // 3. menu hamburguer (mobile)
  const btnHamburguer = document.getElementById("menu-hamburguer");
  const menuNav = document.getElementById("nav-menu");

  if (btnHamburguer && menuNav) {
    btnHamburguer.addEventListener("click", function () {
      // adiciona ou remove a classe "ativo"
      // isso controla se o menu aparece ou não no CSS
      menuNav.classList.toggle("ativo");
    });
  }

  //4. validação personalizada do formulário antes do envio

// pega o formulário de contato
const formulario = document.getElementById("form-contato");

// verifica se o formulário existe na página
if (formulario) {

  // adiciona um evento quando o usuário tenta enviar
  formulario.addEventListener("submit", function (evento) {

    // pega os valores digitados
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    // --- Validação 1: nome mínimo ---
    // remove espaços e verifica se tem pelo menos 3 caracteres
    if (nome.trim().length < 3) {

      // impede o envio do formulário
      evento.preventDefault();

      // mostra aviso pro usuário
      alert("Opa! Por favor, digite um nome com pelo menos 3 letras.");
      // para o código aqui
      return;
    }
    // --- Validação 2: tamanho da mensagem ---
    if (mensagem.trim().length < 2) {

      // impede o envio
      evento.preventDefault();

      // aviso 
      alert("Sua mensagem está muito curtinha. Escreva um pouco mais para mim!");
      return;
    }
    // se passar nas validações:
    // o JS não interfere e o FormSubmit faz o envio normalmente
  });
}
});