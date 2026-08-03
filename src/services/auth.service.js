const bcrypt = require("bcrypt");
const {
    findUserByEmail,
    createUser,
} = require("../models/user.model");

async function registerUser(name, email, password) {

    // Check if user already exists
    const existingUser = await findUserByEmail(email);

    if (existingUser) {
        throw new Error("User already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const user = await createUser({
        name,
        email,
        password: hashedPassword,
    });

    return user;
}

module.exports = {
    registerUser,
};