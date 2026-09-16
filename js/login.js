const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const cnpj = document.getElementById("cnpj").value;
    const senha = document.getElementById("senha").value;

    if (cnpj === "" || senha === "") {

        alert("Preencha o CNPJ e a senha.");

        return;
    }

    alert("Login realizado com sucesso!");

    window.location.href = "inicio.html";

});


document.addEventListener('DOMContentLoaded', function() {
    
   
    const botoesTipo = document.querySelectorAll('.tipo');

    botoesTipo.forEach(function(botao) {
        botao.addEventListener('click', function() {
            

            botoesTipo.forEach(function(b) {
                b.classList.remove('selecionado');
            });

      
            this.classList.add('selecionado');
        });
    });
});