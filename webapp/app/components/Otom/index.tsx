'use client'

import { OtomTokenType, OtomToken } from '@/lib/encoding';
import Image from 'next/image';
// import OtomSketch from './OtomSketch';

export default function OTOM({ tokenId, otom }: { tokenId: string, otom: OtomToken }) {

    return (
        <div>
            <h2>{otom.name}</h2>
            <Image src={otom.image} alt={otom.name} width={200} height={200} />

            {otom.type === OtomTokenType.Otom && (
                <div>
                    <p>Series: {otom.series}</p>
                    <p>Protons: {otom.protons}</p>
                    <p>Neutrons: {otom.neutrons}</p>
                    {/* <OtomSketch /> */}
                </div>
            )}
        </div>
    );
}
