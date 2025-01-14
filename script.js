// Adiciona um ouvinte de evento para o formulário de login
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    // Obtém o valor da senha digitada pelo usuário
    const passwordInput = document.getElementById("password").value;
  
    // Define a senha correta
    const correctPassword = "12345";
  
    // Verifica se a senha está correta
    if (passwordInput === correctPassword) {
      // Redireciona para a página venator.html
      window.location.href = "venator.html";
    } else {
      // Adiciona a classe "error" ao body para exibir o tom vermelho
      document.body.classList.add("error");
  
      // Remove a classe "error" após 2 segundos
      setTimeout(() => {
        document.body.classList.remove("error");
      }, 2000);
    }
  });
  