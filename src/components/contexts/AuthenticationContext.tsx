import { getSelf, invalidateToken } from "@/lib/api/auth/General";
import logIn from "@/lib/api/auth/LogIn";
import Register from "@/lib/api/auth/Register";
import { LoginRequest, RegisterRequest, User } from "@/lib/types";
import { createContext, useContext, useState } from "react";
import { toast } from "sonner";

interface AuthenticationContextType {
  user: User | null;
  login: (data: LoginRequest) => void;
  logout: () => void;
  register: (data: RegisterRequest) => void;
  setUser: (user: User | null) => void;
}
const AuthenticationContext = createContext<AuthenticationContextType>({
  user: null,
  login: (data: LoginRequest) => {
    console.log(data);
  },
  logout: () => {
    invalidateToken()
  },
  register: (data: RegisterRequest) => {
    console.log(data);
  },
  setUser: (user: User | null) => {
    console.log(user);
  }
});
export const AuthenticationProvider: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    
  
  async function login(data: LoginRequest) {
    const res = await logIn(data);
    if (res) {
      const self = await getSelf()
      setUser(self);
      window.location.href = ("/");
      }
      else toast("Check your credentials")
    }
    async function register(data: RegisterRequest) {
      const res = await Register(data);
      if (res) {
        const self =  await getSelf()
        setUser(self)
      window.location.href = ("/");
    }
  }

  async function logout() {
    await invalidateToken()
    setUser(null);
    localStorage.removeItem("user");
    window.location.href = ("/auth");
  }
  return (
    <AuthenticationContext.Provider value={{ user, login, logout, register, setUser }}>
        {children}
    </AuthenticationContext.Provider>
  )
};

export const useAuthentication = () => {
  return useContext(AuthenticationContext);
};
