exports.getServices = (req, res) => {
    const services = [
        { category: "Design e Branding", items: ["Rebranding", "Manual de Marca", "Identidade Visual"] },
        { category: "Desenvolvimento Web", items: ["Sites", "Landing Pages", "Manutenção/Criação"] },
        { category: "Social Media e Marketing Digital", items: ["Gestão de Tráfego Pago", "Redes Sociais", "Chatbots"] },
        { category: "Parte Gráfica", items: ["Banner Digital", "Edição"] },
        { category: "Consultoria", items: ["Análise de Estratégias", "Suporte Técnico"] }
    ];
    
    res.json(services);
};
