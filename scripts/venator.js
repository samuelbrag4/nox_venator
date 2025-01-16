// Dados dos cards: nome e senha
const cardsData = [
  { name: "Mind", password: "Neural_Connector" },
  { name: "Intelligence", password: "75" },
  { name: "Port_5500", password: "The_Dark_Side" },
  { name: "Soundtrack", password: "Harmony808" },
  { name: "Sigils", password: "Voices" },
  { name: "The_Last_Home", password: "Acceptance" },
  { name: "The_Signs", password: "The_Unknown_Fate" },
  { name: "Son_of_Fear", password: "Son_of_Fear" },
  { name: "Enigma", password: "Scripts" },
  { name: "Laboratory?", password: "Shot_in_the_Shoulder" },
  { name: "Kidnapped", password: "floor3" },
  { name: "Objective", password: "what_you_know" },
  { name: "Foreigner", password: "The_city" },
  { name: "Memophilic", password: "Fummu" },
  { name: "FEARFEARFEAR", password: "blood_death_knowledge_energy" },
  { name: "Other_side", password: "You_will_come_back" },
  { name: "Admin", password: "12112112" },
  { name: "Foreigner", password: "We_are_all_one" }
];

// Array de nomes para os cards - você pode personalizar os nomes aqui
const cardNames = [
  "Characters", "Xeno", "Port 5500", "Sound Track", "Sigils",
  "The last home", "The signs", "Fear", "Enigma", "Chico",
  "Kidnapped", "Angel", "Our god", "others", "elements",
  "Salvation", "game settings", "Foreigner"
];

// Seleciona o container dos cards
const cardContainer = document.querySelector(".card-container");

// Gera os cards dinamicamente
cardsData.forEach((cardData, index) => {
  // Cria o elemento do card
  const card = document.createElement("div");
  card.className = "card";

  // Substitui o nome do card com base no array cardNames
  card.innerHTML = `
    <h2>${cardNames[index]}</h2>
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

  // Se a senha estiver incorreta
  if (passwordInput !== cardsData[cardIndex].password) {
    // Adiciona a animação de vibração
    card.classList.add("vibrate");

    messageDiv.textContent = "Senha incorreta!";
    messageDiv.style.color = "red";

    // Remove a animação de vibração após 1 segundo
    setTimeout(() => {
      card.classList.remove("vibrate");
    }, 1000); // O tempo de vibração pode ser ajustado aqui

  } else {
    // Se a senha estiver correta, redireciona para o arquivo correspondente na pasta "cards-pages"
    window.location.href = `cards-pages/${cardIndex + 1}.html`;
  }
}
