import React from "react";
import { useAuth } from "./context/AuthContext";

export default function HeaderMain() {
  const { user, setUser } = useAuth();
  console.log(user);
  return (
    <div className="p-4 bg-white shadow-md flex items-center justify-center">
      {user ? (
        <div className="flex items-center gap-x-3">
          <img
            src="https://images.unsplash.com/photo-1537799953412-cb36facf6e8d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-10 h-10 rounded-full object-cover"
            alt=""
          />
          <span className="text-sm font-mendium">
            Welcome back ! <strong>{user.fullname}</strong>
          </span>
        </div>
      ) : (
        <span className="text-sm font-medium">Welcome</span>
      )}
      <button
        className="p-2 rounded-lg bg-gray-300 text-black ml-auto"
        onClick={() => {
          setUser(null);
        }}
      >
        Sign-out
      </button>
    </div>
  );
}
