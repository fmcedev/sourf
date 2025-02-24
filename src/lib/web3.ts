declare global {
  interface Window {
    ethereum?: any;
  }
}

export const getEthereumProvider = () => {
  if (typeof window === "undefined") return null;
  try {
    // Check if ethereum exists without trying to modify it
    const provider = window.ethereum;
    return provider || null;
  } catch (e) {
    console.warn("Error accessing ethereum provider:", e);
    return null;
  }
};

export const isWeb3Available = () => {
  try {
    return !!getEthereumProvider();
  } catch (e) {
    return false;
  }
};

export const connectWallet = async () => {
  const provider = getEthereumProvider();
  if (!provider) return null;

  try {
    const accounts = await provider.request({ method: "eth_requestAccounts" });
    return accounts[0] || null;
  } catch (e) {
    console.error("Error connecting wallet:", e);
    return null;
  }
};
