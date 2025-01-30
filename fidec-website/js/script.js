document.addEventListener("DOMContentLoaded", () => {
    // Rolagem suave ao clicar nos links do menu
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // Formulário de contato - Exemplo de validação básica
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const service = document.querySelector("#service").value;
            
            if (name === "" || email === "" || service === "") {
                alert("Por favor, preencha todos os campos!");
                return;
            }
            alert("Formulário enviado com sucesso!");
            form.reset();
        });
    }
});
