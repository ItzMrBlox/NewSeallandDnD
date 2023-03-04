export interface Quest {
    Id: number;
    Title: string;
    Description: string;
    Difficulty: number;
    Status: Status;
}

export enum Status {
    Active,
    Inactive,
    Failure,
    Completed
}
export const Quests: Quest[] = [
    {
        Id: 0,
        Title: "The Lost Kiwi",
        Description: "During the Kiwi Festival in Kings Port, a Kiwi was stolen from Noah during the Bandit Attack. The Kiwi was last seen being taken to the forest. Find the Kiwi and return it to the Noah.",
        Status: Status.Completed,
        Difficulty: 2
    },
    {
        Id: 1,
        Title: "Help the Rainforest Squad",
        Description: "The Rainforest Squad is a group of people who are trying to explore the rainforest. They need a squad to go help the Rainforest squad, they hit a roadblock trying to set up the settlement. Please help them clear a path.",
        Status: Status.Inactive,
        Difficulty: 2
    },
    {
        Id: 2,
        Title: "Help the Arid Desert Squad",
        Description: "The Arid Desert Squad is a group of people who are trying to explore the Arid Desert. They have sent a message saying they ran out of water and have not found a way to replenish their water supply and they have been rushed by hordes of monsters. Please help them find a way to replenish their water supply and stop the hordes of monsters.",
        Status: Status.Active,
        Difficulty: 3
    },
    {
        Id: 3,
        Title: "Explore the Mountain Range",
        Description: "There is a huge mountain range in the middle of New Sealland. We need someone to explore the mountain range and find out what is in there. We have sent a squad to explore the mountain range but they have not returned. Please go and explore the mountain range and find out what is in there.",
        Status: Status.Inactive,
        Difficulty: 2
    },
];

