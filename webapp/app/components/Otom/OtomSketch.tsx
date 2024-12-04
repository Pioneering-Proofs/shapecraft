'use client'

import React from "react";
import { type Sketch } from "@/app/components/P5Wrapper/contracts/Sketch";
import { type SketchProps } from "@/app/components/P5Wrapper/contracts/SketchProps";
import { NextReactP5Wrapper } from "@/app/components/P5Wrapper";
import { OtomToken } from "@/lib/encoding";

type OtomSketchProps = SketchProps & {
    protons: number;
    neutrons: number;
    mass: number;
    radius: number;
    density: number;
    electronegativity: number;
    filledValence: number[];
    emptyValence: number[];
};


const sketch: Sketch<OtomSketchProps> = (p5) => {
    let protons = 0;
    let neutrons = 0;
    let mass = 0;
    let radius = 0;
    let density = 0;
    let electronegativity = 0;
    let filledValence: number[] = [];
    let emptyValence: number[] = [];

    // Array to store electron data
    let electrons: any[] = [];

    p5.setup = () => {
        p5.createCanvas(1_000, 1_000, p5.WEBGL);
        p5.angleMode(p5.RADIANS);
        p5.orbitControl(); // Allows mouse interaction to rotate the view
    };

    p5.updateWithProps = (props) => {
        if (props.protons !== undefined) {
            protons = props.protons;
        }
        if (props.neutrons !== undefined) {
            neutrons = props.neutrons;
        }
        if (props.mass !== undefined) {
            mass = props.mass;
        }
        if (props.radius !== undefined) {
            radius = props.radius;
        }
        if (props.density !== undefined) {
            density = props.density;
        }
        if (props.electronegativity !== undefined) {
            electronegativity = props.electronegativity;
        }
        if (props.filledValence !== undefined) {
            filledValence = props.filledValence;

            // Create electrons based on filledValence
            electrons = [];
            for (let shellIndex = 0; shellIndex < filledValence.length; shellIndex++) {
                const numElectrons = filledValence[shellIndex];
                for (let i = 0; i < numElectrons; i++) {
                    const angle = p5.random(p5.TWO_PI); // Random starting angle
                    electrons.push({
                        shell: shellIndex,
                        angle: angle,
                        speed: 0.02 + p5.random(0.01), // Speed of rotation
                    });
                }
            }
        }
        if (props.emptyValence !== undefined) {
            emptyValence = props.emptyValence;
        }
    };

    const drawNucleus = () => {
        p5.push();
        p5.noStroke();
        p5.fill(255, 0, 0); // Red color for nucleus
        // Size proportional to the number of protons and neutrons
        const nucleusSize = Math.sqrt(protons + neutrons) * 2; // Adjust scaling as needed
        p5.sphere(nucleusSize);
        p5.pop();
    };

    const drawOrbitals = () => {
        p5.noFill();
        p5.stroke(0, 0, 255); // Blue color for orbitals
    
        const maxShells = Math.max(filledValence.length, emptyValence.length);
    
        for (let i = 0; i < maxShells; i++) {
            const orbitalRadius = (i + 1) * 50; // Adjust scaling as needed
    
            p5.push();
            // Remove the rotation since ellipses are in XY plane by default
            p5.ellipse(0, 0, orbitalRadius * 2, orbitalRadius * 2);
            p5.pop();
        }
    };

    const drawElectrons = () => {
        p5.noStroke();
        p5.fill(0, 255, 0); // Green color for electrons

        electrons.forEach((electron) => {
            // Update angle for animation
            electron.angle += electron.speed;

            // Calculate position along the orbital
            const orbitalRadius = (electron.shell + 1) * 50; // Adjust scaling as needed
            const x = orbitalRadius * Math.cos(electron.angle);
            const y = orbitalRadius * Math.sin(electron.angle);
            const z = 0; // Electrons move in the XY plane

            p5.push();
            p5.translate(x, y, z);
            p5.sphere(5); // Size of the electron
            p5.pop();
        });
    };

    p5.draw = () => {
        p5.background(250, 0);

        drawNucleus();
        drawOrbitals();
        drawElectrons();
    };
};

export default function OtomSketch({ otom }: { otom: OtomToken }) {
    return (
        <div className="w-screen h-full">
            <NextReactP5Wrapper
                sketch={sketch}
                protons={otom.protons}
                neutrons={otom.neutrons}
                mass={otom.mass}
                radius={otom.radius}
                density={otom.density}
                electronegativity={otom.electronegativity}
                filledValence={otom.filledValence}
                emptyValence={otom.emptyValence}
            />
        </div>
    );
}
