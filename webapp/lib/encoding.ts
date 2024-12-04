
export interface OtomToken {
    type: OtomTokenType.Otom;
    name: string;
    image: string;
    chipImage: string;
    series: string;
    protons: number;
    neutrons: number;
    mass: number;
    metallic: boolean;
    stability: number;
    density: number;
    radius: number;
    electronegativity: number;
    decayType: string;
    filledValence: number[];
    emptyValence: number[];
}

export interface OtomMolecule {
    type: OtomTokenType.Molecule;
    name: string;
    image: string;
    chipImage: string;
    activationEnergy: number;
    radius: number;
    mass: number;
    bondType: string;
    bondStrength: number;
    givingAtoms: string[];
    receivingAtoms: string[];
    electricalConductivity: number;
    thermalConductivity: number;
    toughness: number;
    hardness: number;
    ductility: number;
}

export enum OtomTokenType {
    Otom = 'Otom',
    Molecule = 'Molecule'
}

interface TokenAttribute {
    trait_type: string;
    value: any;
}

export const parseTokenURI = (uri: string): OtomToken | OtomMolecule | null => {
  try {
    const split = uri.split(",");
    const lastChunk = split[split.length - 1];
    const data = atob(lastChunk);
    const parsedData = JSON.parse(data);
    // console.log('parsedData :>>', parsedData);
    if (parsedData.name.endsWith('Otom')) {
        return {
            type: OtomTokenType.Otom,
            name: parsedData.name,
            image: parsedData.image,
            chipImage: parsedData.chipImage,
            series: parsedData.attributes.find((attr: TokenAttribute) => attr.trait_type === 'Series').value,
            protons: parsedData.attributes.find((attr: TokenAttribute) => attr.trait_type === 'Protons').value,
            neutrons: parsedData.attributes.find((attr: TokenAttribute) => attr.trait_type === 'Neutrons').value,
            mass: parsedData.attributes.find((attr: TokenAttribute) => attr.trait_type === 'Mass').value,
            metallic: parsedData.attributes.find((attr: TokenAttribute) => attr.trait_type === 'Metallic').value,
            stability: parsedData.attributes.find((attr: TokenAttribute) => attr.trait_type === 'Stability').value,
            density: parsedData.attributes.find((attr: TokenAttribute) => attr.trait_type === 'Density').value,
            radius: parsedData.attributes.find((attr: TokenAttribute) => attr.trait_type === 'Radius').value,
            electronegativity: parsedData.attributes.find((attr: TokenAttribute) => attr.trait_type === 'Electronegativity').value,
            decayType: parsedData.attributes.find((attr: TokenAttribute) => attr.trait_type === 'Decay Type').value,
            filledValence: parsedData.attributes.find((attr: TokenAttribute) => attr.trait_type === 'Filled Valence').value.split('-').map((val: string) => parseInt(val)),
            emptyValence: parsedData.attributes.find((attr: TokenAttribute) => attr.trait_type === 'Empty Valence').value.split('-').map((val: string) => parseInt(val))
        } as OtomToken;
    } else if (parsedData.name.endsWith('Molecule')) {
        return {
            type: OtomTokenType.Molecule,
            name: parsedData.name,
            image: parsedData.image,
            chipImage: parsedData.chipImage,
            activationEnergy: parsedData.attributes.find((attr: TokenAttribute) => attr.trait_type === 'Activation Energy').value,
            radius: parsedData.attributes.find((attr: TokenAttribute) => attr.trait_type === 'Radius').value,
            mass: parsedData.attributes.find((attr: TokenAttribute) => attr.trait_type === 'Mass').value,
            bondType: parsedData.attributes.find((attr: TokenAttribute) => attr.trait_type === 'Bond Type').value,
            bondStrength: parsedData.attributes.find((attr: TokenAttribute) => attr.trait_type === 'Bond Strength').value,
            givingAtoms: parsedData.attributes.find((attr: TokenAttribute) => attr.trait_type === 'Giving Atoms').value,
            receivingAtoms: parsedData.attributes.find((attr: TokenAttribute) => attr.trait_type === 'Receiving Atoms').value,
            electricalConductivity: parsedData.attributes.find((attr: TokenAttribute) => attr.trait_type === 'Electrical Conductivity').value,
            thermalConductivity: parsedData.attributes.find((attr: TokenAttribute) => attr.trait_type === 'Thermal Conductivity').value,
            toughness: parsedData.attributes.find((attr: TokenAttribute) => attr.trait_type === 'Toughness').value,
            hardness: parsedData.attributes.find((attr: TokenAttribute) => attr.trait_type === 'Hardness').value,
            ductility: parsedData.attributes.find((attr: TokenAttribute) => attr.trait_type === 'Ductility').value
        } as OtomMolecule;
    } else {
        console.log('Invalid token type', parsedData.name);
        return null;
    }
  } catch {
    return null;
  }
};

// {"name":"At Otom","image":"https://prod-otoms.s3.us-east-1.amazonaws.com/otoms/fda008503288e5abc370328150d20993fec26efe5707f2d12ab552ebb0da5e26At65--token.png","chipImage":"https://prod-otoms.s3.us-east-1.amazonaws.com/otoms/fda008503288e5abc370328150d20993fec26efe5707f2d12ab552ebb0da5e26At65--chip.png","attributes":[{"trait_type":"Name","value":"At"},{"trait_type":"Series","value":"metal"},{"trait_type":"Protons","value":31},{"trait_type":"Neutrons","value":34},{"trait_type":"Mass","value":65},{"trait_type":"Stability","value":0.9004945367466788},{"trait_type":"Density","value":18.846429493189405},{"trait_type":"Radius","value":1.5108734544550986},{"trait_type":"Electronegativity","value":0.046511627906976744},{"trait_type":"Metallic","value":true},{"trait_type":"Decay Type","value":"alpha"},{"trait_type":"Filled Valence","value":"0-0-0-0-0-1-0-1"},{"trait_type":"Empty Valence","value":"0-0-0-0-0-1-3-2"}]}
