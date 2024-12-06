import { isEthereumWallet } from "@dynamic-labs/ethereum";
import { WalletClient, PublicClient, http, Chain, Client } from "viem";
import { createSmartAccountClient } from "permissionless";
// import { createPimlicoBundlerClient, createPimlicoPaymasterClient } from "permissionless/clients/pimlico";
import { toSafeSmartAccount } from "permissionless/accounts";
import { Wallet } from '@dynamic-labs/wallet-connector-core';
import { EntryPointAddress } from "./constants";

// const transportUrl = (chain: Chain) =>
//   `https://api.pimlico.io/v2/${chain.id}/rpc?apikey=${process.env.NEXT_PUBLIC_PIMLICO_API_KEY}`;

// export const pimlicoBundlerClient = (chain: Chain) =>
//     createPimlicoBundlerClient({
//     transport: http(transportUrl(chain)),
//     entryPoint: EntryPointAddress,
// });

// export const paymasterClient = (chain: Chain) =>
//   createPimlicoPaymasterClient({
//     transport: http(transportUrl(chain)),
//     entryPoint: EntryPointAddress,
// });

export const getPimlicoSmartAccountClient = async (
  wallet: Wallet
) => {
  if (!isEthereumWallet(wallet)) return;

//   const address = wallet.address as `0x${string}`;
  const publicClient = await wallet.getPublicClient();
  const walletClient = wallet.getWalletClient() as unknown as WalletClient;
  const chain = walletClient.chain;

  const safeSmartAccountClient = await toSafeSmartAccount({
    client: publicClient as Client,
    entryPoint: {
        address: EntryPointAddress,
        version: "0.7",
    },
    owners: [walletClient],
    // signer: signer,
    version: "1.4.1",
  });

  return createSmartAccountClient({
    account: safeSmartAccountClient,
    // entryPoint: {
    //     address: EntryPointAddress,
    //     version: "0.7",
    // },
    chain,
    bundlerTransport: http(),
    // middleware: {
    //   gasPrice: async () => (await pimlicoBundlerClient(chain).getUserOperationGasPrice()).fast, // use pimlico bundler to get gas prices
    //   sponsorUserOperation: paymasterClient(chain).sponsorUserOperation, // optional
    // },
  });
};
