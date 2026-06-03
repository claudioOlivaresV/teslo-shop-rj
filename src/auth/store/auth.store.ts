import type { User } from "@/interfaces/user.interface";
import { create } from "zustand";
import { loginAction } from "../actions/login.action";
import { checkAuth } from "../actions/check-auth.action";
import { RegisterAction } from "../actions/register.action";

type AuthStatus = "authenticated" | "not-authenticated" | "checking";

type AuthState = {
  user: User | null;
  token: string | null;
  authStatus: AuthStatus;

  isAdmin: () => boolean;

  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (
    email: string,
    password: string,
    fullName: string,
  ) => Promise<boolean>;
  checkAuthStatus: () => Promise<boolean>;
};

export const useAuthStore = create<AuthState>()((set, get) => ({
  user: null,
  token: null,
  authStatus: "checking",

  login: async (email, password) => {
    try {
      const data = await loginAction(email, password);
      console.log({ data });
      set({ user: data.user, token: data.token, authStatus: "authenticated" });
      localStorage.setItem("token", data.token);
      return true;
    } catch (error) {
      localStorage.removeItem("token");
      set({ user: null, token: null, authStatus: "not-authenticated" });
      console.error({ error });
      return false;
    }
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null, authStatus: "not-authenticated" });
  },
  checkAuthStatus: async () => {
    try {
      const { user, token } = await checkAuth();
      set({ user, token, authStatus: "authenticated" });
      return true;
    } catch (error) {
      console.log(error);

      set({ user: null, token: null, authStatus: "not-authenticated" });
      return false;
    }
  },
  // getters
  isAdmin: () => {
    const roles = get().user?.roles || [];
    return roles.includes("admin");
  },
  register: async (email, password, fullName) => {
    try {
      const data = await RegisterAction(email, password, fullName);
      console.log({ data });
      set({ user: data.user, token: data.token, authStatus: "authenticated" });
      localStorage.setItem("token", data.token);
      return true;
    } catch (error) {
      localStorage.removeItem("token");
      set({ user: null, token: null, authStatus: "not-authenticated" });
      console.error({ error });
      return false;
    }
  },
}));
