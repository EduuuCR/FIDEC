const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Criar um novo usuário
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Verificar se o usuário já existe
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "Usuário já existe" });
        }

        // Hash da senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Criar novo usuário
        user = new User({ name, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: "Usuário registrado com sucesso" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao registrar usuário", error });
    }
};

// Login do usuário
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verificar se o usuário existe
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Usuário não encontrado" });
        }

        // Comparar senha
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Credenciais inválidas" });
        }

        // Gerar token JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Login realizado com sucesso", token });
    } catch (error) {
        res.status(500).json({ message: "Erro ao fazer login", error });
    }
};

// Obter perfil do usuário autenticado
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password"); // Removendo a senha da resposta
        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar perfil", error });
    }
};
