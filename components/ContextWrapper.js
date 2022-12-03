import DarkContext from "../context/DarkContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import React from "react";

function ContextWrapper({ children }) {
  const router = useRouter();
  const [currentAccount, setCurrentAccount] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);

  const checkIfWalletIsConnect = async () => {
    if (!window.ethereum) return alert("Please install MetaMask.");
    try {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        setCurrentAccount(null)
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) return alert("Please install MetaMask.");
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error("No window.ethereum object");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
  });
  return (
    <DarkContext.Provider value={{ currentAccount, connectWallet, checkIfWalletIsConnect }}>
      {children}
    </DarkContext.Provider>
  );
}

export default ContextWrapper;
