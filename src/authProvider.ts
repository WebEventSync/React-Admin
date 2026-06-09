import { AuthProvider, HttpError } from "react-admin";

const API_URL = "http://localhost:3000/api/auth";

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email: username, password }),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new HttpError(data.error || "Unauthorized", response.status);
    }

    return Promise.resolve();
  },

  logout: async () => {
    await fetch(`${API_URL}/logout`, {
      method: "POST",
      credentials: "include",
    });
    return Promise.resolve();
  },

  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      return Promise.reject();
    }
    return Promise.resolve();
  },

  checkAuth: async () => {
    const response = await fetch(`${API_URL}/me`, {
      credentials: "include",
    });
    if (!response.ok) return Promise.reject();
    return Promise.resolve();
  },

  getPermissions: () => Promise.resolve(undefined),

  getIdentity: async () => {
    const response = await fetch(`${API_URL}/me`, {
      credentials: "include",
    });
    if (!response.ok) return Promise.reject();
    const data = await response.json();
    return Promise.resolve({
      id: data.user.id,
      fullName: data.user.email,
    });
  },
};

export default authProvider;