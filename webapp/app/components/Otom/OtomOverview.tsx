import Image from 'next/image'
import { OtomToken } from "@/lib/encoding";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/card"
import { Atom, Droplets, Scale, Ruler, Zap, RadiationIcon as RadioactiveFilled, Hexagon } from 'lucide-react'
import OtomSketch from './OtomSketch';

interface OtomPropertyProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

const OtomProperty: React.FC<OtomPropertyProps> = ({ icon, label, value }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{label}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
    </CardContent>
  </Card>
)

const ValenceElectrons: React.FC<{ filled: number[]; empty: number[] }> = ({ filled, empty }) => (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex justify-center space-x-2">
        {filled.map((shell, index) => (
          <div key={`filled-${index}`} className="relative">
            <Hexagon className="w-8 h-8 text-blue-500" />
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
              {shell}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-2">
        {empty.map((shell, index) => (
          <div key={`empty-${index}`} className="relative">
            <Hexagon className="w-8 h-8 text-gray-300" />
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-200">
              {shell}
            </span>
          </div>
        ))}
      </div>
    </div>
  )

export default function OtomOverview({ otom, tokenId }: { otom: OtomToken, tokenId: string }) {
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">{otom.name}</h1>
          <p className="text-xl text-muted-foreground mb-1">{otom.series}</p>
          <p className="text-md text-muted-foreground">ID: {tokenId}</p>
        </div>
        <Image src={otom.chipImage} alt={otom.name} width={250} height={250} className="rounded-md" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <OtomProperty icon={<Atom className="h-4 w-4 text-muted-foreground" />} label="Protons" value={otom.protons} />
        <OtomProperty icon={<Atom className="h-4 w-4 text-muted-foreground" />} label="Neutrons" value={otom.neutrons} />
        <OtomProperty icon={<Scale className="h-4 w-4 text-muted-foreground" />} label="Mass" value={`${otom.mass} u`} />
        <OtomProperty icon={<Droplets className="h-4 w-4 text-muted-foreground" />} label="Density" value={`${otom.density} g/cm³`} />
        <OtomProperty icon={<Ruler className="h-4 w-4 text-muted-foreground" />} label="Radius" value={`${otom.radius} pm`} />
        <OtomProperty icon={<Zap className="h-4 w-4 text-muted-foreground" />} label="Electronegativity" value={otom.electronegativity} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Properties</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <span className='mr-2'>Series: {otom.series}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">Stability:</span>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${otom.stability * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <RadioactiveFilled className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>Decay Type: {otom.decayType}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Valence Electrons</CardTitle>
          </CardHeader>
          <CardContent>
            <ValenceElectrons filled={otom.filledValence} empty={otom.emptyValence} />
          </CardContent>
        </Card>
        <Card>
        <CardHeader>
          <CardTitle>Otom Stats</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Image src={otom.image} alt={`${otom.name} visualization`} width={250} height={300} className="rounded-lg" />
        </CardContent>
      </Card>
      </div>

      <Card className='mb-16'>
        <CardHeader>
          <CardTitle>Otom Visualization</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
            <OtomSketch otom={otom} />
        </CardContent>
      </Card>
    </div>
  )
}