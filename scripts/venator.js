// Dados dos cards: nome e senha
const cardsData = [
  { name: "Card 1", password: "senhaCard1" },
  { name: "Card 2", password: "senhaCard2" },
  { name: "Card 3", password: "senhaCard3" },
  { name: "Card 4", password: "senhaCard4" },
  { name: "Card 5", password: "senhaCard5" },
  { name: "Card 6", password: "senhaCard6" },
  { name: "Card 7", password: "senhaCard7" },
  { name: "Card 8", password: "senhaCard8" },
  { name: "Card 9", password: "senhaCard9" },
  { name: "Card 10", password: "senhaCard10" },
  { name: "Card 11", password: "senhaCard11" },
  { name: "Card 12", password: "senhaCard12" },
  { name: "Card 13", password: "senhaCard13" },
  { name: "Card 14", password: "senhaCard14" },
  { name: "Card 15", password: "senhaCard15" },
  { name: "Card 16", password: "senhaCard16" },
  { name: "Card 17", password: "senhaCard17" },
  { name: "Card 18", password: "senhaCard18" },
];

// Seleciona o container dos cards
const cardContainer = document.querySelector(".card-container");

// Gera os cards dinamicamente
cardsData.forEach((cardData, index) => {
  // Cria o elemento do card
  const card = document.createElement("div");
  card.className = "card";

  // Adiciona o conteúdo do card
  card.innerHTML = `
    <h2>${cardData.name}</h2>
    <input type="text" placeholder="Seu Nome">
    <input type="password" placeholder="Senha">
    <button onclick="checkPassword(${index}, this)">Verificar</button>
    <div class="message"></div>
  `;

  // Adiciona o card ao container
  cardContainer.appendChild(card);
});

// Função para verificar a senha
function checkPassword(cardIndex, button) {
  const card = button.parentElement; // Card atual
  const passwordInput = card.querySelector("input[type='password']").value;
  const messageDiv = card.querySelector(".message");

  // Verifica se a senha está correta
  if (passwordInput === cardsData[cardIndex].password) {
    // Redireciona para o arquivo correspondente na pasta "cards-pages"
    window.location.href = `cards-pages/${cardIndex + 1}.html`;
  } else {
    messageDiv.textContent = "Senha incorreta!";
    messageDiv.style.color = "red";
  }
}
