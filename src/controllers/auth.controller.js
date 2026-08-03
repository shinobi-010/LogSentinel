const { registerUser } = require("../services/auth.service");

async function register(req, res) {

    try {

        const { name, email, password } = req.body;

        const user = await registerUser(
            name,
            email,
            password
        );

        res.status(201).json(user);

    } catch (err) {

        res.status(400).json({
            message: err.message,
        });

    }

}

module.exports = {
    register,
};