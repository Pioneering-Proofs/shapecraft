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

export type BondStruct = { strength: BigNumberish; bondType: string };

export type BondStructOutput = [strength: bigint, bondType: string] & {
  strength: bigint;
  bondType: string;
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

export interface OtomsEncoderInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "encodeAtom"
      | "encodeMolecule"
      | "encodeNucleus"
      | "encodeStructure"
      | "encodeUniverseInformation"
      | "getMiningHash"
      | "getMiningMessageHash"
      | "getMultipleMiningHashes"
      | "getSeedUniverseMessageHash"
      | "owner"
      | "renounceOwnership"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;

  encodeFunctionData(
    functionFragment: "encodeAtom",
    values: [AtomStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "encodeMolecule",
    values: [MoleculeStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "encodeNucleus",
    values: [NucleusStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "encodeStructure",
    values: [AtomStructureStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "encodeUniverseInformation",
    values: [UniverseInformationStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getMiningHash",
    values: [AddressLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMiningMessageHash",
    values: [
      MoleculeStruct,
      BytesLike,
      string,
      BytesLike,
      BigNumberish,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getMultipleMiningHashes",
    values: [AddressLike, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSeedUniverseMessageHash",
    values: [UniverseInformationStruct, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "encodeAtom", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "encodeMolecule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encodeNucleus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encodeStructure",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encodeUniverseInformation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMiningHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMiningMessageHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMultipleMiningHashes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSeedUniverseMessageHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
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

export interface OtomsEncoder extends BaseContract {
  connect(runner?: ContractRunner | null): OtomsEncoder;
  waitForDeployment(): Promise<this>;

  interface: OtomsEncoderInterface;

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

  encodeAtom: TypedContractMethod<[_newAtom: AtomStruct], [string], "view">;

  encodeMolecule: TypedContractMethod<
    [_newMolecule: MoleculeStruct],
    [string],
    "view"
  >;

  encodeNucleus: TypedContractMethod<
    [_nucleus: NucleusStruct],
    [string],
    "view"
  >;

  encodeStructure: TypedContractMethod<
    [_structure: AtomStructureStruct],
    [string],
    "view"
  >;

  encodeUniverseInformation: TypedContractMethod<
    [_universeInformation: UniverseInformationStruct],
    [string],
    "view"
  >;

  getMiningHash: TypedContractMethod<
    [_chemist: AddressLike, _universeHash: BytesLike, _nonce: BigNumberish],
    [string],
    "view"
  >;

  getMiningMessageHash: TypedContractMethod<
    [
      _newAtom: MoleculeStruct,
      _miningHash: BytesLike,
      _tokenUri: string,
      _universeHash: BytesLike,
      expiry: BigNumberish,
      sender: AddressLike
    ],
    [string],
    "view"
  >;

  getMultipleMiningHashes: TypedContractMethod<
    [
      _chemist: AddressLike,
      _universeHash: BytesLike,
      _startingNonce: BigNumberish,
      _count: BigNumberish
    ],
    [string[]],
    "view"
  >;

  getSeedUniverseMessageHash: TypedContractMethod<
    [
      _universeInformation: UniverseInformationStruct,
      expiry: BigNumberish,
      sender: AddressLike
    ],
    [string],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "encodeAtom"
  ): TypedContractMethod<[_newAtom: AtomStruct], [string], "view">;
  getFunction(
    nameOrSignature: "encodeMolecule"
  ): TypedContractMethod<[_newMolecule: MoleculeStruct], [string], "view">;
  getFunction(
    nameOrSignature: "encodeNucleus"
  ): TypedContractMethod<[_nucleus: NucleusStruct], [string], "view">;
  getFunction(
    nameOrSignature: "encodeStructure"
  ): TypedContractMethod<[_structure: AtomStructureStruct], [string], "view">;
  getFunction(
    nameOrSignature: "encodeUniverseInformation"
  ): TypedContractMethod<
    [_universeInformation: UniverseInformationStruct],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getMiningHash"
  ): TypedContractMethod<
    [_chemist: AddressLike, _universeHash: BytesLike, _nonce: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getMiningMessageHash"
  ): TypedContractMethod<
    [
      _newAtom: MoleculeStruct,
      _miningHash: BytesLike,
      _tokenUri: string,
      _universeHash: BytesLike,
      expiry: BigNumberish,
      sender: AddressLike
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getMultipleMiningHashes"
  ): TypedContractMethod<
    [
      _chemist: AddressLike,
      _universeHash: BytesLike,
      _startingNonce: BigNumberish,
      _count: BigNumberish
    ],
    [string[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSeedUniverseMessageHash"
  ): TypedContractMethod<
    [
      _universeInformation: UniverseInformationStruct,
      expiry: BigNumberish,
      sender: AddressLike
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
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
  };
}