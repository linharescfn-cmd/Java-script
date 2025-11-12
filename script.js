function inicio() {
    let nome = prompt("Qual é o seu nome?");
    let idade = prompt("Quantos anos você tem?");
    let interesse = prompt("Qual é o seu interesse principal? (ex: Tecnologia, Design, Marketing...)");
    let resposta = document.getElementById("resultado");
  
    resposta.innerHTML = `
      <p>Seja bem-vindo(a), <strong>${nome}</strong>! Que legal ter você por aqui.</p>
      <p>Com seus <strong>${idade}</strong> anos e seu interesse em <strong>${interesse}</strong>, temos certeza de que vai gostar do nosso conteúdo.</p>
      <p>Explore o site!</p>
    `;
  }
  
  function limparResultado() {
    let resposta = document.getElementById("resultado");
    resposta.innerHTML = "<p>Aguardando sua interação...</p>";
  }