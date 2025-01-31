document.addEventListener("DOMContentLoaded", () => {
    // Scroll suave ao clicar nos links do menu
    document.querySelectorAll(".smooth-scroll").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Validação do formulário de contato
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        if (name === "" || email === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }
        alert("Formulário enviado com sucesso!");
        this.reset();
    });

    // Botão Voltar ao Topo
    const backToTop = document.getElementById("back-to-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

});
