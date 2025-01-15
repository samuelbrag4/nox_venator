window.onload = function() {
    const errorSection = document.querySelector('.section-error');
    const imageContainer = document.querySelector('.container-img');
    const images = document.querySelectorAll('.container-img img');
    
    // Esconde as imagens inicialmente
    imageContainer.style.display = 'none';

    // Exibe a frase
    errorSection.style.display = 'block';

    // Após 3 segundos, esconde a frase e exibe as imagens
    setTimeout(function() {
        errorSection.style.display = 'none';  // Esconde a frase
        imageContainer.style.display = 'flex';  // Exibe o container de imagens

        // Agora, adiciona a classe 'visible' nas imagens para elas aparecerem
        images.forEach((img, index) => {
            setTimeout(() => {
                img.classList.add('visible');
            }, index * 500);  // Cada imagem aparece com um pequeno delay
        });
    }, 3000); // 3 segundos de delay
};
