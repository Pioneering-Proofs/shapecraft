'use client'

import OTOM from "@/app/components/Otom";

export default async function TokenPage({
  params
}: {
  params: Promise<{ tokenId: string }>
}) {
  const { tokenId } = await params;

  return (
    <>
      <h1>Token: {tokenId}</h1>
      <OTOM tokenId={tokenId} />
    </>
  );
}
