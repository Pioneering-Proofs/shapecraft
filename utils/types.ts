export interface OtomTokenMetadata {
  name: string;
  image: string;
  chipImage: string;
  attributes: {
    trait_type: string;
    value: string | number | boolean;
  }[];
}

export type Numeric = number | bigint;
export type BigNumberish = string | Numeric;

export interface Atom {
  radius: BigNumberish;
  volume: BigNumberish;
  mass: BigNumberish;
  density: BigNumberish;
  electronegativity: BigNumberish;
  name: string;
  series: string;
  metallic: boolean;
  periodicTableX: BigNumberish;
  periodicTableY: BigNumberish;
  structure: AtomStructure;
  nucleus: Nucleus;
}

export interface AtomStructure {
  universeHash: string; // bytes32
  depth: BigNumberish;
  distance: BigNumberish;
  distanceIndex: BigNumberish;
  shell: BigNumberish;
  totalInOuter: BigNumberish[];
  emptyInOuter: BigNumberish[];
  filledInOuter: BigNumberish[];
  ancestors: BigNumberish[];
}

export interface Nucleus {
  protons: BigNumberish;
  neutrons: BigNumberish;
  nucleons: BigNumberish;
  stability: BigNumberish;
  decayType: string;
}

export interface Bond {
  strength: BigNumberish;
  bondType: string;
}

export interface Molecule {
  id: string;
  name: string;
  universeHash: string; // bytes32
  activationEnergy: BigNumberish;
  radius: BigNumberish;
  bond: Bond;
  givingAtoms: Atom[];
  receivingAtoms: Atom[];
  electricalConductivity: BigNumberish;
  thermalConductivity: BigNumberish;
  toughness: BigNumberish;
  hardness: BigNumberish;
  ductility: BigNumberish;
}
