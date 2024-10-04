// Função para verificar se o elemento está visível na tela
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para adicionar a classe 'visible' aos elementos visíveis
function showVisibleElements() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('visible');
        }
    });
}

// Executar a função quando a página rolar
window.addEventListener('scroll', showVisibleElements);

// Executar na inicialização da página para verificar elementos visíveis
window.addEventListener('load', showVisibleElements);
