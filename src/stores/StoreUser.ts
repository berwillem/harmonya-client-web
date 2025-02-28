import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the user type
interface User {
  id: string;
  name: string;
  email: string;
}

// Define the store state and actions
interface AuthState {
  token: string | null;
  user: User | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

// Create the Zustand store with persistence
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null, // ✅ Ajout du token dans le state

      login: (user, token) => set({ user, token }), // ✅ Stocker le token séparément
      logout: () => set({ user: null, token: null }), // ✅ Supprimer le token à la déconnexion
    }),
    {
      name: "auth-storage", // Clé pour localStorage
    }
  )
);
