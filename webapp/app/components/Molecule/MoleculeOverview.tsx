import Image from 'next/image'
import { OtomMolecule } from "@/lib/encoding";
import { Card, CardContent, CardHeader, CardTitle, PropertyCard } from "@/app/components/card"
import { Atom, Droplets, Scale, Ruler, Zap, RadiationIcon as RadioactiveFilled, Hexagon } from 'lucide-react'
import { MoleculeConstants } from "@/lib/constants";
import MoleculeSketch from "./MoleculeSketch";


export default function MoleculeOverview({ molecule, tokenId }: { molecule: OtomMolecule, tokenId: string }) {
    // TODO: Use Wagmi to get table of reactions yielding this molecule
    const toughness = molecule.toughness < MoleculeConstants.maxToughness ? ((molecule.toughness / MoleculeConstants.maxToughness) * 100) : 100;
    const hardness = molecule.hardness < MoleculeConstants.maxHardness ? ((molecule.hardness / MoleculeConstants.maxHardness) * 100) : 100;
    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-4xl font-bold mb-2">{molecule.name}</h1>
                    <p className="text-xl text-muted-foreground mb-1">{molecule.bondType}</p>
                    <p className="text-md text-muted-foreground">ID: {tokenId}</p>
                </div>
                <Image src={molecule.chipImage} alt={molecule.name} width={250} height={250} className="rounded-md" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <PropertyCard icon={<Atom className="h-4 w-4 text-muted-foreground" />} label="Mass" value={`${molecule.mass} u`} />
                <PropertyCard icon={<Droplets className="h-4 w-4 text-muted-foreground" />} label="Radius" value={`${molecule.radius} pm`} />
                <PropertyCard icon={<Scale className="h-4 w-4 text-muted-foreground" />} label="Bond Strength" value={molecule.bondStrength} />
                <PropertyCard icon={<Ruler className="h-4 w-4 text-muted-foreground" />} label="Electrical Conductivity" value={molecule.electricalConductivity} />
                <PropertyCard icon={<Zap className="h-4 w-4 text-muted-foreground" />} label="Thermal Conductivity" value={molecule.thermalConductivity} />
                <PropertyCard icon={<RadioactiveFilled className="h-4 w-4 text-muted-foreground" />} label="Activation Energy" value={molecule.activationEnergy} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Atoms</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col space-y-2">
                            <div className="flex flex-col space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">Giving Atoms</span>
                                    <span className="text-sm text-muted-foreground">{molecule.givingAtoms.join(', ')}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">Receiving Atoms</span>
                                    <span className="text-sm text-muted-foreground">{molecule.receivingAtoms.join(', ')}</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Properties</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center">
                                <span className="mr-2">Toughness:</span>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className="bg-blue-600 h-2.5 rounded-full"
                                        style={{ width: `${toughness}%` }}
                                    ></div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="mr-2">Hardness:</span>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className="bg-blue-600 h-2.5 rounded-full"
                                        style={{ width: `${hardness}%` }}
                                    ></div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="mr-2">Ductility:</span>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className="bg-blue-600 h-2.5 rounded-full"
                                        style={{ width: `${molecule.ductility * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Molecule Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <Image src={molecule.image} alt={`${molecule.name} visualization`} width={250} height={300} className="rounded-lg" />
                    </CardContent>
                </Card>
            </div>
            <Card className='mb-16'>
                <CardHeader>
                    <CardTitle>Molecule Visualization</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                    <MoleculeSketch molecule={molecule} />
                </CardContent>
            </Card>
        </div>
    );
}
