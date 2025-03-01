"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface AuthContextType {
  isAuthenticated: boolean;
  token: string;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string>("");
  const router = useRouter();

  // useEffect(() => {
  //   const checkAuth = () => {
  //     const savedToken = localStorage.getItem("token");

  //     if (savedToken) {
  //       try {
  //         const payload = JSON.parse(atob(savedToken.split(".")[1]));
  //         const currentTime = Math.floor(Date.now() / 1000);

  //         if (payload.exp > currentTime) {
  //           setToken(savedToken);
  //         } else {
  //           localStorage.removeItem("token");
  //           setToken("");
  //           router.push("/auth/signin");
  //         }
  //       } catch (error) {
  //         console.error("Invalid token", error);
  //         localStorage.removeItem("token");
  //         setToken("");
  //         router.push("/auth/signin");
  //       }
  //     } else {
  //       setToken("");
  //       router.push("/auth/signin");
  //     }
  //   };

  //   if (typeof window !== "undefined") {
  //     checkAuth();
  //   }
  // }, [router]);

  const login = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    router.push("/auth/signin");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!token,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
