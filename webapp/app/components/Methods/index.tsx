'use client';
import { useState, useEffect, useCallback } from 'react';
import { useDynamicContext, useIsLoggedIn, useUserWallets, Wallet } from "@dynamic-labs/sdk-react-core";
import { isEthereumWallet } from '@dynamic-labs/ethereum'
// import {
//   useSendTransaction,
//   useWaitForTransactionReceipt,
// } from "@permissionless/wagmi";
import { getOrMapViemChain } from "@dynamic-labs/ethereum-core";
import { useClient, useWalletClient } from 'wagmi'

import './Methods.css';
// import { toSafeSmartAccount } from 'permissionless/accounts';
// import { EntryPointAddress } from '@/lib/constants';
import { getPimlicoSmartAccountClient } from '@/lib/safe';

export default function DynamicMethods({ isDarkMode }: { isDarkMode: boolean }) {
  const isLoggedIn = useIsLoggedIn();
  const { sdkHasLoaded, primaryWallet, user } = useDynamicContext();
  // const client = usePublicClient()
  const client = useClient();
  const walletClient = useWalletClient();
  const userWallets = useUserWallets();
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [safeAddress, setSafeAddress] = useState(null);
  const [safeDeployed, setSafeDeployed] = useState(false);

  const handleDeploySafe = async () => {
    setLoading(true);
    setError(null);

    try {
      if(!primaryWallet) {
        setError("No wallet found");
        return;
      };

      if (!process.env.NEXT_PUBLIC_PIMLICO_API_KEY) {
        console.error("Please set NEXT_PUBLIC_PIMLICO_API_KEY in .env file and restart");
        return;
      }

      const { account } = await getPimlicoSmartAccountClient(primaryWallet);
      setSafeAddress(account.address);
      setSafeDeployed(true);
    } catch (err) {
      setError("Failed to deploy Safe account.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const safeStringify = (obj: any) => {
    const seen = new WeakSet();
    return JSON.stringify(obj, (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return '[Circular]';
        }
        seen.add(value);
      }
      return value;
    }, 2);
  };

  useEffect(() => {
    if (sdkHasLoaded && isLoggedIn && primaryWallet) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [sdkHasLoaded, isLoggedIn, primaryWallet]);

  function clearResult() {
    setResult('');
  }

  function showUser() {
    setResult(safeStringify(user));
  }

  function showUserWallets() {
    setResult(safeStringify(userWallets));
  }


  async function fetchPublicClient() {
    if (!primaryWallet || !isEthereumWallet(primaryWallet)) return;

    const publicClient = await primaryWallet.getPublicClient();
    setResult(safeStringify(publicClient));
  }

  async function fetchWalletClient() {
    if (!primaryWallet || !isEthereumWallet(primaryWallet)) return;

    const walletClient = await primaryWallet.getWalletClient();
    setResult(safeStringify(walletClient));
  }

  async function signEthereumMessage() {
    if (!primaryWallet || !isEthereumWallet(primaryWallet)) return;

    const signature = await primaryWallet.signMessage("Hello World");
    setResult(signature);
  }



  return (
    <>
      {!isLoading && (
        <div className="dynamic-methods" data-theme={isDarkMode ? 'dark' : 'light'}>
          <div className="methods-container">
            <button className="btn btn-primary" onClick={showUser}>Fetch User</button>
            <button className="btn btn-primary" onClick={showUserWallets}>Fetch User Wallets</button>


            {primaryWallet && isEthereumWallet(primaryWallet) &&
              <>
                <button className="btn btn-primary" onClick={fetchPublicClient}>Fetch Public Client</button>
                <button className="btn btn-primary" onClick={fetchWalletClient}>Fetch Wallet Client</button>
                <button className="btn btn-primary" onClick={signEthereumMessage}>Sign &quot;Hello World&quot; on Ethereum</button>
                <button className="btn btn-primary" onClick={handleDeploySafe}>Create Safe Account</button>
              </>
            }

          </div>
          {result && (
            <div className="results-container">
              <pre className="results-text">{result}</pre>
            </div>
          )}
          {result && (
            <div className="clear-container">
              <button className="btn btn-primary" onClick={clearResult}>Clear</button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
