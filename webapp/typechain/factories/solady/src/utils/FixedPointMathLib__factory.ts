/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  FixedPointMathLib,
  FixedPointMathLibInterface,
} from "../../../../solady/src/utils/FixedPointMathLib";

const _abi = [
  {
    inputs: [],
    name: "DivFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "DivWadFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "ExpOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "FactorialOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "FullMulDivFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "LnWadUndefined",
    type: "error",
  },
  {
    inputs: [],
    name: "MantissaOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "MulDivFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "MulWadFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "OutOfDomain",
    type: "error",
  },
  {
    inputs: [],
    name: "RPowOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "SDivWadFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "SMulWadFailed",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220452c2df6a79bfe853d997440f1946b99ff34bbea99b358ce9238874f40d8d4bd64736f6c634300081a0033";

type FixedPointMathLibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FixedPointMathLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FixedPointMathLib__factory extends ContractFactory {
  constructor(...args: FixedPointMathLibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      FixedPointMathLib & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): FixedPointMathLib__factory {
    return super.connect(runner) as FixedPointMathLib__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FixedPointMathLibInterface {
    return new Interface(_abi) as FixedPointMathLibInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): FixedPointMathLib {
    return new Contract(address, _abi, runner) as unknown as FixedPointMathLib;
  }
}
