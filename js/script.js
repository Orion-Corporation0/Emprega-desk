function confirmarSaida(event) {
    // Evita que o link redirecione imediatamente
    event.preventDefault(); 
    
    // Exibe a caixa de confirmação padrão do navegador
    const usuarioQuerSair = confirm("Tem certeza que deseja sair?");
    
    // Se o usuário clicar em "OK", ele é redirecionado
    if (usuarioQuerSair) {
        // Substitua pelo caminho correto do seu arquivo de login
        window.location.href = "../paginas-login/login.html"; 
    }
}