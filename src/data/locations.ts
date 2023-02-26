export const locations: Location[] = [
    {
        Id: 0,
        Name: "Kings Port",
        Description: "Kings Port is the capital of New Sealland. It is a bustling city, with many shops and buildings. The city is surrounded by a large wall, which is guarded by the city guards."
    }
]

export interface Location {
    Id: number;
    Name: string;
    Description: string;
}