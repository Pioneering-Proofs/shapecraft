import { ethers, getNamedAccounts } from "hardhat";
import { Otoms__factory, Reactor__factory, OtomsDatabaseV2__factory } from "@/types";
import { parseTokenURI } from "@/utils";

async function main() {
    const { otomToken, otomDatabase } = await getNamedAccounts();
    const signers = await ethers.getSigners();
    const otoms = Otoms__factory.connect(otomToken, signers[0]);
    const database = OtomsDatabaseV2__factory.connect(otomDatabase, signers[0]);

    const mints = await otoms.queryFilter(
        otoms.filters.OtomMined()
    );

    for (const mint of mints) {
        const [miner, universeHash, tokenId, miningHash] = mint.args;
        const otomUri = await otoms.uri(tokenId);
        const parsedOtom = parseTokenURI(otomUri);
        console.log(`Minted Otom: ${tokenId.toString()} by ${miner} with URI: ${otomUri}`);
        console.log('parsedOtom :>>', parsedOtom);
    }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

