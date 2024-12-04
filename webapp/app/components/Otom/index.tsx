'use client'

import { OtomTokenType, OtomToken } from '@/lib/encoding';
// import OtomSketch from './OtomSketch';
import OtomOverview from './OtomOverview';

export default function OTOM({ tokenId, otom }: { tokenId: string, otom: OtomToken }) {

    return (
        <div className='w-screen h-full'>
            {otom.type === OtomTokenType.Otom && (
                <div>
                    <OtomOverview otom={otom} tokenId={tokenId} />
                    {/* <OtomSketch otom={otom} /> */}
                </div>
            )}
        </div>
    );
}
