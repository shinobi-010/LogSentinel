const { pgTable, integer, varchar } = require("drizzle-orm/pg-core");

const userTable = pgTable("user", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 240 }).notNull(),
  email: varchar({ length: 240 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
});

module.exports = {
  userTable,
};