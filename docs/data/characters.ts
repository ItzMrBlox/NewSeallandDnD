export const characters: Character[] = [];

export interface Character {
    Id: number;
    Name: string;
    Player: string;
    Picture: string;
    Background: string;
    Status: Status;
    Class: string;
    Race: string;
    Level: number;
}

export enum Status {
    Active = 1,
    Retired = 2,
    Dead = 3,
    Unknown = 4
}