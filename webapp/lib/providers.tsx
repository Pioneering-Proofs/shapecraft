'use client';

import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { config } from "@/lib/wagmi";
import { productionNetworks } from "@/lib/networks";


export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {

  const queryClient = new QueryClient();

  const environmentId = process.env.NEXT_PUBLIC_DYNAMIC_ENV;
  if (!environmentId) {
    throw new Error("Missing NEXT_PUBLIC_DYNAMIC_ENV");
  }

  return (
    <DynamicContextProvider
      theme="auto"
      settings={{
        environmentId,
        walletConnectors: [EthereumWalletConnectors],
        overrides: {
          evmNetworks: productionNetworks,
        },
      }}
    >

      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>
            {children}
          </DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
}