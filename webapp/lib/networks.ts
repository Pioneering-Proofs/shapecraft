import { type Chain } from "viem";

export const productionNetworks = [
  {
    blockExplorerUrls: ["https://shapescan.xyz/"],
    chainId: 360,
    chainName: "Shape Network",
    iconUrls: ["https://shapescan.xyz/assets/configs/network_icon_dark.svg"],
    name: "Ethereum",
    nativeCurrency: {
      decimals: 18,
      name: "Ether",
      symbol: "ETH",
    },
    networkId: 360,

    rpcUrls: [
      "https://mainnet.shape.network",
      "https://shape-mainnet.g.alchemy.com/public",
    ],
    vanityName: "Shape Mainnet",
  },
];

export const testnetNetworks = [
  {
    blockExplorerUrls: ["https://explorer-sepolia.shape.network"],
    chainId: 11011,
    chainName: "Shape Sepolia",
    iconUrls: ["https://shapescan.xyz/assets/configs/network_icon_dark.svg"],
    name: "Ethereum",
    nativeCurrency: {
      decimals: 18,
      name: "Ether",
      symbol: "ETH",
    },
    networkId: 11011,

    rpcUrls: ["https://sepolia.shape.network"],
    vanityName: "Shape Sepolia",
  },
];

export const networkConfigs = () => {
  // TODO: Add local development networks
  if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production") {
    return productionNetworks;
  } else if (process.env.NEXT_PUBLIC_ENVIRONMENT === "staging") {
    return testnetNetworks;
  } else if (process.env.NEXT_PUBLIC_ENVIRONMENT === "development") {
    return productionNetworks;
  } else {
    return productionNetworks;
  }
};

export const shapeMainnet = {
  id: 360,
  name: "Shape Network",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://mainnet.shape.network"] },
  },
  blockExplorers: {
    default: { name: "ShapeScan", url: "https://shapescan.xyz" },
  },
  testnet: false,
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
} as const satisfies Chain;

export const shapeSepolia = {
  id: 11011,
  name: "Shape Sepolia",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://sepolia.shape.network"] },
  },
  blockExplorers: {
    default: { name: "ShapeScan", url: "https://explorer-sepolia.shape.network" },
  },
  testnet: true,
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
} as const satisfies Chain;
