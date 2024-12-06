import { http, createConfig } from "wagmi";
// import { mainnet } from "wagmi/chains";
import { shapeMainnet } from "@/lib/networks";
import { createPimlicoClient } from "permissionless/clients/pimlico";
import { EntryPointAddress } from "./constants";

export const config = createConfig({
  chains: [shapeMainnet],
  multiInjectedProviderDiscovery: false,
  ssr: true,
  transports: {
    [shapeMainnet.id]: http(),
  },
});

const pimlicoApiKey = process.env.NEXT_PUBLIC_PIMLICO_API_KEY;

// const paymasterService = config.chains.map(chain => {
//   return {
//     [chain.id]: {
//       url: `https://api.pimlico.io/v2/${chain.id}/rpc?apikey=${pimlicoApiKey}`
//     }
//   }
// });

export const capabilities = {
  // paymasterService
};

// export const paymasterClient = createPimlicoClient({
// 	transport: http(`https://api.pimlico.io/v2/${shapeMainnet.id}/rpc?apikey=${pimlicoApiKey}`),
// 	entryPoint: {
// 		address: EntryPointAddress,
// 		version: "0.7",
// 	},
// });

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
