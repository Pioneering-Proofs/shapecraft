import { ethers } from "ethers";
import { Atom, AtomStructure, Bond, Molecule, Nucleus } from "./types";

function packUint256Array(arr: ethers.BigNumberish[]): string {
  const packedElements = arr.map((element) => {
    const bn = BigInt(element);
    const hex = ethers.zeroPadBytes(ethers.toBeHex(bn), 32);
    return hex;
  });
  return ethers.concat(packedElements);
}

function hashPackedUint256Array(arr: ethers.BigNumberish[]): string {
  const packedData = packUint256Array(arr);
  return ethers.keccak256(packedData);
}

export function encodeNucleus(nucleus: Nucleus): string {
    const abiCoder = ethers.AbiCoder.defaultAbiCoder();
    const encoded = abiCoder.encode(
        ["uint256", "uint256", "uint256", "uint256", "string"],
        [
            nucleus.protons,
            nucleus.neutrons,
            nucleus.nucleons,
            nucleus.stability,
            nucleus.decayType
        ]
    );
    return ethers.keccak256(encoded);
}

export function encodeStructure(structure: AtomStructure): string {
    const totalInOuterHash = ethers.solidityPackedKeccak256(["uint256[]"], [structure.totalInOuter]);
    const emptyInOuterHash = ethers.solidityPackedKeccak256(["uint256[]"], [structure.emptyInOuter]);
    const filledInOuterHash = ethers.solidityPackedKeccak256(["uint256[]"], [structure.filledInOuter]);
    const ancestorsHash = ethers.solidityPackedKeccak256(["uint256[]"], [structure.ancestors]);

    const abiCoder = ethers.AbiCoder.defaultAbiCoder();
    const encoded = abiCoder.encode(
        [
            "bytes32", "uint256", "uint256", "uint256", "uint256",
            "bytes32", "bytes32", "bytes32", "bytes32"
        ],
        [
            structure.universeHash,
            structure.depth,
            structure.distance,
            structure.distanceIndex,
            structure.shell,
            totalInOuterHash,
            emptyInOuterHash,
            filledInOuterHash,
            ancestorsHash
        ]
    );
    return ethers.keccak256(encoded);
}

export function encodeAtom(atom: Atom): string {
    const encodedStructure = encodeStructure(atom.structure);
    const encodedNucleus = encodeNucleus(atom.nucleus);

    const abiCoder = ethers.AbiCoder.defaultAbiCoder();

    const encoded = abiCoder.encode(
        [
            "uint256",
            "uint256",
            "uint256",
            "uint256",
            "uint256",
            "string",
            "string",
            "bool",
            "uint256",
            "uint256",
            "bytes32",
            "bytes32"
        ],
        [
            atom.radius,
            atom.volume,
            atom.mass,
            atom.density,
            atom.electronegativity,
            atom.name,
            atom.series,
            atom.metallic,
            atom.periodicTableX,
            atom.periodicTableY,
            encodedStructure,
            encodedNucleus
        ]
    );
    return ethers.keccak256(encoded);
}

export function encodeBond(bond: Bond): string {
    const abiCoder = ethers.AbiCoder.defaultAbiCoder();
    const encoded = abiCoder.encode(
        ["uint256", "string"],
        [bond.strength, bond.bondType]
    );
    return ethers.keccak256(encoded);
}

export function encodeMoleculeDataPart1(molecule: Molecule): string {
    const abiCoder = ethers.AbiCoder.defaultAbiCoder();
    const encoded = abiCoder.encode(
        ["string", "bytes32", "uint256", "uint256", "string", "uint256"],
        [
            molecule.id,
            molecule.universeHash,
            molecule.activationEnergy,
            molecule.radius,
            molecule.name,
            molecule.electricalConductivity
        ]
    );
    return ethers.keccak256(encoded);
}

export function encodeMoleculeDataPart2(
    molecule: Molecule,
    encodedBond: string,
    encodedGivingAtoms: string[],
    encodedReceivingAtoms: string[]
): string {
    const givingAtomsHash = ethers.keccak256(
        ethers.concat(encodedGivingAtoms)
    );
    const receivingAtomsHash = ethers.keccak256(
        ethers.concat(encodedReceivingAtoms)
    );

    const abiCoder = ethers.AbiCoder.defaultAbiCoder();
    const encoded = abiCoder.encode(
        ["uint256", "uint256", "uint256", "uint256", "bytes32", "bytes32", "bytes32"],
        [
            molecule.thermalConductivity,
            molecule.toughness,
            molecule.hardness,
            molecule.ductility,
            encodedBond,
            givingAtomsHash,
            receivingAtomsHash
        ]
    );
    return ethers.keccak256(encoded);
}

export function encodeMolecule(molecule: Molecule): string {
    const encodedBond = encodeBond(molecule.bond);

    const encodedGivingAtoms = molecule.givingAtoms.map(atom => encodeAtom(atom));
    const encodedReceivingAtoms = molecule.receivingAtoms.map(atom => encodeAtom(atom));

    const firstPartHash = encodeMoleculeDataPart1(molecule);
    const secondPartHash = encodeMoleculeDataPart2(molecule, encodedBond, encodedGivingAtoms, encodedReceivingAtoms);

    const abiCoder = ethers.AbiCoder.defaultAbiCoder();
    const encoded = abiCoder.encode(["bytes32", "bytes32"], [firstPartHash, secondPartHash]);

    return ethers.keccak256(encoded);
}

export function encodeTokenId(name: string): bigint {
    const encoded = ethers.AbiCoder.defaultAbiCoder().encode(["string"], [name]);
    const hashedTokenName = ethers.keccak256(encoded);
    return BigInt(hashedTokenName);
}
