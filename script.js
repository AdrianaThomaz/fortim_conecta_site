// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    console.log("Fortim Conecta carregado com sucesso!");

    // 1. Efeito de boas-vindas no botão
    const btnSaibaMais = document.querySelector('button');
    if (btnSaibaMais) {
        btnSaibaMais.addEventListener('click', () => {
            alert('Obrigado pelo interesse! Em breve teremos um guia completo sobre as praias de Fortim.');
        });
    }

    // 2. Mudança de cor no menu ao rolar a página
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = '#00264d'; // Escurece o azul ao rolar
            nav.style.transition = '0.4s';
        } else {
            nav.style.backgroundColor = '#003a6b';
        }
    });

    // 3. Simulação de carregamento de dados (Ex: Clima de Fortim)
    const container = document.querySelector('.container');
    const climaInfo = document.createElement('p');
    climaInfo.style.marginTop = '20px';
    climaInfo.style.fontWeight = 'bold';
    climaInfo.style.color = '#0078d4';
    climaInfo.innerHTML = "🌤️ Clima em Fortim: 29°C - Perfeito para uma praia!";
    container.appendChild(climaInfo);
});
