'use client'

import { OtomMolecule as Molecule, OtomTokenType } from '@/lib/encoding';
import MoleculeOverview from './MoleculeOverview';

export default function OtomMolecule({ tokenId, molecule }: { tokenId: string, molecule: Molecule }) {
    return (
        <div className='w-screen h-full'>
            {molecule.type === OtomTokenType.Molecule && (
                <div>
                    <MoleculeOverview molecule={molecule} tokenId={tokenId} />
                </div>
            )}
        </div>
    );
}
