import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  userId: string;
  username: string;
  roles: string[];
  accessToken: string;
}

interface LoginState {
  auth: string;
  loginedUser: User | null;
  login: (credentials: { username: string; password: string }) => Promise<boolean>;
  logout: () => void;
  reset: () => void;
  setLoginData: (user: User) => void;
}

const dummyLoginAPI = (credentials: { username: string; password: string }) => {
  return new Promise<{ data: User }>((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.username === "admin123" &&
        credentials.password === "admin123"
      ) {
        resolve({
          data: {
            userId: "user-001",
            username: "admin@watco.com",
            roles: ["Admin"],
            accessToken: "dummy-token-123456",
          },
        });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
};

const useLoginStore = create<LoginState>()(
  persist(
    (set) => ({
      auth: "",
      loginedUser: null,

      setLoginData: (user) =>
        set({
          loginedUser: user,
          auth: user.accessToken,
        }),

      login: async (credentials) => {
        try {
          const res = await dummyLoginAPI(credentials);
          const user = res.data;

          sessionStorage.setItem("token", user.accessToken);
          sessionStorage.setItem("user", JSON.stringify(user));
          sessionStorage.setItem("currentRole", JSON.stringify(user.roles[0]));

          set({
            loginedUser: user,
            auth: user.accessToken,
          });

          return true;
        } catch (error) {
          console.error("Login failed:", error);
          return false;
        }
      },

      logout: () => {
        sessionStorage.clear();
        set({ auth: "", loginedUser: null });
      },

      reset: () => {
        set({ auth: "", loginedUser: null });
      },
    }),
    {
      name: "login-store",
      storage: {
        getItem: (name) => {
          const item = sessionStorage.getItem(name);
          return item ? JSON.parse(item) : null;
        },
        setItem: (name, value) => {
          sessionStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          sessionStorage.removeItem(name);
        },
      },
      partialize: (state) => ({
        auth: state.auth,
        loginedUser: state.loginedUser,
        // These are required to satisfy the full `LoginState` interface
        login: async () => false,
        logout: () => {},
        reset: () => {},
        setLoginData: () => {},
      }),
    }
  )
);

export default useLoginStore;
