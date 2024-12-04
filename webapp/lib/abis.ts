export const OtomsDatabaseAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "acceptOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "activeUniverses",
    inputs: [],
    outputs: [{ name: "", type: "bytes32[]", internalType: "bytes32[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "encoder",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IOtomsEncoder",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMoleculeByMoleculeId",
    inputs: [{ name: "moleculeId", type: "string", internalType: "string" }],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct Molecule",
        components: [
          { name: "id", type: "string", internalType: "string" },
          { name: "name", type: "string", internalType: "string" },
          {
            name: "universeHash",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "activationEnergy",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "radius", type: "uint256", internalType: "uint256" },
          {
            name: "bond",
            type: "tuple",
            internalType: "struct Bond",
            components: [
              {
                name: "strength",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "bondType", type: "string", internalType: "string" },
            ],
          },
          {
            name: "givingAtoms",
            type: "tuple[]",
            internalType: "struct Atom[]",
            components: [
              {
                name: "radius",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "volume",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "mass", type: "uint256", internalType: "uint256" },
              {
                name: "density",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "electronegativity",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "metallic", type: "bool", internalType: "bool" },
              { name: "name", type: "string", internalType: "string" },
              { name: "series", type: "string", internalType: "string" },
              {
                name: "periodicTableX",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "periodicTableY",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "structure",
                type: "tuple",
                internalType: "struct AtomStructure",
                components: [
                  {
                    name: "universeHash",
                    type: "bytes32",
                    internalType: "bytes32",
                  },
                  {
                    name: "depth",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distance",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distanceIndex",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "shell",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "totalInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "emptyInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "filledInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "ancestors",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                ],
              },
              {
                name: "nucleus",
                type: "tuple",
                internalType: "struct Nucleus",
                components: [
                  {
                    name: "protons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "neutrons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "nucleons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "stability",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "decayType",
                    type: "string",
                    internalType: "string",
                  },
                ],
              },
            ],
          },
          {
            name: "receivingAtoms",
            type: "tuple[]",
            internalType: "struct Atom[]",
            components: [
              {
                name: "radius",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "volume",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "mass", type: "uint256", internalType: "uint256" },
              {
                name: "density",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "electronegativity",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "metallic", type: "bool", internalType: "bool" },
              { name: "name", type: "string", internalType: "string" },
              { name: "series", type: "string", internalType: "string" },
              {
                name: "periodicTableX",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "periodicTableY",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "structure",
                type: "tuple",
                internalType: "struct AtomStructure",
                components: [
                  {
                    name: "universeHash",
                    type: "bytes32",
                    internalType: "bytes32",
                  },
                  {
                    name: "depth",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distance",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distanceIndex",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "shell",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "totalInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "emptyInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "filledInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "ancestors",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                ],
              },
              {
                name: "nucleus",
                type: "tuple",
                internalType: "struct Nucleus",
                components: [
                  {
                    name: "protons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "neutrons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "nucleons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "stability",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "decayType",
                    type: "string",
                    internalType: "string",
                  },
                ],
              },
            ],
          },
          {
            name: "electricalConductivity",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "thermalConductivity",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "toughness", type: "uint256", internalType: "uint256" },
          { name: "hardness", type: "uint256", internalType: "uint256" },
          { name: "ductility", type: "uint256", internalType: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMoleculeByTokenId",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct Molecule",
        components: [
          { name: "id", type: "string", internalType: "string" },
          { name: "name", type: "string", internalType: "string" },
          {
            name: "universeHash",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "activationEnergy",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "radius", type: "uint256", internalType: "uint256" },
          {
            name: "bond",
            type: "tuple",
            internalType: "struct Bond",
            components: [
              {
                name: "strength",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "bondType", type: "string", internalType: "string" },
            ],
          },
          {
            name: "givingAtoms",
            type: "tuple[]",
            internalType: "struct Atom[]",
            components: [
              {
                name: "radius",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "volume",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "mass", type: "uint256", internalType: "uint256" },
              {
                name: "density",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "electronegativity",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "metallic", type: "bool", internalType: "bool" },
              { name: "name", type: "string", internalType: "string" },
              { name: "series", type: "string", internalType: "string" },
              {
                name: "periodicTableX",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "periodicTableY",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "structure",
                type: "tuple",
                internalType: "struct AtomStructure",
                components: [
                  {
                    name: "universeHash",
                    type: "bytes32",
                    internalType: "bytes32",
                  },
                  {
                    name: "depth",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distance",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distanceIndex",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "shell",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "totalInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "emptyInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "filledInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "ancestors",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                ],
              },
              {
                name: "nucleus",
                type: "tuple",
                internalType: "struct Nucleus",
                components: [
                  {
                    name: "protons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "neutrons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "nucleons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "stability",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "decayType",
                    type: "string",
                    internalType: "string",
                  },
                ],
              },
            ],
          },
          {
            name: "receivingAtoms",
            type: "tuple[]",
            internalType: "struct Atom[]",
            components: [
              {
                name: "radius",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "volume",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "mass", type: "uint256", internalType: "uint256" },
              {
                name: "density",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "electronegativity",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "metallic", type: "bool", internalType: "bool" },
              { name: "name", type: "string", internalType: "string" },
              { name: "series", type: "string", internalType: "string" },
              {
                name: "periodicTableX",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "periodicTableY",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "structure",
                type: "tuple",
                internalType: "struct AtomStructure",
                components: [
                  {
                    name: "universeHash",
                    type: "bytes32",
                    internalType: "bytes32",
                  },
                  {
                    name: "depth",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distance",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distanceIndex",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "shell",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "totalInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "emptyInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "filledInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "ancestors",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                ],
              },
              {
                name: "nucleus",
                type: "tuple",
                internalType: "struct Nucleus",
                components: [
                  {
                    name: "protons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "neutrons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "nucleons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "stability",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "decayType",
                    type: "string",
                    internalType: "string",
                  },
                ],
              },
            ],
          },
          {
            name: "electricalConductivity",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "thermalConductivity",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "toughness", type: "uint256", internalType: "uint256" },
          { name: "hardness", type: "uint256", internalType: "uint256" },
          { name: "ductility", type: "uint256", internalType: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMoleculesDiscovered",
    inputs: [
      { name: "universeHash", type: "bytes32", internalType: "bytes32" },
    ],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct Molecule[]",
        components: [
          { name: "id", type: "string", internalType: "string" },
          { name: "name", type: "string", internalType: "string" },
          {
            name: "universeHash",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "activationEnergy",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "radius", type: "uint256", internalType: "uint256" },
          {
            name: "bond",
            type: "tuple",
            internalType: "struct Bond",
            components: [
              {
                name: "strength",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "bondType", type: "string", internalType: "string" },
            ],
          },
          {
            name: "givingAtoms",
            type: "tuple[]",
            internalType: "struct Atom[]",
            components: [
              {
                name: "radius",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "volume",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "mass", type: "uint256", internalType: "uint256" },
              {
                name: "density",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "electronegativity",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "metallic", type: "bool", internalType: "bool" },
              { name: "name", type: "string", internalType: "string" },
              { name: "series", type: "string", internalType: "string" },
              {
                name: "periodicTableX",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "periodicTableY",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "structure",
                type: "tuple",
                internalType: "struct AtomStructure",
                components: [
                  {
                    name: "universeHash",
                    type: "bytes32",
                    internalType: "bytes32",
                  },
                  {
                    name: "depth",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distance",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distanceIndex",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "shell",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "totalInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "emptyInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "filledInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "ancestors",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                ],
              },
              {
                name: "nucleus",
                type: "tuple",
                internalType: "struct Nucleus",
                components: [
                  {
                    name: "protons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "neutrons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "nucleons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "stability",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "decayType",
                    type: "string",
                    internalType: "string",
                  },
                ],
              },
            ],
          },
          {
            name: "receivingAtoms",
            type: "tuple[]",
            internalType: "struct Atom[]",
            components: [
              {
                name: "radius",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "volume",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "mass", type: "uint256", internalType: "uint256" },
              {
                name: "density",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "electronegativity",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "metallic", type: "bool", internalType: "bool" },
              { name: "name", type: "string", internalType: "string" },
              { name: "series", type: "string", internalType: "string" },
              {
                name: "periodicTableX",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "periodicTableY",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "structure",
                type: "tuple",
                internalType: "struct AtomStructure",
                components: [
                  {
                    name: "universeHash",
                    type: "bytes32",
                    internalType: "bytes32",
                  },
                  {
                    name: "depth",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distance",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distanceIndex",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "shell",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "totalInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "emptyInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "filledInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "ancestors",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                ],
              },
              {
                name: "nucleus",
                type: "tuple",
                internalType: "struct Nucleus",
                components: [
                  {
                    name: "protons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "neutrons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "nucleons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "stability",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "decayType",
                    type: "string",
                    internalType: "string",
                  },
                ],
              },
            ],
          },
          {
            name: "electricalConductivity",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "thermalConductivity",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "toughness", type: "uint256", internalType: "uint256" },
          { name: "hardness", type: "uint256", internalType: "uint256" },
          { name: "ductility", type: "uint256", internalType: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMoleculesDiscoveredPaginated",
    inputs: [
      { name: "universeHash", type: "bytes32", internalType: "bytes32" },
      { name: "offset", type: "uint256", internalType: "uint256" },
      { name: "limit", type: "uint256", internalType: "uint256" },
    ],
    outputs: [
      {
        name: "molecules",
        type: "tuple[]",
        internalType: "struct Molecule[]",
        components: [
          { name: "id", type: "string", internalType: "string" },
          { name: "name", type: "string", internalType: "string" },
          {
            name: "universeHash",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "activationEnergy",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "radius", type: "uint256", internalType: "uint256" },
          {
            name: "bond",
            type: "tuple",
            internalType: "struct Bond",
            components: [
              {
                name: "strength",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "bondType", type: "string", internalType: "string" },
            ],
          },
          {
            name: "givingAtoms",
            type: "tuple[]",
            internalType: "struct Atom[]",
            components: [
              {
                name: "radius",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "volume",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "mass", type: "uint256", internalType: "uint256" },
              {
                name: "density",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "electronegativity",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "metallic", type: "bool", internalType: "bool" },
              { name: "name", type: "string", internalType: "string" },
              { name: "series", type: "string", internalType: "string" },
              {
                name: "periodicTableX",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "periodicTableY",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "structure",
                type: "tuple",
                internalType: "struct AtomStructure",
                components: [
                  {
                    name: "universeHash",
                    type: "bytes32",
                    internalType: "bytes32",
                  },
                  {
                    name: "depth",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distance",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distanceIndex",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "shell",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "totalInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "emptyInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "filledInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "ancestors",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                ],
              },
              {
                name: "nucleus",
                type: "tuple",
                internalType: "struct Nucleus",
                components: [
                  {
                    name: "protons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "neutrons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "nucleons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "stability",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "decayType",
                    type: "string",
                    internalType: "string",
                  },
                ],
              },
            ],
          },
          {
            name: "receivingAtoms",
            type: "tuple[]",
            internalType: "struct Atom[]",
            components: [
              {
                name: "radius",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "volume",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "mass", type: "uint256", internalType: "uint256" },
              {
                name: "density",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "electronegativity",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "metallic", type: "bool", internalType: "bool" },
              { name: "name", type: "string", internalType: "string" },
              { name: "series", type: "string", internalType: "string" },
              {
                name: "periodicTableX",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "periodicTableY",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "structure",
                type: "tuple",
                internalType: "struct AtomStructure",
                components: [
                  {
                    name: "universeHash",
                    type: "bytes32",
                    internalType: "bytes32",
                  },
                  {
                    name: "depth",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distance",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distanceIndex",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "shell",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "totalInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "emptyInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "filledInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "ancestors",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                ],
              },
              {
                name: "nucleus",
                type: "tuple",
                internalType: "struct Nucleus",
                components: [
                  {
                    name: "protons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "neutrons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "nucleons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "stability",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "decayType",
                    type: "string",
                    internalType: "string",
                  },
                ],
              },
            ],
          },
          {
            name: "electricalConductivity",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "thermalConductivity",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "toughness", type: "uint256", internalType: "uint256" },
          { name: "hardness", type: "uint256", internalType: "uint256" },
          { name: "ductility", type: "uint256", internalType: "uint256" },
        ],
      },
      { name: "total", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getUniverseInformation",
    inputs: [
      { name: "universeHash", type: "bytes32", internalType: "bytes32" },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct UniverseInformation",
        components: [
          {
            name: "energyFactorBps",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "active", type: "bool", internalType: "bool" },
          { name: "seedHash", type: "bytes32", internalType: "bytes32" },
          { name: "name", type: "string", internalType: "string" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "idToTokenId",
    inputs: [{ name: "id", type: "string", internalType: "string" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        name: "_operators",
        type: "address[]",
        internalType: "address[]",
      },
      { name: "encoderAddress", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "knownUniverses",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "maybeMarkMoleculeAsDiscovered",
    inputs: [
      {
        name: "_molecule",
        type: "tuple",
        internalType: "struct Molecule",
        components: [
          { name: "id", type: "string", internalType: "string" },
          { name: "name", type: "string", internalType: "string" },
          {
            name: "universeHash",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "activationEnergy",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "radius", type: "uint256", internalType: "uint256" },
          {
            name: "bond",
            type: "tuple",
            internalType: "struct Bond",
            components: [
              {
                name: "strength",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "bondType", type: "string", internalType: "string" },
            ],
          },
          {
            name: "givingAtoms",
            type: "tuple[]",
            internalType: "struct Atom[]",
            components: [
              {
                name: "radius",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "volume",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "mass", type: "uint256", internalType: "uint256" },
              {
                name: "density",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "electronegativity",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "metallic", type: "bool", internalType: "bool" },
              { name: "name", type: "string", internalType: "string" },
              { name: "series", type: "string", internalType: "string" },
              {
                name: "periodicTableX",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "periodicTableY",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "structure",
                type: "tuple",
                internalType: "struct AtomStructure",
                components: [
                  {
                    name: "universeHash",
                    type: "bytes32",
                    internalType: "bytes32",
                  },
                  {
                    name: "depth",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distance",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distanceIndex",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "shell",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "totalInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "emptyInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "filledInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "ancestors",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                ],
              },
              {
                name: "nucleus",
                type: "tuple",
                internalType: "struct Nucleus",
                components: [
                  {
                    name: "protons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "neutrons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "nucleons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "stability",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "decayType",
                    type: "string",
                    internalType: "string",
                  },
                ],
              },
            ],
          },
          {
            name: "receivingAtoms",
            type: "tuple[]",
            internalType: "struct Atom[]",
            components: [
              {
                name: "radius",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "volume",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "mass", type: "uint256", internalType: "uint256" },
              {
                name: "density",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "electronegativity",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "metallic", type: "bool", internalType: "bool" },
              { name: "name", type: "string", internalType: "string" },
              { name: "series", type: "string", internalType: "string" },
              {
                name: "periodicTableX",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "periodicTableY",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "structure",
                type: "tuple",
                internalType: "struct AtomStructure",
                components: [
                  {
                    name: "universeHash",
                    type: "bytes32",
                    internalType: "bytes32",
                  },
                  {
                    name: "depth",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distance",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distanceIndex",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "shell",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "totalInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "emptyInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "filledInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "ancestors",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                ],
              },
              {
                name: "nucleus",
                type: "tuple",
                internalType: "struct Nucleus",
                components: [
                  {
                    name: "protons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "neutrons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "nucleons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "stability",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "decayType",
                    type: "string",
                    internalType: "string",
                  },
                ],
              },
            ],
          },
          {
            name: "electricalConductivity",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "thermalConductivity",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "toughness", type: "uint256", internalType: "uint256" },
          { name: "hardness", type: "uint256", internalType: "uint256" },
          { name: "ductility", type: "uint256", internalType: "uint256" },
        ],
      },
      { name: "tokenUri", type: "string", internalType: "string" },
      { name: "_discoveredBy", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "moleculeDiscoveredBy",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "moleculesDiscovered",
    inputs: [
      { name: "", type: "bytes32", internalType: "bytes32" },
      { name: "", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "operators",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pendingOwner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setEncoder",
    inputs: [{ name: "_newEncoder", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setUniverseInformation",
    inputs: [
      {
        name: "_universeInformation",
        type: "tuple",
        internalType: "struct UniverseInformation",
        components: [
          {
            name: "energyFactorBps",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "active", type: "bool", internalType: "bool" },
          { name: "seedHash", type: "bytes32", internalType: "bytes32" },
          { name: "name", type: "string", internalType: "string" },
        ],
      },
    ],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "takenUniverseNames",
    inputs: [{ name: "", type: "string", internalType: "string" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "toggleOperator",
    inputs: [{ name: "_operator", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "toggleUniverseActive",
    inputs: [
      { name: "_universeHash", type: "bytes32", internalType: "bytes32" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "tokenURI",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "universeInformation",
    inputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    outputs: [
      {
        name: "energyFactorBps",
        type: "uint256",
        internalType: "uint256",
      },
      { name: "active", type: "bool", internalType: "bool" },
      { name: "seedHash", type: "bytes32", internalType: "bytes32" },
      { name: "name", type: "string", internalType: "string" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "updateMolecule",
    inputs: [
      {
        name: "_molecule",
        type: "tuple",
        internalType: "struct Molecule",
        components: [
          { name: "id", type: "string", internalType: "string" },
          { name: "name", type: "string", internalType: "string" },
          {
            name: "universeHash",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "activationEnergy",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "radius", type: "uint256", internalType: "uint256" },
          {
            name: "bond",
            type: "tuple",
            internalType: "struct Bond",
            components: [
              {
                name: "strength",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "bondType", type: "string", internalType: "string" },
            ],
          },
          {
            name: "givingAtoms",
            type: "tuple[]",
            internalType: "struct Atom[]",
            components: [
              {
                name: "radius",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "volume",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "mass", type: "uint256", internalType: "uint256" },
              {
                name: "density",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "electronegativity",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "metallic", type: "bool", internalType: "bool" },
              { name: "name", type: "string", internalType: "string" },
              { name: "series", type: "string", internalType: "string" },
              {
                name: "periodicTableX",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "periodicTableY",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "structure",
                type: "tuple",
                internalType: "struct AtomStructure",
                components: [
                  {
                    name: "universeHash",
                    type: "bytes32",
                    internalType: "bytes32",
                  },
                  {
                    name: "depth",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distance",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distanceIndex",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "shell",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "totalInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "emptyInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "filledInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "ancestors",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                ],
              },
              {
                name: "nucleus",
                type: "tuple",
                internalType: "struct Nucleus",
                components: [
                  {
                    name: "protons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "neutrons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "nucleons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "stability",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "decayType",
                    type: "string",
                    internalType: "string",
                  },
                ],
              },
            ],
          },
          {
            name: "receivingAtoms",
            type: "tuple[]",
            internalType: "struct Atom[]",
            components: [
              {
                name: "radius",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "volume",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "mass", type: "uint256", internalType: "uint256" },
              {
                name: "density",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "electronegativity",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "metallic", type: "bool", internalType: "bool" },
              { name: "name", type: "string", internalType: "string" },
              { name: "series", type: "string", internalType: "string" },
              {
                name: "periodicTableX",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "periodicTableY",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "structure",
                type: "tuple",
                internalType: "struct AtomStructure",
                components: [
                  {
                    name: "universeHash",
                    type: "bytes32",
                    internalType: "bytes32",
                  },
                  {
                    name: "depth",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distance",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distanceIndex",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "shell",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "totalInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "emptyInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "filledInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "ancestors",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                ],
              },
              {
                name: "nucleus",
                type: "tuple",
                internalType: "struct Nucleus",
                components: [
                  {
                    name: "protons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "neutrons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "nucleons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "stability",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "decayType",
                    type: "string",
                    internalType: "string",
                  },
                ],
              },
            ],
          },
          {
            name: "electricalConductivity",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "thermalConductivity",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "toughness", type: "uint256", internalType: "uint256" },
          { name: "hardness", type: "uint256", internalType: "uint256" },
          { name: "ductility", type: "uint256", internalType: "uint256" },
        ],
      },
      { name: "_tokenUri", type: "string", internalType: "string" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateTokenURI",
    inputs: [
      { name: "tokenId", type: "uint256", internalType: "uint256" },
      { name: "_tokenUri", type: "string", internalType: "string" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "EncoderUpdated",
    inputs: [
      {
        name: "newEncoder",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MetadataUpdate",
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MoleculeDiscovered",
    inputs: [
      {
        name: "universeHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "tokenId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "discoveredBy",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OperatorToggled",
    inputs: [
      {
        name: "operator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "enabled",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferStarted",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "UniverseActiveToggled",
    inputs: [
      {
        name: "universeHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "active",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  { type: "error", name: "AlreadySeeded", inputs: [] },
  { type: "error", name: "InvalidInitialization", inputs: [] },
  { type: "error", name: "InvalidUniverseName", inputs: [] },
  { type: "error", name: "InvalidUniverseSeed", inputs: [] },
  { type: "error", name: "MoleculeNotDiscovered", inputs: [] },
  { type: "error", name: "NotInitializing", inputs: [] },
  { type: "error", name: "NotOperator", inputs: [] },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
  },
  { type: "error", name: "ReentrancyGuardReentrantCall", inputs: [] },
  { type: "error", name: "TokenUriNotSet", inputs: [] },
  { type: "error", name: "UniverseNameTaken", inputs: [] },
];

export const OtomsTokenABI = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "acceptOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "annihilate",
    inputs: [
      { name: "_atomId", type: "uint256", internalType: "uint256" },
      { name: "_chemist", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      { name: "account", type: "address", internalType: "address" },
      { name: "id", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "balanceOfBatch",
    inputs: [
      { name: "accounts", type: "address[]", internalType: "address[]" },
      { name: "ids", type: "uint256[]", internalType: "uint256[]" },
    ],
    outputs: [{ name: "", type: "uint256[]", internalType: "uint256[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "database",
    inputs: [],
    outputs: [
      { name: "", type: "address", internalType: "contract IOtomsDatabase" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "encoder",
    inputs: [],
    outputs: [
      { name: "", type: "address", internalType: "contract IOtomsEncoder" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "exists",
    inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMiningNonce",
    inputs: [
      { name: "_universeHash", type: "bytes32", internalType: "bytes32" },
      { name: "_chemist", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "handleReactionResult",
    inputs: [
      {
        name: "_reactionResult",
        type: "tuple",
        internalType: "struct ReactionResult",
        components: [
          { name: "universeHash", type: "bytes32", internalType: "bytes32" },
          {
            name: "reactionOutputId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "outputMolecules",
            type: "tuple[]",
            internalType: "struct MoleculeWithUri[]",
            components: [
              {
                name: "molecule",
                type: "tuple",
                internalType: "struct Molecule",
                components: [
                  { name: "id", type: "string", internalType: "string" },
                  { name: "name", type: "string", internalType: "string" },
                  {
                    name: "universeHash",
                    type: "bytes32",
                    internalType: "bytes32",
                  },
                  {
                    name: "activationEnergy",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  { name: "radius", type: "uint256", internalType: "uint256" },
                  {
                    name: "bond",
                    type: "tuple",
                    internalType: "struct Bond",
                    components: [
                      {
                        name: "strength",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "bondType",
                        type: "string",
                        internalType: "string",
                      },
                    ],
                  },
                  {
                    name: "givingAtoms",
                    type: "tuple[]",
                    internalType: "struct Atom[]",
                    components: [
                      {
                        name: "radius",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "volume",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "mass",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "density",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "electronegativity",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      { name: "metallic", type: "bool", internalType: "bool" },
                      { name: "name", type: "string", internalType: "string" },
                      {
                        name: "series",
                        type: "string",
                        internalType: "string",
                      },
                      {
                        name: "periodicTableX",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "periodicTableY",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "structure",
                        type: "tuple",
                        internalType: "struct AtomStructure",
                        components: [
                          {
                            name: "universeHash",
                            type: "bytes32",
                            internalType: "bytes32",
                          },
                          {
                            name: "depth",
                            type: "uint256",
                            internalType: "uint256",
                          },
                          {
                            name: "distance",
                            type: "uint256",
                            internalType: "uint256",
                          },
                          {
                            name: "distanceIndex",
                            type: "uint256",
                            internalType: "uint256",
                          },
                          {
                            name: "shell",
                            type: "uint256",
                            internalType: "uint256",
                          },
                          {
                            name: "totalInOuter",
                            type: "uint256[]",
                            internalType: "uint256[]",
                          },
                          {
                            name: "emptyInOuter",
                            type: "uint256[]",
                            internalType: "uint256[]",
                          },
                          {
                            name: "filledInOuter",
                            type: "uint256[]",
                            internalType: "uint256[]",
                          },
                          {
                            name: "ancestors",
                            type: "uint256[]",
                            internalType: "uint256[]",
                          },
                        ],
                      },
                      {
                        name: "nucleus",
                        type: "tuple",
                        internalType: "struct Nucleus",
                        components: [
                          {
                            name: "protons",
                            type: "uint256",
                            internalType: "uint256",
                          },
                          {
                            name: "neutrons",
                            type: "uint256",
                            internalType: "uint256",
                          },
                          {
                            name: "nucleons",
                            type: "uint256",
                            internalType: "uint256",
                          },
                          {
                            name: "stability",
                            type: "uint256",
                            internalType: "uint256",
                          },
                          {
                            name: "decayType",
                            type: "string",
                            internalType: "string",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: "receivingAtoms",
                    type: "tuple[]",
                    internalType: "struct Atom[]",
                    components: [
                      {
                        name: "radius",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "volume",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "mass",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "density",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "electronegativity",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      { name: "metallic", type: "bool", internalType: "bool" },
                      { name: "name", type: "string", internalType: "string" },
                      {
                        name: "series",
                        type: "string",
                        internalType: "string",
                      },
                      {
                        name: "periodicTableX",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "periodicTableY",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "structure",
                        type: "tuple",
                        internalType: "struct AtomStructure",
                        components: [
                          {
                            name: "universeHash",
                            type: "bytes32",
                            internalType: "bytes32",
                          },
                          {
                            name: "depth",
                            type: "uint256",
                            internalType: "uint256",
                          },
                          {
                            name: "distance",
                            type: "uint256",
                            internalType: "uint256",
                          },
                          {
                            name: "distanceIndex",
                            type: "uint256",
                            internalType: "uint256",
                          },
                          {
                            name: "shell",
                            type: "uint256",
                            internalType: "uint256",
                          },
                          {
                            name: "totalInOuter",
                            type: "uint256[]",
                            internalType: "uint256[]",
                          },
                          {
                            name: "emptyInOuter",
                            type: "uint256[]",
                            internalType: "uint256[]",
                          },
                          {
                            name: "filledInOuter",
                            type: "uint256[]",
                            internalType: "uint256[]",
                          },
                          {
                            name: "ancestors",
                            type: "uint256[]",
                            internalType: "uint256[]",
                          },
                        ],
                      },
                      {
                        name: "nucleus",
                        type: "tuple",
                        internalType: "struct Nucleus",
                        components: [
                          {
                            name: "protons",
                            type: "uint256",
                            internalType: "uint256",
                          },
                          {
                            name: "neutrons",
                            type: "uint256",
                            internalType: "uint256",
                          },
                          {
                            name: "nucleons",
                            type: "uint256",
                            internalType: "uint256",
                          },
                          {
                            name: "stability",
                            type: "uint256",
                            internalType: "uint256",
                          },
                          {
                            name: "decayType",
                            type: "string",
                            internalType: "string",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: "electricalConductivity",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "thermalConductivity",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "toughness",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "hardness",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "ductility",
                    type: "uint256",
                    internalType: "uint256",
                  },
                ],
              },
              { name: "tokenUri", type: "string", internalType: "string" },
            ],
          },
          {
            name: "inputAtomIds",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          { name: "remainingEnergy", type: "uint256", internalType: "uint256" },
          { name: "reactionTypes", type: "string[]", internalType: "string[]" },
          { name: "success", type: "bool", internalType: "bool" },
        ],
      },
      { name: "_chemist", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      { name: "_operators", type: "address[]", internalType: "address[]" },
      { name: "signerAddress", type: "address", internalType: "address" },
      { name: "encoderAddress", type: "address", internalType: "address" },
      { name: "databaseAddress", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "isApprovedForAll",
    inputs: [
      { name: "account", type: "address", internalType: "address" },
      { name: "operator", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "mine",
    inputs: [
      {
        name: "_payloads",
        type: "tuple[]",
        internalType: "struct MiningPayload[]",
        components: [
          {
            name: "minedMolecule",
            type: "tuple",
            internalType: "struct Molecule",
            components: [
              { name: "id", type: "string", internalType: "string" },
              { name: "name", type: "string", internalType: "string" },
              {
                name: "universeHash",
                type: "bytes32",
                internalType: "bytes32",
              },
              {
                name: "activationEnergy",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "radius", type: "uint256", internalType: "uint256" },
              {
                name: "bond",
                type: "tuple",
                internalType: "struct Bond",
                components: [
                  {
                    name: "strength",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  { name: "bondType", type: "string", internalType: "string" },
                ],
              },
              {
                name: "givingAtoms",
                type: "tuple[]",
                internalType: "struct Atom[]",
                components: [
                  { name: "radius", type: "uint256", internalType: "uint256" },
                  { name: "volume", type: "uint256", internalType: "uint256" },
                  { name: "mass", type: "uint256", internalType: "uint256" },
                  { name: "density", type: "uint256", internalType: "uint256" },
                  {
                    name: "electronegativity",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  { name: "metallic", type: "bool", internalType: "bool" },
                  { name: "name", type: "string", internalType: "string" },
                  { name: "series", type: "string", internalType: "string" },
                  {
                    name: "periodicTableX",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "periodicTableY",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "structure",
                    type: "tuple",
                    internalType: "struct AtomStructure",
                    components: [
                      {
                        name: "universeHash",
                        type: "bytes32",
                        internalType: "bytes32",
                      },
                      {
                        name: "depth",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "distance",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "distanceIndex",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "shell",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "totalInOuter",
                        type: "uint256[]",
                        internalType: "uint256[]",
                      },
                      {
                        name: "emptyInOuter",
                        type: "uint256[]",
                        internalType: "uint256[]",
                      },
                      {
                        name: "filledInOuter",
                        type: "uint256[]",
                        internalType: "uint256[]",
                      },
                      {
                        name: "ancestors",
                        type: "uint256[]",
                        internalType: "uint256[]",
                      },
                    ],
                  },
                  {
                    name: "nucleus",
                    type: "tuple",
                    internalType: "struct Nucleus",
                    components: [
                      {
                        name: "protons",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "neutrons",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "nucleons",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "stability",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "decayType",
                        type: "string",
                        internalType: "string",
                      },
                    ],
                  },
                ],
              },
              {
                name: "receivingAtoms",
                type: "tuple[]",
                internalType: "struct Atom[]",
                components: [
                  { name: "radius", type: "uint256", internalType: "uint256" },
                  { name: "volume", type: "uint256", internalType: "uint256" },
                  { name: "mass", type: "uint256", internalType: "uint256" },
                  { name: "density", type: "uint256", internalType: "uint256" },
                  {
                    name: "electronegativity",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  { name: "metallic", type: "bool", internalType: "bool" },
                  { name: "name", type: "string", internalType: "string" },
                  { name: "series", type: "string", internalType: "string" },
                  {
                    name: "periodicTableX",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "periodicTableY",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "structure",
                    type: "tuple",
                    internalType: "struct AtomStructure",
                    components: [
                      {
                        name: "universeHash",
                        type: "bytes32",
                        internalType: "bytes32",
                      },
                      {
                        name: "depth",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "distance",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "distanceIndex",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "shell",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "totalInOuter",
                        type: "uint256[]",
                        internalType: "uint256[]",
                      },
                      {
                        name: "emptyInOuter",
                        type: "uint256[]",
                        internalType: "uint256[]",
                      },
                      {
                        name: "filledInOuter",
                        type: "uint256[]",
                        internalType: "uint256[]",
                      },
                      {
                        name: "ancestors",
                        type: "uint256[]",
                        internalType: "uint256[]",
                      },
                    ],
                  },
                  {
                    name: "nucleus",
                    type: "tuple",
                    internalType: "struct Nucleus",
                    components: [
                      {
                        name: "protons",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "neutrons",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "nucleons",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "stability",
                        type: "uint256",
                        internalType: "uint256",
                      },
                      {
                        name: "decayType",
                        type: "string",
                        internalType: "string",
                      },
                    ],
                  },
                ],
              },
              {
                name: "electricalConductivity",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "thermalConductivity",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "toughness", type: "uint256", internalType: "uint256" },
              { name: "hardness", type: "uint256", internalType: "uint256" },
              { name: "ductility", type: "uint256", internalType: "uint256" },
            ],
          },
          { name: "miningHash", type: "bytes32", internalType: "bytes32" },
          { name: "tokenUri", type: "string", internalType: "string" },
          { name: "universeHash", type: "bytes32", internalType: "bytes32" },
          { name: "expiry", type: "uint256", internalType: "uint256" },
          { name: "signature", type: "bytes", internalType: "bytes" },
        ],
      },
    ],
    outputs: [{ name: "", type: "uint256[]", internalType: "uint256[]" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "miningLimit",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "miningPaused",
    inputs: [],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "moleculeIsAtom",
    inputs: [
      {
        name: "_molecule",
        type: "tuple",
        internalType: "struct Molecule",
        components: [
          { name: "id", type: "string", internalType: "string" },
          { name: "name", type: "string", internalType: "string" },
          { name: "universeHash", type: "bytes32", internalType: "bytes32" },
          {
            name: "activationEnergy",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "radius", type: "uint256", internalType: "uint256" },
          {
            name: "bond",
            type: "tuple",
            internalType: "struct Bond",
            components: [
              { name: "strength", type: "uint256", internalType: "uint256" },
              { name: "bondType", type: "string", internalType: "string" },
            ],
          },
          {
            name: "givingAtoms",
            type: "tuple[]",
            internalType: "struct Atom[]",
            components: [
              { name: "radius", type: "uint256", internalType: "uint256" },
              { name: "volume", type: "uint256", internalType: "uint256" },
              { name: "mass", type: "uint256", internalType: "uint256" },
              { name: "density", type: "uint256", internalType: "uint256" },
              {
                name: "electronegativity",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "metallic", type: "bool", internalType: "bool" },
              { name: "name", type: "string", internalType: "string" },
              { name: "series", type: "string", internalType: "string" },
              {
                name: "periodicTableX",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "periodicTableY",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "structure",
                type: "tuple",
                internalType: "struct AtomStructure",
                components: [
                  {
                    name: "universeHash",
                    type: "bytes32",
                    internalType: "bytes32",
                  },
                  { name: "depth", type: "uint256", internalType: "uint256" },
                  {
                    name: "distance",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distanceIndex",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  { name: "shell", type: "uint256", internalType: "uint256" },
                  {
                    name: "totalInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "emptyInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "filledInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "ancestors",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                ],
              },
              {
                name: "nucleus",
                type: "tuple",
                internalType: "struct Nucleus",
                components: [
                  { name: "protons", type: "uint256", internalType: "uint256" },
                  {
                    name: "neutrons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "nucleons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "stability",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  { name: "decayType", type: "string", internalType: "string" },
                ],
              },
            ],
          },
          {
            name: "receivingAtoms",
            type: "tuple[]",
            internalType: "struct Atom[]",
            components: [
              { name: "radius", type: "uint256", internalType: "uint256" },
              { name: "volume", type: "uint256", internalType: "uint256" },
              { name: "mass", type: "uint256", internalType: "uint256" },
              { name: "density", type: "uint256", internalType: "uint256" },
              {
                name: "electronegativity",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "metallic", type: "bool", internalType: "bool" },
              { name: "name", type: "string", internalType: "string" },
              { name: "series", type: "string", internalType: "string" },
              {
                name: "periodicTableX",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "periodicTableY",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "structure",
                type: "tuple",
                internalType: "struct AtomStructure",
                components: [
                  {
                    name: "universeHash",
                    type: "bytes32",
                    internalType: "bytes32",
                  },
                  { name: "depth", type: "uint256", internalType: "uint256" },
                  {
                    name: "distance",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "distanceIndex",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  { name: "shell", type: "uint256", internalType: "uint256" },
                  {
                    name: "totalInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "emptyInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "filledInOuter",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                  {
                    name: "ancestors",
                    type: "uint256[]",
                    internalType: "uint256[]",
                  },
                ],
              },
              {
                name: "nucleus",
                type: "tuple",
                internalType: "struct Nucleus",
                components: [
                  { name: "protons", type: "uint256", internalType: "uint256" },
                  {
                    name: "neutrons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "nucleons",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "stability",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  { name: "decayType", type: "string", internalType: "string" },
                ],
              },
            ],
          },
          {
            name: "electricalConductivity",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "thermalConductivity",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "toughness", type: "uint256", internalType: "uint256" },
          { name: "hardness", type: "uint256", internalType: "uint256" },
          { name: "ductility", type: "uint256", internalType: "uint256" },
        ],
      },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "operators",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pendingOwner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeBatchTransferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "ids", type: "uint256[]", internalType: "uint256[]" },
      { name: "values", type: "uint256[]", internalType: "uint256[]" },
      { name: "data", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "id", type: "uint256", internalType: "uint256" },
      { name: "value", type: "uint256", internalType: "uint256" },
      { name: "data", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "seedUniverse",
    inputs: [
      {
        name: "_universeInformation",
        type: "tuple",
        internalType: "struct UniverseInformation",
        components: [
          { name: "energyFactorBps", type: "uint256", internalType: "uint256" },
          { name: "active", type: "bool", internalType: "bool" },
          { name: "seedHash", type: "bytes32", internalType: "bytes32" },
          { name: "name", type: "string", internalType: "string" },
        ],
      },
      { name: "expiry", type: "uint256", internalType: "uint256" },
      { name: "signature", type: "bytes", internalType: "bytes" },
    ],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setApprovalForAll",
    inputs: [
      { name: "operator", type: "address", internalType: "address" },
      { name: "approved", type: "bool", internalType: "bool" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setEncoder",
    inputs: [{ name: "_newEncoder", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setMinesDepleted",
    inputs: [
      { name: "_universeHash", type: "bytes32", internalType: "bytes32" },
      { name: "_minesDepleted", type: "bool", internalType: "bool" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setMiningLimit",
    inputs: [
      { name: "_miningLimit", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setMiningPaused",
    inputs: [{ name: "_miningPaused", type: "bool", internalType: "bool" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setSigner",
    inputs: [{ name: "newSigner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [{ name: "interfaceId", type: "bytes4", internalType: "bytes4" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "toggleOperator",
    inputs: [{ name: "_operator", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "universeMinesDepleted",
    inputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "uri",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "ApprovalForAll",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      { name: "approved", type: "bool", indexed: false, internalType: "bool" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "EncoderUpdated",
    inputs: [
      {
        name: "encoder",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MinesDepletedSet",
    inputs: [
      {
        name: "universeHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "minesDepleted",
        type: "bool",
        indexed: true,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MiningLimitSet",
    inputs: [
      {
        name: "miningLimit",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MiningPausedSet",
    inputs: [
      {
        name: "miningPaused",
        type: "bool",
        indexed: true,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OperatorToggled",
    inputs: [
      {
        name: "operator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      { name: "isActive", type: "bool", indexed: true, internalType: "bool" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OtomMined",
    inputs: [
      {
        name: "minedBy",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "universeHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "atomId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "creationHash",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferStarted",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SignerSet",
    inputs: [
      {
        name: "signer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TransferBatch",
    inputs: [
      {
        name: "operator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      { name: "from", type: "address", indexed: true, internalType: "address" },
      { name: "to", type: "address", indexed: true, internalType: "address" },
      {
        name: "ids",
        type: "uint256[]",
        indexed: false,
        internalType: "uint256[]",
      },
      {
        name: "values",
        type: "uint256[]",
        indexed: false,
        internalType: "uint256[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TransferSingle",
    inputs: [
      {
        name: "operator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      { name: "from", type: "address", indexed: true, internalType: "address" },
      { name: "to", type: "address", indexed: true, internalType: "address" },
      { name: "id", type: "uint256", indexed: false, internalType: "uint256" },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "URI",
    inputs: [
      { name: "value", type: "string", indexed: false, internalType: "string" },
      { name: "id", type: "uint256", indexed: true, internalType: "uint256" },
    ],
    anonymous: false,
  },
  { type: "error", name: "ECDSAInvalidSignature", inputs: [] },
  {
    type: "error",
    name: "ECDSAInvalidSignatureLength",
    inputs: [{ name: "length", type: "uint256", internalType: "uint256" }],
  },
  {
    type: "error",
    name: "ECDSAInvalidSignatureS",
    inputs: [{ name: "s", type: "bytes32", internalType: "bytes32" }],
  },
  {
    type: "error",
    name: "ERC1155InsufficientBalance",
    inputs: [
      { name: "sender", type: "address", internalType: "address" },
      { name: "balance", type: "uint256", internalType: "uint256" },
      { name: "needed", type: "uint256", internalType: "uint256" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC1155InvalidApprover",
    inputs: [{ name: "approver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC1155InvalidArrayLength",
    inputs: [
      { name: "idsLength", type: "uint256", internalType: "uint256" },
      { name: "valuesLength", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC1155InvalidOperator",
    inputs: [{ name: "operator", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC1155InvalidReceiver",
    inputs: [{ name: "receiver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC1155InvalidSender",
    inputs: [{ name: "sender", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC1155MissingApprovalForAll",
    inputs: [
      { name: "operator", type: "address", internalType: "address" },
      { name: "owner", type: "address", internalType: "address" },
    ],
  },
  { type: "error", name: "InvalidInitialization", inputs: [] },
  { type: "error", name: "InvalidMiningHash", inputs: [] },
  { type: "error", name: "InvalidSignature", inputs: [] },
  { type: "error", name: "InvalidUniverseHash", inputs: [] },
  { type: "error", name: "MinesDepleted", inputs: [] },
  { type: "error", name: "MiningLimitExceeded", inputs: [] },
  { type: "error", name: "MiningPaused", inputs: [] },
  { type: "error", name: "NotAnAtom", inputs: [] },
  { type: "error", name: "NotInitializing", inputs: [] },
  { type: "error", name: "NotOperator", inputs: [] },
  { type: "error", name: "NotSeeded", inputs: [] },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
  },
  { type: "error", name: "ReentrancyGuardReentrantCall", inputs: [] },
  { type: "error", name: "UniverseSeedingClosed", inputs: [] },
  { type: "error", name: "UsedSignature", inputs: [] },
];
