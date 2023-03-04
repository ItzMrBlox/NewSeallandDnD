import { CharacterStatus } from "./characters";

export const NonPlayerCharacters: NonPlayerCharacter[] = [
    {
        Id: 1,
        Name: "Noah Clover",
        Description: "A 70 year old farmer who has been on the island of New Sealland since its earliest days. He is currently living in a small house on the outskirts of Kings Port working as a Kiwi Farmer.",
        Quests: [0],
        Status: CharacterStatus.Alive,
        Location: 0,
        Image: "assets/images/nonplayercharacters/NoahClover.jpg"
    }
]

export interface NonPlayerCharacter {
    Id: number;
    Name: string;
    Description: string;
    Quests: number[];
    Status: CharacterStatus;
    Location: number;
    Image: string;
}