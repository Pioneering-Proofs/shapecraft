'use client'

import { useReadContract } from 'wagmi';
import { OTOMTokenAddress } from '@/lib/constants';
import { OtomsTokenABI } from '@/lib/abis';
import { parseTokenURI, OtomTokenType } from '@/lib/encoding';
import OtomSketch from './OtomSketch';

export default function OTOM({ tokenId }: { tokenId: string }) {
    const { data, error, isPending } = useReadContract({
        address: OTOMTokenAddress,
        abi: OtomsTokenABI,
        functionName: 'uri',
        // args: [BigInt(tokenId)],
        args: [tokenId],
        query: {
            refetchInterval: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
        }
    });

    console.log('Call result :>>', data);

    if (isPending) {
        return <p>Loading...</p>;
    } else if (error) {
        return <p>Error: {error.message}</p>;
    } else if (!data) {
        return <p>No data</p>;
    }

    const parsedData = parseTokenURI(data);

    if (!parsedData) {
        return (
        <>
            <p>Invalid token URI.</p>
            <p>Token URI: {data}</p>
        </>);
    }

    return (
        <div>
            <p>Token: {tokenId}</p>

            <h2>{parsedData.name}</h2>
            <img src={parsedData.image} alt={parsedData.name} />

            {parsedData.type === OtomTokenType.Otom && (
                <div>
                    <p>Series: {parsedData.series}</p>
                    <p>Protons: {parsedData.protons}</p>
                    <p>Neutrons: {parsedData.neutrons}</p>
                    <OtomSketch />
                </div>
            )}

            {parsedData.type === OtomTokenType.Molecule && (
                <div>
                    <p>Activation Energy: {parsedData.activationEnergy}</p>
                    <p>Radius: {parsedData.radius}</p>
                    <p>Mass: {parsedData.mass}</p>
                </div>
            )}
        </div>
    );
}
