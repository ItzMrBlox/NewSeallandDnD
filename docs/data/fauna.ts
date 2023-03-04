export const Monsters: Monster[] = []

export interface Monster {
    Id: number;
    Name: string;
    Description: string;
    Picture: string;
    Variants: Variant[];
}

export interface Variant {
    Region: number;
    Description: string;
}