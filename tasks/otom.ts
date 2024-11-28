import { task } from "hardhat/config";

task("otom:mint", "Mint OTOM NFTs")
  .addOptionalParam("amount", "The amount of NFTs to mint", "5")
  .addOptionalParam("from", "The address to mint from")
  .setAction(async ({ amount, from }, { ethers, getNamedAccounts }) => {
    const sender = from
      ? await ethers.getSigner(from)
      : (await ethers.getSigners())[0];

    const args = {
      address: sender.address,
      universeHash:
        "0xfda008503288e5abc370328150d20993fec26efe5707f2d12ab552ebb0da5e26",
      amount: amount, // This can fetched by calling "miningLimit" on OTOMs contract. Currently limit is 5 - though server doesn't validate this.
    };
    const miningResponse = await fetch("https://www.otom.xyz/api/miningArgs", {
      body: JSON.stringify(args),
      method: "POST",
    });
    const miningData = JSON.parse(await miningResponse.json());
    const abi = [
      "function mine(((string,string,bytes32,uint256,uint256,(uint256,string),(uint256,uint256,uint256,uint256,uint256,bool,string,string,uint256,uint256,(bytes32,uint256,uint256,uint256,uint256,uint256[],uint256[],uint256[],uint256[]),(uint256,uint256,uint256,uint256,string))[],(uint256,uint256,uint256,uint256,uint256,bool,string,string,uint256,uint256,(bytes32,uint256,uint256,uint256,uint256,uint256[],uint256[],uint256[],uint256[]),(uint256,uint256,uint256,uint256,string))[],uint256,uint256,uint256,uint256,uint256),bytes32,string,bytes32,uint256,bytes)[] _payloads)",
      "event OtomMined(address indexed minedBy, bytes32 indexed universeHash, uint256 indexed atomId, bytes32 creationHash)"
    ];
    const { otomToken } = await getNamedAccounts();
    const contract = new ethers.Contract(
        otomToken,
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
    const receipt = await tx.wait();
    console.log("Transaction confirmed. Minted:");
    const minted: { otom: string, id: string }[] = [];
    receipt.logs.forEach((log) => {
        const parsed = contract.interface.parseLog(log);
        if (parsed !== null && parsed?.args?.atomId) {
            minted.push({
                otom: miningData.json.args[minted.length].minedMolecule.name,
                id: parsed.args.atomId.toString(),
            });
        }
    });
    console.table(minted);
  });

task("otom:burn", "Annihilate OTOM for Energy")
  .addOptionalParam("from", "The address to burn from")
  .addVariadicPositionalParam("ids", "The IDs of the OTOMs to burn")
  .setAction(async ({ ids, from }, { ethers, getNamedAccounts }) => {
    const sender = from
      ? await ethers.getSigner(from)
      : (await ethers.getSigners())[0];

    const abi = ["function annihilate(uint256[] atomIds)"];
    const { otomAnnihilator } = await getNamedAccounts();
    const contract = new ethers.Contract(otomAnnihilator, abi, sender);

    // Send transaction
    const tx = await contract.annihilate(ids.map((id) => ethers.toBigInt(id)));
    console.log("Transaction hash:", tx.hash);
    await tx.wait();
  });
