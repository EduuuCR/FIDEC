const Contact = require("../models/contactModel");

exports.sendContactForm = async (req, res) => {
    try {
        const { name, email, service } = req.body;

        if (!name || !email || !service) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
        }

        const newContact = new Contact({ name, email, service });
        await newContact.save(); // Salva no banco (se estiver usando um)

        res.status(200).json({ message: "Contato enviado com sucesso!" });
    } catch (error) {
        console.error("Erro ao enviar contato:", error);
        res.status(500).json({ error: "Erro interno no servidor." });
    }
};
