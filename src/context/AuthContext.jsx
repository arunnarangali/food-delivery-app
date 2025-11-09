import { createContext, useState } from "react";
import { MOCK_USERS } from "../data/mockData";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(!!user);
  const [isLoading, setIsLoading] = useState(false);

  const simulateAPICall = (duration = 500) =>
    new Promise((resolve) => setTimeout(resolve, duration));

  const login = async (email, password) => {
    try {
      setIsLoading(true);

      await simulateAPICall();

      if (!email || !password) {
        throw new Error("Email and password are required");
      }

      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }

      const foundUser = MOCK_USERS.find(
        (u) => u.email === email && u.password === password
      );

      if (!foundUser) {
        throw new Error("Invalid email or password");
      }

      const userSession = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
      };

      setUser(userSession);
      setIsAuthenticated(true);
      localStorage.setItem("user", JSON.stringify(userSession));

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name, email, password) => {
    try {
      setIsLoading(true);
      await simulateAPICall();
      const existingUser = MOCK_USERS.find((u) => u.email === email);
      if (existingUser) {
        throw new Error("User with this email already exists");
      }

      const newUser = {
        id: Date.now(),
        email,
        name,
      };

      MOCK_USERS.push({ ...newUser, password });

      const userSession = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
      };

      setUser(userSession);
      setIsAuthenticated(true);
      localStorage.setItem("user", JSON.stringify(userSession));

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.clear();
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
