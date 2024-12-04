import OTOM from "@/app/components/Otom";
import { Otoms__factory } from "@/typechain";
import { OTOMTokenAddress } from "@/lib/constants";
import { productionNetworks } from "@/lib/networks";
import { ethers } from "ethers";
import { parseTokenURI, OtomTokenType } from "@/lib/encoding";

export default async function TokenPage({
  params
}: {
  params: Promise<{ tokenId: string }>
}) {
  const { tokenId } = await params;
  const { rpcUrls } = productionNetworks[0];
  const provider = new ethers.JsonRpcProvider(rpcUrls[0]);
  const contract = Otoms__factory.connect(OTOMTokenAddress, provider);
  const tokenURI = await contract.uri(tokenId);
  const parsedURI = parseTokenURI(tokenURI);
  console.log('parsedURI Server Side :>>', parsedURI);

  return (
    <div className="m-3">
      {(parsedURI && parsedURI.type === OtomTokenType.Otom) && <OTOM tokenId={tokenId} otom={parsedURI} />}
    </div>
  );
}
