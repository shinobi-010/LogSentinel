const db = require('../database');
const { userTable } = require('../database/schema/user.schema');
const { eq } = require('drizzle-orm');

async function findUserByEmail(email) {
  const result = await db
    .select()
    .from(userTable)
    .where(eq(userTable.email, email));
  return result[0];
}

async function createUser(user) {
  const result = await db
    .insert(userTable)
    .values(user)
    .returning();
  return result[0];
}

async function findUserById(id) {
  const result = await db
    .select()
    .from(userTable)
    .where(eq(userTable.id, id));
  return result[0];
}

async function updateUser(id, data) {
  const result = await db
    .update(userTable)
    .set(data)
    .where(eq(userTable.id, id))
    .returning();
  return result[0];
}

async function deleteUser(id) {
  const result = await db
    .delete(userTable)
    .where(eq(userTable.id, id))
    .returning();
  return result[0];
}

module.exports = {
  findUserByEmail,
  createUser,
  findUserById,
  updateUser,
  deleteUser,
};