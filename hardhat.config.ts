import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ignition";
import "@nomicfoundation/hardhat-ignition-ethers";
import "hardhat-deploy";
import { HttpNetworkAccountsUserConfig, NetworkUserConfig } from "hardhat/types";
import dotenv from "dotenv";

dotenv.config();

import "./tasks";

const privateKey = process.env.PRIVATE_KEY;
const mnemonic = process.env.MNEMONIC;

const getAccounts = (networkName: string): HttpNetworkAccountsUserConfig => {
  if (networkName) {
    const envVar = `${networkName.replaceAll("-", "_").toUpperCase()}_MNEMONIC`;
    if (process.env[envVar]) {
      return {
        mnemonic: process.env[envVar],
        count: 10,
        path: "m/44'/60'/0'/0",
      };
    }
  }
  if (privateKey) {
    // can add as many private keys as you want
    return [
      `0x${privateKey}`,
    ];
  } else if (mnemonic) {
    return {
      mnemonic,
      count: 10,
      path: "m/44'/60'/0'/0",
    };
  } else {
    throw new Error("No private key or mnemonic found in env");
  }
};

function getAllNetworkConfigs(): Record<string, NetworkUserConfig> {
  const networks: Record<string, NetworkUserConfig> = {
    shape: {
      url: "https://mainnet.shape.network",
      chainId: 360,
      accounts: getAccounts("shape"),
    },
  };
  return networks;
}

const config: HardhatUserConfig = {
  solidity: "0.8.26",
  defaultNetwork: "shape",
  networks: {
    ...getAllNetworkConfigs(),
  },
  namedAccounts: {
    otomToken: {
      shape: "0x2f9810789aebBB6cdC6c0332948fF3B6D11121E3"
    },
    otomEncoder: {
      shape: "0x624c7801C48046B4477aEbE2F128F09d4263288C"
    },
    otomAnnihilator: {
      shape: "0xca3088aedaAB138cAB3F0c135ceD77aF1a8b9063"
    },
    otomEnergy: {
      shape: "0x42276dF82BAb34c3CCcA9e5c058b6ff7EA4d07e3"
    },
  },
};

export default config;
