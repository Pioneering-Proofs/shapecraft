import { ethers } from "ethers";
import dotenv from "dotenv";

const main = async () => {
  dotenv.config();

  const privateKey = process.env.PRIVATE_KEY;
  if (!privateKey) {
    throw new Error("PRIVATE_KEY is not set");
  }

  const rpcUrl = process.env.RPC_URL;
  if (!rpcUrl) {
    throw new Error("RPC_URL is not set");
  }

  const signer = new ethers.Wallet(
    privateKey,
    new ethers.providers.JsonRpcProvider(rpcUrl)
  );

  const address = signer.address;

  const args = {
    address: address,
    universeHash:
      "0xfda008503288e5abc370328150d20993fec26efe5707f2d12ab552ebb0da5e26",
    amount: "5", // This can fetched by calling "miningLimit" on OTOMs contract. Currently limit is 5 - though server doesn't validate this. 
  };
  const miningResponse = await fetch("https://www.otom.xyz/api/miningArgs", {
    body: JSON.stringify(args),
    method: "POST",
  });
  const miningData = JSON.parse(await miningResponse.json());

  // Create contract interface
  const abi = [
    "function mine(((string,string,bytes32,uint256,uint256,(uint256,string),(uint256,uint256,uint256,uint256,uint256,bool,string,string,uint256,uint256,(bytes32,uint256,uint256,uint256,uint256,uint256[],uint256[],uint256[],uint256[]),(uint256,uint256,uint256,uint256,string))[],(uint256,uint256,uint256,uint256,uint256,bool,string,string,uint256,uint256,(bytes32,uint256,uint256,uint256,uint256,uint256[],uint256[],uint256[],uint256[]),(uint256,uint256,uint256,uint256,string))[],uint256,uint256,uint256,uint256,uint256),bytes32,string,bytes32,uint256,bytes)[] _payloads)",
  ];
  const contract = new ethers.Contract(
    "0x2f9810789aebBB6cdC6c0332948fF3B6D11121E3",
    abi,
    signer
  );

  // Format the mining data into the expected structure
  const formattedArgs = miningData.json.args.map((arg) => [
    [
      arg.minedMolecule.id,
      arg.minedMolecule.name,
      arg.minedMolecule.universeHash,
      arg.minedMolecule.activationEnergy,
      arg.minedMolecule.radius,
      [arg.minedMolecule.bond.strength, arg.minedMolecule.bond.bondType],
      arg.minedMolecule.givingAtoms.map((atom) => [
        atom.radius,
        atom.volume,
        atom.mass,
        atom.density,
        atom.electronegativity,
        atom.metallic,
        atom.name,
        atom.series,
        atom.periodicTableX,
        atom.periodicTableY,
        [
          atom.structure.universeHash,
          atom.structure.depth,
          atom.structure.distance,
          atom.structure.distanceIndex,
          atom.structure.shell,
          atom.structure.totalInOuter,
          atom.structure.emptyInOuter,
          atom.structure.filledInOuter,
          atom.structure.ancestors,
        ],
        [
          atom.nucleus.protons,
          atom.nucleus.neutrons,
          atom.nucleus.nucleons,
          atom.nucleus.stability,
          atom.nucleus.decayType,
        ],
      ]),
      arg.minedMolecule.receivingAtoms,
      arg.minedMolecule.activationEnergy,
      arg.minedMolecule.thermalConductivity,
      arg.minedMolecule.toughness,
      arg.minedMolecule.hardness,
      arg.minedMolecule.ductility,
    ],
    arg.miningHash,
    arg.tokenUri,
    arg.universeHash,
    arg.expiry,
    arg.signature,
  ]);

  // Send transaction
  const tx = await contract.mine(formattedArgs);
  console.log("Transaction hash:", tx.hash);
  await tx.wait();
  console.log("Transaction confirmed");
};

main().catch(console.error);

// Response:
// {
//   "json":{
//      "args":[
//         {
//            "minedMolecule":{
//               "id":"fda008503288e5abc370328150d20993fec26efe5707f2d12ab552ebb0da5e26Zz13-",
//               "universeHash":"0xfda008503288e5abc370328150d20993fec26efe5707f2d12ab552ebb0da5e26",
//               "name":"Zz",
//               "givingAtoms":[
//                  {
//                     "name":"Zz",
//                     "series":"noble",
//                     "structure":{
//                        "universeHash":"0xfda008503288e5abc370328150d20993fec26efe5707f2d12ab552ebb0da5e26",
//                        "depth":"2000000000000000000",
//                        "distance":"1012332813697867095",
//                        "distanceIndex":"7000000000000000000",
//                        "shell":"1000000000000000000",
//                        "totalInOuter":[
//                           "0",
//                           "2000000000000000000",
//                           "2000000000000000000",
//                           "0",
//                           "0",
//                           "0",
//                           "0",
//                           "0"
//                        ],
//                        "emptyInOuter":[
//                           "0",
//                           "0",
//                           "0",
//                           "0",
//                           "0",
//                           "0",
//                           "0",
//                           "0"
//                        ],
//                        "filledInOuter":[
//                           "0",
//                           "2000000000000000000",
//                           "2000000000000000000",
//                           "0",
//                           "0",
//                           "0",
//                           "0",
//                           "0"
//                        ],
//                        "ancestors":[
//                           "7000000000000000000",
//                           "4000000000000000000",
//                           "0"
//                        ]
//                     },
//                     "nucleus":{
//                        "protons":"7000000000000000000",
//                        "neutrons":"6000000000000000000",
//                        "nucleons":"13000000000000000000",
//                        "stability":"525442449207681239",
//                        "decayType":"beta+"
//                     },
//                     "radius":"794515402473596755",
//                     "volume":"501541601712233387",
//                     "mass":"13000000000000000000",
//                     "density":"25920083110989732944",
//                     "electronegativity":"0",
//                     "metallic":false,
//                     "periodicTableX":"2000000000000000000",
//                     "periodicTableY":"8000000000000000000"
//                  }
//               ],
//               "receivingAtoms":[

//               ],
//               "bond":{
//                  "strength":"0",
//                  "bondType":"singleton"
//               },
//               "activationEnergy":"0",
//               "radius":"0",
//               "electricalConductivity":"0",
//               "thermalConductivity":"11963115281995261086",
//               "toughness":"500000000000000000",
//               "hardness":"0",
//               "ductility":"0"
//            },
//            "miningHash":"0x2a8b2c646edcf21801375ac2a5bb7ac0f3423bad9b933404b72374dcc5f77e23",
//            "tokenUri":"data:application/json;base64,eyJuYW1lIjoiWnogT3RvbSIsImltYWdlIjoiaHR0cHM6Ly9wcm9kLW90b21zLnMzLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL290b21zL2ZkYTAwODUwMzI4OGU1YWJjMzcwMzI4MTUwZDIwOTkzZmVjMjZlZmU1NzA3ZjJkMTJhYjU1MmViYjBkYTVlMjZaejEzLS10b2tlbi5wbmciLCJjaGlwSW1hZ2UiOiJodHRwczovL3Byb2Qtb3RvbXMuczMudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vb3RvbXMvZmRhMDA4NTAzMjg4ZTVhYmMzNzAzMjgxNTBkMjA5OTNmZWMyNmVmZTU3MDdmMmQxMmFiNTUyZWJiMGRhNWUyNlp6MTMtLWNoaXAucG5nIiwiYXR0cmlidXRlcyI6W3sidHJhaXRfdHlwZSI6Ik5hbWUiLCJ2YWx1ZSI6Ilp6In0seyJ0cmFpdF90eXBlIjoiU2VyaWVzIiwidmFsdWUiOiJub2JsZSJ9LHsidHJhaXRfdHlwZSI6IlByb3RvbnMiLCJ2YWx1ZSI6N30seyJ0cmFpdF90eXBlIjoiTmV1dHJvbnMiLCJ2YWx1ZSI6Nn0seyJ0cmFpdF90eXBlIjoiTWFzcyIsInZhbHVlIjoxM30seyJ0cmFpdF90eXBlIjoiU3RhYmlsaXR5IiwidmFsdWUiOjAuNTI1NDQyNDQ5MjA3NjgxMn0seyJ0cmFpdF90eXBlIjoiRGVuc2l0eSIsInZhbHVlIjoyNS45MjAwODMxMTA5ODk3MzN9LHsidHJhaXRfdHlwZSI6IlJhZGl1cyIsInZhbHVlIjowLjc5NDUxNTQwMjQ3MzU5Njh9LHsidHJhaXRfdHlwZSI6IkVsZWN0cm9uZWdhdGl2aXR5IiwidmFsdWUiOjB9LHsidHJhaXRfdHlwZSI6Ik1ldGFsbGljIiwidmFsdWUiOmZhbHNlfSx7InRyYWl0X3R5cGUiOiJEZWNheSBUeXBlIiwidmFsdWUiOiJiZXRhKyJ9LHsidHJhaXRfdHlwZSI6IkZpbGxlZCBWYWxlbmNlIiwidmFsdWUiOiIwLTItMi0wLTAtMC0wLTAifSx7InRyYWl0X3R5cGUiOiJFbXB0eSBWYWxlbmNlIiwidmFsdWUiOiIwLTAtMC0wLTAtMC0wLTAifV19",
//            "universeHash":"0xfda008503288e5abc370328150d20993fec26efe5707f2d12ab552ebb0da5e26",
//            "expiry":"1732836101",
//            "signature":"0x42095f43d0b7b8524d9f2141f5f268b2a23fa309e637b9c721463685f20cd11b20712e0367c9a3e85584b1724a1a04abba60dc8ae1190a19947c696aa4fa04611b"
//         }
//      ]
//   },
//   "meta":{
//      "values":{
//         "args.0.minedMolecule.givingAtoms.0.structure.depth":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.distance":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.distanceIndex":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.shell":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.totalInOuter.0":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.totalInOuter.1":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.totalInOuter.2":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.totalInOuter.3":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.totalInOuter.4":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.totalInOuter.5":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.totalInOuter.6":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.totalInOuter.7":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.emptyInOuter.0":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.emptyInOuter.1":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.emptyInOuter.2":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.emptyInOuter.3":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.emptyInOuter.4":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.emptyInOuter.5":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.emptyInOuter.6":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.emptyInOuter.7":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.filledInOuter.0":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.filledInOuter.1":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.filledInOuter.2":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.filledInOuter.3":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.filledInOuter.4":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.filledInOuter.5":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.filledInOuter.6":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.filledInOuter.7":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.ancestors.0":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.ancestors.1":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.ancestors.2":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.nucleus.protons":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.nucleus.neutrons":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.nucleus.nucleons":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.nucleus.stability":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.radius":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.volume":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.mass":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.density":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.electronegativity":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.periodicTableX":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.periodicTableY":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.bond.strength":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.activationEnergy":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.radius":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.electricalConductivity":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.thermalConductivity":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.toughness":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.hardness":[
//            "bigint"
//         ],
//         "args.0.minedMolecule.ductility":[
//            "bigint"
//         ],
//         "args.0.expiry":[
//            "bigint"
//         ]
//      },
//      "referentialEqualities":{
//         "args.0.minedMolecule.givingAtoms.0.periodicTableX":[
//            "args.0.minedMolecule.givingAtoms.0.structure.depth",
//            "args.0.minedMolecule.givingAtoms.0.structure.totalInOuter.1",
//            "args.0.minedMolecule.givingAtoms.0.structure.totalInOuter.2",
//            "args.0.minedMolecule.givingAtoms.0.structure.filledInOuter.1",
//            "args.0.minedMolecule.givingAtoms.0.structure.filledInOuter.2"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.structure.distanceIndex":[
//            "args.0.minedMolecule.givingAtoms.0.nucleus.protons",
//            "args.0.minedMolecule.givingAtoms.0.structure.ancestors.0"
//         ],
//         "args.0.minedMolecule.activationEnergy":[
//            "args.0.minedMolecule.radius",
//            "args.0.minedMolecule.electricalConductivity",
//            "args.0.minedMolecule.hardness",
//            "args.0.minedMolecule.ductility",
//            "args.0.minedMolecule.bond.strength",
//            "args.0.minedMolecule.givingAtoms.0.electronegativity",
//            "args.0.minedMolecule.givingAtoms.0.structure.totalInOuter.0",
//            "args.0.minedMolecule.givingAtoms.0.structure.totalInOuter.3",
//            "args.0.minedMolecule.givingAtoms.0.structure.totalInOuter.4",
//            "args.0.minedMolecule.givingAtoms.0.structure.totalInOuter.5",
//            "args.0.minedMolecule.givingAtoms.0.structure.totalInOuter.6",
//            "args.0.minedMolecule.givingAtoms.0.structure.totalInOuter.7",
//            "args.0.minedMolecule.givingAtoms.0.structure.emptyInOuter.0",
//            "args.0.minedMolecule.givingAtoms.0.structure.emptyInOuter.1",
//            "args.0.minedMolecule.givingAtoms.0.structure.emptyInOuter.2",
//            "args.0.minedMolecule.givingAtoms.0.structure.emptyInOuter.3",
//            "args.0.minedMolecule.givingAtoms.0.structure.emptyInOuter.4",
//            "args.0.minedMolecule.givingAtoms.0.structure.emptyInOuter.5",
//            "args.0.minedMolecule.givingAtoms.0.structure.emptyInOuter.6",
//            "args.0.minedMolecule.givingAtoms.0.structure.emptyInOuter.7",
//            "args.0.minedMolecule.givingAtoms.0.structure.filledInOuter.0",
//            "args.0.minedMolecule.givingAtoms.0.structure.filledInOuter.3",
//            "args.0.minedMolecule.givingAtoms.0.structure.filledInOuter.4",
//            "args.0.minedMolecule.givingAtoms.0.structure.filledInOuter.5",
//            "args.0.minedMolecule.givingAtoms.0.structure.filledInOuter.6",
//            "args.0.minedMolecule.givingAtoms.0.structure.filledInOuter.7",
//            "args.0.minedMolecule.givingAtoms.0.structure.ancestors.2"
//         ],
//         "args.0.minedMolecule.givingAtoms.0.mass":[
//            "args.0.minedMolecule.givingAtoms.0.nucleus.nucleons"
//         ]
//      }
//   }
// }

// Mint TX args:
// [
//   [
//       [
//           "fda008503288e5abc370328150d20993fec26efe5707f2d12ab552ebb0da5e26Zz13-",
//           "Zz",
//           "0xfda008503288e5abc370328150d20993fec26efe5707f2d12ab552ebb0da5e26",
//           "0",
//           "0",
//           [
//               "0",
//               "singleton"
//           ],
//           [
//               [
//                   "794515402473596755",
//                   "501541601712233387",
//                   "13000000000000000000",
//                   "25920083110989732944",
//                   "0",
//                   "false",
//                   "Zz",
//                   "noble",
//                   "2000000000000000000",
//                   "8000000000000000000",
//                   [
//                       "0xfda008503288e5abc370328150d20993fec26efe5707f2d12ab552ebb0da5e26",
//                       "2000000000000000000",
//                       "1012332813697867095",
//                       "7000000000000000000",
//                       "1000000000000000000",
//                       [
//                           "0",
//                           "2000000000000000000",
//                           "2000000000000000000",
//                           "0",
//                           "0",
//                           "0",
//                           "0",
//                           "0"
//                       ],
//                       [
//                           "0",
//                           "0",
//                           "0",
//                           "0",
//                           "0",
//                           "0",
//                           "0",
//                           "0"
//                       ],
//                       [
//                           "0",
//                           "2000000000000000000",
//                           "2000000000000000000",
//                           "0",
//                           "0",
//                           "0",
//                           "0",
//                           "0"
//                       ],
//                       [
//                           "7000000000000000000",
//                           "4000000000000000000",
//                           "0"
//                       ]
//                   ],
//                   [
//                       "7000000000000000000",
//                       "6000000000000000000",
//                       "13000000000000000000",
//                       "525442449207681239",
//                       "beta+"
//                   ]
//               ]
//           ],
//           [],
//           "0",
//           "11963115281995261086",
//           "500000000000000000",
//           "0",
//           "0"
//       ],
//       "0x2a8b2c646edcf21801375ac2a5bb7ac0f3423bad9b933404b72374dcc5f77e23",
//       "data:application/json;base64,eyJuYW1lIjoiWnogT3RvbSIsImltYWdlIjoiaHR0cHM6Ly9wcm9kLW90b21zLnMzLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL290b21zL2ZkYTAwODUwMzI4OGU1YWJjMzcwMzI4MTUwZDIwOTkzZmVjMjZlZmU1NzA3ZjJkMTJhYjU1MmViYjBkYTVlMjZaejEzLS10b2tlbi5wbmciLCJjaGlwSW1hZ2UiOiJodHRwczovL3Byb2Qtb3RvbXMuczMudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vb3RvbXMvZmRhMDA4NTAzMjg4ZTVhYmMzNzAzMjgxNTBkMjA5OTNmZWMyNmVmZTU3MDdmMmQxMmFiNTUyZWJiMGRhNWUyNlp6MTMtLWNoaXAucG5nIiwiYXR0cmlidXRlcyI6W3sidHJhaXRfdHlwZSI6Ik5hbWUiLCJ2YWx1ZSI6Ilp6In0seyJ0cmFpdF90eXBlIjoiU2VyaWVzIiwidmFsdWUiOiJub2JsZSJ9LHsidHJhaXRfdHlwZSI6IlByb3RvbnMiLCJ2YWx1ZSI6N30seyJ0cmFpdF90eXBlIjoiTmV1dHJvbnMiLCJ2YWx1ZSI6Nn0seyJ0cmFpdF90eXBlIjoiTWFzcyIsInZhbHVlIjoxM30seyJ0cmFpdF90eXBlIjoiU3RhYmlsaXR5IiwidmFsdWUiOjAuNTI1NDQyNDQ5MjA3NjgxMn0seyJ0cmFpdF90eXBlIjoiRGVuc2l0eSIsInZhbHVlIjoyNS45MjAwODMxMTA5ODk3MzN9LHsidHJhaXRfdHlwZSI6IlJhZGl1cyIsInZhbHVlIjowLjc5NDUxNTQwMjQ3MzU5Njh9LHsidHJhaXRfdHlwZSI6IkVsZWN0cm9uZWdhdGl2aXR5IiwidmFsdWUiOjB9LHsidHJhaXRfdHlwZSI6Ik1ldGFsbGljIiwidmFsdWUiOmZhbHNlfSx7InRyYWl0X3R5cGUiOiJEZWNheSBUeXBlIiwidmFsdWUiOiJiZXRhKyJ9LHsidHJhaXRfdHlwZSI6IkZpbGxlZCBWYWxlbmNlIiwidmFsdWUiOiIwLTItMi0wLTAtMC0wLTAifSx7InRyYWl0X3R5cGUiOiJFbXB0eSBWYWxlbmNlIiwidmFsdWUiOiIwLTAtMC0wLTAtMC0wLTAifV19",
//       "0xfda008503288e5abc370328150d20993fec26efe5707f2d12ab552ebb0da5e26",
//       "1732836196",
//       "0x69a2cf15fb7f2217189a9ab5325e6d62c402b3b5648b47a4121652c3d31b8bb75b2fa529ba807c0fd358938e9c1a45b1cbd24ac2ea91c2b2853fc72b75a8c0ff1b"
//   ]
// ]
