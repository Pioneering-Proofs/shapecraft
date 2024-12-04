/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export type BondStruct = { strength: BigNumberish; bondType: string };

export type BondStructOutput = [strength: bigint, bondType: string] & {
  strength: bigint;
  bondType: string;
};

export type AtomStructureStruct = {
  universeHash: BytesLike;
  depth: BigNumberish;
  distance: BigNumberish;
  distanceIndex: BigNumberish;
  shell: BigNumberish;
  totalInOuter: BigNumberish[];
  emptyInOuter: BigNumberish[];
  filledInOuter: BigNumberish[];
  ancestors: BigNumberish[];
};

export type AtomStructureStructOutput = [
  universeHash: string,
  depth: bigint,
  distance: bigint,
  distanceIndex: bigint,
  shell: bigint,
  totalInOuter: bigint[],
  emptyInOuter: bigint[],
  filledInOuter: bigint[],
  ancestors: bigint[]
] & {
  universeHash: string;
  depth: bigint;
  distance: bigint;
  distanceIndex: bigint;
  shell: bigint;
  totalInOuter: bigint[];
  emptyInOuter: bigint[];
  filledInOuter: bigint[];
  ancestors: bigint[];
};

export type NucleusStruct = {
  protons: BigNumberish;
  neutrons: BigNumberish;
  nucleons: BigNumberish;
  stability: BigNumberish;
  decayType: string;
};

export type NucleusStructOutput = [
  protons: bigint,
  neutrons: bigint,
  nucleons: bigint,
  stability: bigint,
  decayType: string
] & {
  protons: bigint;
  neutrons: bigint;
  nucleons: bigint;
  stability: bigint;
  decayType: string;
};

export type AtomStruct = {
  radius: BigNumberish;
  volume: BigNumberish;
  mass: BigNumberish;
  density: BigNumberish;
  electronegativity: BigNumberish;
  metallic: boolean;
  name: string;
  series: string;
  periodicTableX: BigNumberish;
  periodicTableY: BigNumberish;
  structure: AtomStructureStruct;
  nucleus: NucleusStruct;
};

export type AtomStructOutput = [
  radius: bigint,
  volume: bigint,
  mass: bigint,
  density: bigint,
  electronegativity: bigint,
  metallic: boolean,
  name: string,
  series: string,
  periodicTableX: bigint,
  periodicTableY: bigint,
  structure: AtomStructureStructOutput,
  nucleus: NucleusStructOutput
] & {
  radius: bigint;
  volume: bigint;
  mass: bigint;
  density: bigint;
  electronegativity: bigint;
  metallic: boolean;
  name: string;
  series: string;
  periodicTableX: bigint;
  periodicTableY: bigint;
  structure: AtomStructureStructOutput;
  nucleus: NucleusStructOutput;
};

export type MoleculeStruct = {
  id: string;
  name: string;
  universeHash: BytesLike;
  activationEnergy: BigNumberish;
  radius: BigNumberish;
  bond: BondStruct;
  givingAtoms: AtomStruct[];
  receivingAtoms: AtomStruct[];
  electricalConductivity: BigNumberish;
  thermalConductivity: BigNumberish;
  toughness: BigNumberish;
  hardness: BigNumberish;
  ductility: BigNumberish;
};

export type MoleculeStructOutput = [
  id: string,
  name: string,
  universeHash: string,
  activationEnergy: bigint,
  radius: bigint,
  bond: BondStructOutput,
  givingAtoms: AtomStructOutput[],
  receivingAtoms: AtomStructOutput[],
  electricalConductivity: bigint,
  thermalConductivity: bigint,
  toughness: bigint,
  hardness: bigint,
  ductility: bigint
] & {
  id: string;
  name: string;
  universeHash: string;
  activationEnergy: bigint;
  radius: bigint;
  bond: BondStructOutput;
  givingAtoms: AtomStructOutput[];
  receivingAtoms: AtomStructOutput[];
  electricalConductivity: bigint;
  thermalConductivity: bigint;
  toughness: bigint;
  hardness: bigint;
  ductility: bigint;
};

export type MoleculeWithUriStruct = {
  molecule: MoleculeStruct;
  tokenUri: string;
};

export type MoleculeWithUriStructOutput = [
  molecule: MoleculeStructOutput,
  tokenUri: string
] & { molecule: MoleculeStructOutput; tokenUri: string };

export type ReactionResultStruct = {
  universeHash: BytesLike;
  reactionOutputId: BigNumberish;
  outputMolecules: MoleculeWithUriStruct[];
  inputAtomIds: BigNumberish[];
  remainingEnergy: BigNumberish;
  reactionTypes: string[];
  success: boolean;
};

export type ReactionResultStructOutput = [
  universeHash: string,
  reactionOutputId: bigint,
  outputMolecules: MoleculeWithUriStructOutput[],
  inputAtomIds: bigint[],
  remainingEnergy: bigint,
  reactionTypes: string[],
  success: boolean
] & {
  universeHash: string;
  reactionOutputId: bigint;
  outputMolecules: MoleculeWithUriStructOutput[];
  inputAtomIds: bigint[];
  remainingEnergy: bigint;
  reactionTypes: string[];
  success: boolean;
};

export type MiningPayloadStruct = {
  minedMolecule: MoleculeStruct;
  miningHash: BytesLike;
  tokenUri: string;
  universeHash: BytesLike;
  expiry: BigNumberish;
  signature: BytesLike;
};

export type MiningPayloadStructOutput = [
  minedMolecule: MoleculeStructOutput,
  miningHash: string,
  tokenUri: string,
  universeHash: string,
  expiry: bigint,
  signature: string
] & {
  minedMolecule: MoleculeStructOutput;
  miningHash: string;
  tokenUri: string;
  universeHash: string;
  expiry: bigint;
  signature: string;
};

export type UniverseInformationStruct = {
  energyFactorBps: BigNumberish;
  active: boolean;
  seedHash: BytesLike;
  name: string;
};

export type UniverseInformationStructOutput = [
  energyFactorBps: bigint,
  active: boolean,
  seedHash: string,
  name: string
] & {
  energyFactorBps: bigint;
  active: boolean;
  seedHash: string;
  name: string;
};

export interface OtomsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptOwnership"
      | "annihilate"
      | "balanceOf"
      | "balanceOfBatch"
      | "database"
      | "encoder"
      | "exists"
      | "getMiningNonce"
      | "handleReactionResult"
      | "initialize"
      | "isApprovedForAll"
      | "mine"
      | "miningLimit"
      | "miningPaused"
      | "moleculeIsAtom"
      | "name"
      | "operators"
      | "owner"
      | "pendingOwner"
      | "renounceOwnership"
      | "safeBatchTransferFrom"
      | "safeTransferFrom"
      | "seedUniverse"
      | "setApprovalForAll"
      | "setEncoder"
      | "setMinesDepleted"
      | "setMiningLimit"
      | "setMiningPaused"
      | "setSigner"
      | "supportsInterface"
      | "toggleOperator"
      | "totalSupply()"
      | "totalSupply(uint256)"
      | "transferOwnership"
      | "universeMinesDepleted"
      | "uri"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ApprovalForAll"
      | "EncoderUpdated"
      | "Initialized"
      | "MinesDepletedSet"
      | "MiningLimitSet"
      | "MiningPausedSet"
      | "OperatorToggled"
      | "OtomMined"
      | "OwnershipTransferStarted"
      | "OwnershipTransferred"
      | "SignerSet"
      | "TransferBatch"
      | "TransferSingle"
      | "URI"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "annihilate",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfBatch",
    values: [AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "database", values?: undefined): string;
  encodeFunctionData(functionFragment: "encoder", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "exists",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMiningNonce",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "handleReactionResult",
    values: [ReactionResultStruct, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike[], AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mine",
    values: [MiningPayloadStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "miningLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "miningPaused",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "moleculeIsAtom",
    values: [MoleculeStruct]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "operators",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "safeBatchTransferFrom",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish[],
      BigNumberish[],
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "seedUniverse",
    values: [UniverseInformationStruct, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setEncoder",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinesDepleted",
    values: [BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setMiningLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMiningPaused",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setSigner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "toggleOperator",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "universeMinesDepleted",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "annihilate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "database", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "encoder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exists", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMiningNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handleReactionResult",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mine", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "miningLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "miningPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "moleculeIsAtom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "operators", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeBatchTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "seedUniverse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setEncoder", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMinesDepleted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMiningLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMiningPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setSigner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toggleOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "universeMinesDepleted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;
}

export namespace ApprovalForAllEvent {
  export type InputTuple = [
    account: AddressLike,
    operator: AddressLike,
    approved: boolean
  ];
  export type OutputTuple = [
    account: string,
    operator: string,
    approved: boolean
  ];
  export interface OutputObject {
    account: string;
    operator: string;
    approved: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EncoderUpdatedEvent {
  export type InputTuple = [encoder: AddressLike];
  export type OutputTuple = [encoder: string];
  export interface OutputObject {
    encoder: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MinesDepletedSetEvent {
  export type InputTuple = [universeHash: BytesLike, minesDepleted: boolean];
  export type OutputTuple = [universeHash: string, minesDepleted: boolean];
  export interface OutputObject {
    universeHash: string;
    minesDepleted: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MiningLimitSetEvent {
  export type InputTuple = [miningLimit: BigNumberish];
  export type OutputTuple = [miningLimit: bigint];
  export interface OutputObject {
    miningLimit: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MiningPausedSetEvent {
  export type InputTuple = [miningPaused: boolean];
  export type OutputTuple = [miningPaused: boolean];
  export interface OutputObject {
    miningPaused: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OperatorToggledEvent {
  export type InputTuple = [operator: AddressLike, isActive: boolean];
  export type OutputTuple = [operator: string, isActive: boolean];
  export interface OutputObject {
    operator: string;
    isActive: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OtomMinedEvent {
  export type InputTuple = [
    minedBy: AddressLike,
    universeHash: BytesLike,
    atomId: BigNumberish,
    creationHash: BytesLike
  ];
  export type OutputTuple = [
    minedBy: string,
    universeHash: string,
    atomId: bigint,
    creationHash: string
  ];
  export interface OutputObject {
    minedBy: string;
    universeHash: string;
    atomId: bigint;
    creationHash: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferStartedEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SignerSetEvent {
  export type InputTuple = [signer: AddressLike];
  export type OutputTuple = [signer: string];
  export interface OutputObject {
    signer: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferBatchEvent {
  export type InputTuple = [
    operator: AddressLike,
    from: AddressLike,
    to: AddressLike,
    ids: BigNumberish[],
    values: BigNumberish[]
  ];
  export type OutputTuple = [
    operator: string,
    from: string,
    to: string,
    ids: bigint[],
    values: bigint[]
  ];
  export interface OutputObject {
    operator: string;
    from: string;
    to: string;
    ids: bigint[];
    values: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferSingleEvent {
  export type InputTuple = [
    operator: AddressLike,
    from: AddressLike,
    to: AddressLike,
    id: BigNumberish,
    value: BigNumberish
  ];
  export type OutputTuple = [
    operator: string,
    from: string,
    to: string,
    id: bigint,
    value: bigint
  ];
  export interface OutputObject {
    operator: string;
    from: string;
    to: string;
    id: bigint;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace URIEvent {
  export type InputTuple = [value: string, id: BigNumberish];
  export type OutputTuple = [value: string, id: bigint];
  export interface OutputObject {
    value: string;
    id: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Otoms extends BaseContract {
  connect(runner?: ContractRunner | null): Otoms;
  waitForDeployment(): Promise<this>;

  interface: OtomsInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;

  annihilate: TypedContractMethod<
    [_atomId: BigNumberish, _chemist: AddressLike],
    [void],
    "nonpayable"
  >;

  balanceOf: TypedContractMethod<
    [account: AddressLike, id: BigNumberish],
    [bigint],
    "view"
  >;

  balanceOfBatch: TypedContractMethod<
    [accounts: AddressLike[], ids: BigNumberish[]],
    [bigint[]],
    "view"
  >;

  database: TypedContractMethod<[], [string], "view">;

  encoder: TypedContractMethod<[], [string], "view">;

  exists: TypedContractMethod<[id: BigNumberish], [boolean], "view">;

  getMiningNonce: TypedContractMethod<
    [_universeHash: BytesLike, _chemist: AddressLike],
    [bigint],
    "view"
  >;

  handleReactionResult: TypedContractMethod<
    [_reactionResult: ReactionResultStruct, _chemist: AddressLike],
    [void],
    "nonpayable"
  >;

  initialize: TypedContractMethod<
    [
      _operators: AddressLike[],
      signerAddress: AddressLike,
      encoderAddress: AddressLike,
      databaseAddress: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  isApprovedForAll: TypedContractMethod<
    [account: AddressLike, operator: AddressLike],
    [boolean],
    "view"
  >;

  mine: TypedContractMethod<
    [_payloads: MiningPayloadStruct[]],
    [bigint[]],
    "nonpayable"
  >;

  miningLimit: TypedContractMethod<[], [bigint], "view">;

  miningPaused: TypedContractMethod<[], [boolean], "view">;

  moleculeIsAtom: TypedContractMethod<
    [_molecule: MoleculeStruct],
    [boolean],
    "view"
  >;

  name: TypedContractMethod<[], [string], "view">;

  operators: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  pendingOwner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  safeBatchTransferFrom: TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  safeTransferFrom: TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  seedUniverse: TypedContractMethod<
    [
      _universeInformation: UniverseInformationStruct,
      expiry: BigNumberish,
      signature: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  setApprovalForAll: TypedContractMethod<
    [operator: AddressLike, approved: boolean],
    [void],
    "nonpayable"
  >;

  setEncoder: TypedContractMethod<
    [_newEncoder: AddressLike],
    [void],
    "nonpayable"
  >;

  setMinesDepleted: TypedContractMethod<
    [_universeHash: BytesLike, _minesDepleted: boolean],
    [void],
    "nonpayable"
  >;

  setMiningLimit: TypedContractMethod<
    [_miningLimit: BigNumberish],
    [void],
    "nonpayable"
  >;

  setMiningPaused: TypedContractMethod<
    [_miningPaused: boolean],
    [void],
    "nonpayable"
  >;

  setSigner: TypedContractMethod<
    [newSigner: AddressLike],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  toggleOperator: TypedContractMethod<
    [_operator: AddressLike],
    [void],
    "nonpayable"
  >;

  "totalSupply()": TypedContractMethod<[], [bigint], "view">;

  "totalSupply(uint256)": TypedContractMethod<
    [id: BigNumberish],
    [bigint],
    "view"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  universeMinesDepleted: TypedContractMethod<
    [arg0: BytesLike],
    [boolean],
    "view"
  >;

  uri: TypedContractMethod<[tokenId: BigNumberish], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "annihilate"
  ): TypedContractMethod<
    [_atomId: BigNumberish, _chemist: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<
    [account: AddressLike, id: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "balanceOfBatch"
  ): TypedContractMethod<
    [accounts: AddressLike[], ids: BigNumberish[]],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "database"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "encoder"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "exists"
  ): TypedContractMethod<[id: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "getMiningNonce"
  ): TypedContractMethod<
    [_universeHash: BytesLike, _chemist: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "handleReactionResult"
  ): TypedContractMethod<
    [_reactionResult: ReactionResultStruct, _chemist: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _operators: AddressLike[],
      signerAddress: AddressLike,
      encoderAddress: AddressLike,
      databaseAddress: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isApprovedForAll"
  ): TypedContractMethod<
    [account: AddressLike, operator: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "mine"
  ): TypedContractMethod<
    [_payloads: MiningPayloadStruct[]],
    [bigint[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "miningLimit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "miningPaused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "moleculeIsAtom"
  ): TypedContractMethod<[_molecule: MoleculeStruct], [boolean], "view">;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "operators"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pendingOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "safeBatchTransferFrom"
  ): TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "safeTransferFrom"
  ): TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "seedUniverse"
  ): TypedContractMethod<
    [
      _universeInformation: UniverseInformationStruct,
      expiry: BigNumberish,
      signature: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setApprovalForAll"
  ): TypedContractMethod<
    [operator: AddressLike, approved: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setEncoder"
  ): TypedContractMethod<[_newEncoder: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setMinesDepleted"
  ): TypedContractMethod<
    [_universeHash: BytesLike, _minesDepleted: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMiningLimit"
  ): TypedContractMethod<[_miningLimit: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setMiningPaused"
  ): TypedContractMethod<[_miningPaused: boolean], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setSigner"
  ): TypedContractMethod<[newSigner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "toggleOperator"
  ): TypedContractMethod<[_operator: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "totalSupply()"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalSupply(uint256)"
  ): TypedContractMethod<[id: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "universeMinesDepleted"
  ): TypedContractMethod<[arg0: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "uri"
  ): TypedContractMethod<[tokenId: BigNumberish], [string], "view">;

  getEvent(
    key: "ApprovalForAll"
  ): TypedContractEvent<
    ApprovalForAllEvent.InputTuple,
    ApprovalForAllEvent.OutputTuple,
    ApprovalForAllEvent.OutputObject
  >;
  getEvent(
    key: "EncoderUpdated"
  ): TypedContractEvent<
    EncoderUpdatedEvent.InputTuple,
    EncoderUpdatedEvent.OutputTuple,
    EncoderUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "MinesDepletedSet"
  ): TypedContractEvent<
    MinesDepletedSetEvent.InputTuple,
    MinesDepletedSetEvent.OutputTuple,
    MinesDepletedSetEvent.OutputObject
  >;
  getEvent(
    key: "MiningLimitSet"
  ): TypedContractEvent<
    MiningLimitSetEvent.InputTuple,
    MiningLimitSetEvent.OutputTuple,
    MiningLimitSetEvent.OutputObject
  >;
  getEvent(
    key: "MiningPausedSet"
  ): TypedContractEvent<
    MiningPausedSetEvent.InputTuple,
    MiningPausedSetEvent.OutputTuple,
    MiningPausedSetEvent.OutputObject
  >;
  getEvent(
    key: "OperatorToggled"
  ): TypedContractEvent<
    OperatorToggledEvent.InputTuple,
    OperatorToggledEvent.OutputTuple,
    OperatorToggledEvent.OutputObject
  >;
  getEvent(
    key: "OtomMined"
  ): TypedContractEvent<
    OtomMinedEvent.InputTuple,
    OtomMinedEvent.OutputTuple,
    OtomMinedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferStarted"
  ): TypedContractEvent<
    OwnershipTransferStartedEvent.InputTuple,
    OwnershipTransferStartedEvent.OutputTuple,
    OwnershipTransferStartedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "SignerSet"
  ): TypedContractEvent<
    SignerSetEvent.InputTuple,
    SignerSetEvent.OutputTuple,
    SignerSetEvent.OutputObject
  >;
  getEvent(
    key: "TransferBatch"
  ): TypedContractEvent<
    TransferBatchEvent.InputTuple,
    TransferBatchEvent.OutputTuple,
    TransferBatchEvent.OutputObject
  >;
  getEvent(
    key: "TransferSingle"
  ): TypedContractEvent<
    TransferSingleEvent.InputTuple,
    TransferSingleEvent.OutputTuple,
    TransferSingleEvent.OutputObject
  >;
  getEvent(
    key: "URI"
  ): TypedContractEvent<
    URIEvent.InputTuple,
    URIEvent.OutputTuple,
    URIEvent.OutputObject
  >;

  filters: {
    "ApprovalForAll(address,address,bool)": TypedContractEvent<
      ApprovalForAllEvent.InputTuple,
      ApprovalForAllEvent.OutputTuple,
      ApprovalForAllEvent.OutputObject
    >;
    ApprovalForAll: TypedContractEvent<
      ApprovalForAllEvent.InputTuple,
      ApprovalForAllEvent.OutputTuple,
      ApprovalForAllEvent.OutputObject
    >;

    "EncoderUpdated(address)": TypedContractEvent<
      EncoderUpdatedEvent.InputTuple,
      EncoderUpdatedEvent.OutputTuple,
      EncoderUpdatedEvent.OutputObject
    >;
    EncoderUpdated: TypedContractEvent<
      EncoderUpdatedEvent.InputTuple,
      EncoderUpdatedEvent.OutputTuple,
      EncoderUpdatedEvent.OutputObject
    >;

    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "MinesDepletedSet(bytes32,bool)": TypedContractEvent<
      MinesDepletedSetEvent.InputTuple,
      MinesDepletedSetEvent.OutputTuple,
      MinesDepletedSetEvent.OutputObject
    >;
    MinesDepletedSet: TypedContractEvent<
      MinesDepletedSetEvent.InputTuple,
      MinesDepletedSetEvent.OutputTuple,
      MinesDepletedSetEvent.OutputObject
    >;

    "MiningLimitSet(uint256)": TypedContractEvent<
      MiningLimitSetEvent.InputTuple,
      MiningLimitSetEvent.OutputTuple,
      MiningLimitSetEvent.OutputObject
    >;
    MiningLimitSet: TypedContractEvent<
      MiningLimitSetEvent.InputTuple,
      MiningLimitSetEvent.OutputTuple,
      MiningLimitSetEvent.OutputObject
    >;

    "MiningPausedSet(bool)": TypedContractEvent<
      MiningPausedSetEvent.InputTuple,
      MiningPausedSetEvent.OutputTuple,
      MiningPausedSetEvent.OutputObject
    >;
    MiningPausedSet: TypedContractEvent<
      MiningPausedSetEvent.InputTuple,
      MiningPausedSetEvent.OutputTuple,
      MiningPausedSetEvent.OutputObject
    >;

    "OperatorToggled(address,bool)": TypedContractEvent<
      OperatorToggledEvent.InputTuple,
      OperatorToggledEvent.OutputTuple,
      OperatorToggledEvent.OutputObject
    >;
    OperatorToggled: TypedContractEvent<
      OperatorToggledEvent.InputTuple,
      OperatorToggledEvent.OutputTuple,
      OperatorToggledEvent.OutputObject
    >;

    "OtomMined(address,bytes32,uint256,bytes32)": TypedContractEvent<
      OtomMinedEvent.InputTuple,
      OtomMinedEvent.OutputTuple,
      OtomMinedEvent.OutputObject
    >;
    OtomMined: TypedContractEvent<
      OtomMinedEvent.InputTuple,
      OtomMinedEvent.OutputTuple,
      OtomMinedEvent.OutputObject
    >;

    "OwnershipTransferStarted(address,address)": TypedContractEvent<
      OwnershipTransferStartedEvent.InputTuple,
      OwnershipTransferStartedEvent.OutputTuple,
      OwnershipTransferStartedEvent.OutputObject
    >;
    OwnershipTransferStarted: TypedContractEvent<
      OwnershipTransferStartedEvent.InputTuple,
      OwnershipTransferStartedEvent.OutputTuple,
      OwnershipTransferStartedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "SignerSet(address)": TypedContractEvent<
      SignerSetEvent.InputTuple,
      SignerSetEvent.OutputTuple,
      SignerSetEvent.OutputObject
    >;
    SignerSet: TypedContractEvent<
      SignerSetEvent.InputTuple,
      SignerSetEvent.OutputTuple,
      SignerSetEvent.OutputObject
    >;

    "TransferBatch(address,address,address,uint256[],uint256[])": TypedContractEvent<
      TransferBatchEvent.InputTuple,
      TransferBatchEvent.OutputTuple,
      TransferBatchEvent.OutputObject
    >;
    TransferBatch: TypedContractEvent<
      TransferBatchEvent.InputTuple,
      TransferBatchEvent.OutputTuple,
      TransferBatchEvent.OutputObject
    >;

    "TransferSingle(address,address,address,uint256,uint256)": TypedContractEvent<
      TransferSingleEvent.InputTuple,
      TransferSingleEvent.OutputTuple,
      TransferSingleEvent.OutputObject
    >;
    TransferSingle: TypedContractEvent<
      TransferSingleEvent.InputTuple,
      TransferSingleEvent.OutputTuple,
      TransferSingleEvent.OutputObject
    >;

    "URI(string,uint256)": TypedContractEvent<
      URIEvent.InputTuple,
      URIEvent.OutputTuple,
      URIEvent.OutputObject
    >;
    URI: TypedContractEvent<
      URIEvent.InputTuple,
      URIEvent.OutputTuple,
      URIEvent.OutputObject
    >;
  };
}
