import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from '../utils/nanoid.js';
import { hashPassword, verifyPassword } from '../utils/crypto.js';

const initialState = {
  isAuthenticated: false,
  currentUser: null,
  users: [],
};

export const useAuthStore = create(
  persist(
    (set, get) => ({
      ...initialState,
      register: async (payload) => {
        const users = get().users;
        const exists = users.some((user) => user.email === payload.email || user.username === payload.username);
        if (exists) {
          throw new Error('Bu e-posta veya kullanıcı adı ile kayıtlı bir kullanıcı mevcut.');
        }
        const newUser = {
          id: nanoid(),
          email: payload.email,
          username: payload.username,
          country: payload.country,
          age: payload.age,
          passwordHash: await hashPassword(payload.password),
          conversations: [],
          mediaLibrary: [],
        };
        set({ users: [...users, newUser], currentUser: newUser, isAuthenticated: true });
        return newUser;
      },
      login: async ({ identifier, password }) => {
        const users = get().users;
        const user = users.find((item) => item.email === identifier || item.username === identifier);
        if (!user) {
          throw new Error('Kullanıcı bulunamadı.');
        }
        const isValid = await verifyPassword(password, user.passwordHash);
        if (!isValid) {
          throw new Error('Şifre doğrulanamadı.');
        }
        set({ currentUser: user, isAuthenticated: true });
        return user;
      },
      logout: () => {
        set({ currentUser: null, isAuthenticated: false });
      },
      updateUser: (updates) => {
        const { currentUser, users } = get();
        if (!currentUser) return;
        const updatedUser = { ...currentUser, ...updates };
        set({
          currentUser: updatedUser,
          users: users.map((user) => (user.id === currentUser.id ? updatedUser : user)),
        });
      },
      resetPassword: async ({ identifier, password }) => {
        const users = get().users;
        const user = users.find((item) => item.email === identifier);
        if (!user) {
          throw new Error('Bu e-postaya ait hesap bulunamadı.');
        }
        const updatedUser = {
          ...user,
          passwordHash: await hashPassword(password),
        };
        set({
          users: users.map((item) => (item.id === user.id ? updatedUser : item)),
          currentUser: updatedUser,
          isAuthenticated: true,
        });
        return updatedUser;
      },
    }),
    {
      name: 'cortex-auth-store',
      partialize: (state) => ({ users: state.users, currentUser: state.currentUser, isAuthenticated: state.isAuthenticated }),
    },
  ),
);
