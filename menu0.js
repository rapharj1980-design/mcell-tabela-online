// Exemplo de interatividade simples: log de cliques para análise
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        console.log(`O usuário está navegando para: ${e.target.href}`);
    });
});

// Função para destacar o link da página atual no menu
window.onload = () => {
    const currentUrl = window.location.href;
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        if (link.href === currentUrl) {
            link.style.borderBottom = "2px solid #fff";
        }
    });
};
