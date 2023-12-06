import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState({
    userId: 1,
    fullname: "DangQuocThanh",
    email: "dangquocthanh@gmail.com",
    Avatar:"https://images.unsplash.com/photo-1537799953412-cb36facf6e8d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  });
  const value = {user, setUser};
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined") {
    Error("useAuth must be use within a Provider");
  }
  return context;
}

export { useAuth, AuthProvider };
