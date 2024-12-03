
export default async function TokenPage({
  params
}: {
  params: Promise<{ tokenId: string }>
}) {
  const { tokenId } = await params;
  
  return (
    <p>Token: {tokenId}</p>
  );
}
