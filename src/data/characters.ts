export const characters: Character[] = [];

export interface Character {
    Id: number;
    Name: string;
    Player: string;
    Picture: string;
    Background: string;
    Status: CharacterStatus;
    Class: string;
    Race: string;
    Level: number;
}

export enum CharacterStatus {
    Active = 1,
    Retired = 2,
    Alive = 3,
    Deceased = 4,
    Unknown = 5
}