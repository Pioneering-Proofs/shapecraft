'use client'

import React from "react";
import { type Sketch } from "@/app/components/P5Wrapper/contracts/Sketch";
import { type SketchProps } from "@/app/components/P5Wrapper/contracts/SketchProps";
import { NextReactP5Wrapper } from "@/app/components/P5Wrapper";
import { OtomMolecule } from "@/lib/encoding";

// export interface OtomToken {
//     type: OtomTokenType.Otom;
//     name: string;
//     image: string;
//     chipImage: string;
//     series: string;
//     protons: number;
//     neutrons: number;
//     mass: number;
//     metallic: boolean;
//     stability: number;
//     density: number;
//     radius: number;
//     electronegativity: number;
//     decayType: string;
//     filledValence: number[];
//     emptyValence: number[];
// }

// export interface OtomMolecule {
//     type: OtomTokenType.Molecule;
//     name: string;
//     image: string;
//     chipImage: string;
//     activationEnergy: number;
//     radius: number;
//     mass: number;
//     bondType: string;
//     bondStrength: number;
//     givingAtoms: string[];
//     receivingAtoms: string[];
//     electricalConductivity: number;
//     thermalConductivity: number;
//     toughness: number;
//     hardness: number;
//     ductility: number;
// }

type MoleculeSketchProps = SketchProps & {
    molecule: OtomMolecule;
};

const sketch: Sketch<MoleculeSketchProps> = (p5) => {
    let radius = 0;
    let mass = 0;
    let bondType = '';
    let bondStrength = 0;
    let givingAtoms: string[] = [];
    let receivingAtoms: string[] = [];

    // Store positions of atoms
    let atomPositions: { x: number; y: number; z: number; type: 'giving' | 'receiving' }[] = [];

    p5.setup = () => {
        p5.createCanvas(1_000, 1_000, p5.WEBGL);
        p5.angleMode(p5.RADIANS);
        p5.orbitControl();
    };

    p5.updateWithProps = (props) => {
        if (props.molecule) {
            radius = props.molecule.radius;
            mass = props.molecule.mass;
            bondType = props.molecule.bondType;
            bondStrength = props.molecule.bondStrength;
            givingAtoms = props.molecule.givingAtoms;
            receivingAtoms = props.molecule.receivingAtoms;

            // Calculate positions for atoms in 3D space
            atomPositions = [];
            const totalAtoms = givingAtoms.length + receivingAtoms.length;
            const angleStep = p5.TWO_PI / totalAtoms;
            
            // Position giving atoms
            givingAtoms.forEach((_, index) => {
                atomPositions.push({
                    x: p5.cos(angleStep * index) * 100,
                    y: p5.sin(angleStep * index) * 100,
                    z: 0,
                    type: 'giving'
                });
            });

            // Position receiving atoms
            receivingAtoms.forEach((_, index) => {
                atomPositions.push({
                    x: p5.cos(angleStep * (index + givingAtoms.length)) * 100,
                    y: p5.sin(angleStep * (index + givingAtoms.length)) * 100,
                    z: 0,
                    type: 'receiving'
                });
            });
        }
    };

    const drawAtoms = () => {
        atomPositions.forEach((pos) => {
            p5.push();
            p5.translate(pos.x, pos.y, pos.z);
            p5.noStroke();
            
            // Different colors for giving vs receiving atoms
            if (pos.type === 'giving') {
                p5.fill(255, 100, 100); // Red-ish for giving atoms
            } else {
                p5.fill(100, 100, 255); // Blue-ish for receiving atoms
            }
            
            p5.sphere(20); // Size based on atom
            p5.pop();
        });
    };

    const drawBonds = () => {
        p5.stroke(200);
        p5.strokeWeight(bondStrength * 2); // Bond thickness based on strength

        // Draw connections between atoms
        for (let i = 0; i < atomPositions.length; i++) {
            for (let j = i + 1; j < atomPositions.length; j++) {
                const a1 = atomPositions[i];
                const a2 = atomPositions[j];
                
                // Draw line between atoms
                p5.line(a1.x, a1.y, a1.z, a2.x, a2.y, a2.z);
            }
        }
    };

    p5.draw = () => {
        p5.background(250, 0);
        p5.rotateY(p5.frameCount * 0.01); // Gentle rotation

        drawBonds();
        drawAtoms();
    };
};

export default function MoleculeSketch({ molecule }: { molecule: OtomMolecule }) {
    return (
        <div className="w-full h-full bg-slate-900 rounded-xl">
            <NextReactP5Wrapper
                sketch={sketch}
                molecule={molecule}
            />
        </div>
    );
}
