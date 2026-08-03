require('dotenv').config();
const { defineConfig } = require("drizzle-kit");

const config = defineConfig({
  dialect: "postgresql",
  out: "./src/database/migrations",
  schema: "./src/database/schema/user.schema.js",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});

module.exports = config;
