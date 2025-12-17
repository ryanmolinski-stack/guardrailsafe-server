import bcrypt from "bcryptjs";

const users = [];

export async function registerUser({ email, password }) {
  const existing = users.find(u => u.email === email);
  if (existing) {
    throw new Error("User already exists");
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = {
    id: users.length + 1,
    email,
    password: hashed
  };

  users.push(user);

  return { id: user.id, email: user.email };
}

export async function loginUser({ email, password }) {
  const user = users.find(u => u.email === email);
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error("Invalid credentials");
  }

  return { id: user.id, email: user.email };
}