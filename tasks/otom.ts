import { task } from "hardhat/config";

task("otom:mint", "Mint OTOM NFTs")
  .addOptionalParam("amount", "The amount of NFTs to mint", "5")
  .addOptionalParam("from", "The address to mint from")
  .setAction(async ({ amount, from }, { ethers, network }) => {
    const sender = from
      ? await ethers.getSigner(from)
      : (await ethers.getSigners())[0];

    if (network.name === "shape") {
      const args = {
        address: sender.address,
        universeHash:
          "0xfda008503288e5abc370328150d20993fec26efe5707f2d12ab552ebb0da5e26",
        amount: amount, // This can fetched by calling "miningLimit" on OTOMs contract. Currently limit is 5 - though server doesn't validate this.
      };
      const miningResponse = await fetch(
        "https://www.otom.xyz/api/miningArgs",
        {
          body: JSON.stringify(args),
          method: "POST",
        }
      );
      const miningData = JSON.parse(await miningResponse.json());
      const abi = [
        "function mine(((string,string,bytes32,uint256,uint256,(uint256,string),(uint256,uint256,uint256,uint256,uint256,bool,string,string,uint256,uint256,(bytes32,uint256,uint256,uint256,uint256,uint256[],uint256[],uint256[],uint256[]),(uint256,uint256,uint256,uint256,string))[],(uint256,uint256,uint256,uint256,uint256,bool,string,string,uint256,uint256,(bytes32,uint256,uint256,uint256,uint256,uint256[],uint256[],uint256[],uint256[]),(uint256,uint256,uint256,uint256,string))[],uint256,uint256,uint256,uint256,uint256),bytes32,string,bytes32,uint256,bytes)[] _payloads)",
      ];
      const contract = new ethers.Contract(
        "0x2f9810789aebBB6cdC6c0332948fF3B6D11121E3",
        abi,
        sender
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
    }
  });
