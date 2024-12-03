import { http, createConfig } from "wagmi";
// import { mainnet } from "wagmi/chains";
import { shapeMainnet } from "@/lib/networks";

export const config = createConfig({
  chains: [shapeMainnet],
  multiInjectedProviderDiscovery: false,
  ssr: true,
  transports: {
    [shapeMainnet.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
