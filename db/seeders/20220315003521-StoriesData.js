"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Stories",
            [
                {
                    title: "THIS IS MY STORY",
                    content:
                        "I came to this site, and then i was impressed. THE END.",
                    topicType: "Story",
                    userId: 2,
                    gameId: 7,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "A FUN GAME... IF YOU HAVE FRIENDS",
                    content:
                        "The actual gameplay of Rocket League is pretty fantastic, albeit buggy at times. It's easy to learn and difficult to master. So difficult that it will take you many hundreds of hours to become pro level at it, otherwise you can expect to compete in the lower ranks. Essentially it's soccer played with rocket powered cars. While new players may just drive and jump around the field, experienced players can boost into the air to add a new vertical dimension of strategy.",
                    topicType: "Review",
                    userId: 13,
                    gameId: 13,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "OCARINA OF TIME IS THE GOAT !!!",
                    content:
                        "I have decided to give my opinion on an incredible game critical to the development of the gaming industry. This game had it all-very nice graphics, an epic story, music that could make you feel like a part of the game, replay that kept you going for hours and hours after you had finished the game, and most importantly- amazing gameplay that made you never want to put the game down. This game was the first 3D Zelda at a critical time in the gaming industry, so there was some doubt that it would turn out as great as previous 2D Zelda installments. Fortunately, the final result was everything gamers could have asked for and so much more. Graphics 10/10 The score given for graphics is relative to the other games released around this time, by the way. A look at Ocarina of Time in comparison to other games from the fifth generation show just how visually impressive this game was. Graphics usually aren't a very big part of a game for me, but this game was pretty remarkable. For a game in the 64-bit era to look this great is amazing.",
                    topicType: "Review",
                    userId: 3,
                    gameId: 19,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "I'M ADDICTED TO BREATH OF THE WILD !!",
                    content:
                        "Introduction Why hello there! Welcome to my guide to Nintendo's latest installment in the Legend of Zelda series, The Legend of Zelda: Breath of the Wild. Bringing plenty of new elements to the traditional Zelda formula and completely opening up the world, Breath of the Wild is a huge departure from what the series normally produces, yet feels undoubtedly Legend of Zelda. Breath of the Wild follows Link as he heads off to unite the lands of Hyrule, rescue Princess Zelda and defeat the evil forces of Calamity Ganon (so no real surprises there!). Whilst its gameplay is quite reminiscent of the previous games in the Legend of Zelda series, Breath of the Wold most certainly ups the ante and puts some new and interesting spins on the formula to create something unique and entertaining... to the max.",
                    topicType: "Story",
                    userId: 18,
                    gameId: 20,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "SKYRIM OFFERS TERRIFIC ESCAPISM AND LITTLE ELSE.",
                    content:
                        "The Elder Scrolls V: Skyrim The Good: + A stunning, immersive world to explore + RPG mechanics are both streamlined and extremely deep + Secrets and details cover every inch of the map + Setting’s intricate lore can distract you for hours The Bad: - Creativity disappeared from the series a long time ago - Combat feels weightless and unreal - Quests value quantity over quality - Interface controls are inconsistent and imprecise The Elder Scrolls games have always been much better at the experience than the execution. Every one of them succeeds spectacularly at drawing the player into its world like almost nothing else on the market, but once you start actually doing things in that world, you find that all of the things you can do are completely insubstantial, and the cracks in the fantasy begin to appear. The latest iteration of the series, Skyrim, is no exception. It’s the finest “getting lost in Tolkien’s backyard” simulator since Tolkien first plotted the backyard, but its superlative atmosphere and scale are bogged down by combat, dialogue, and narrative that are all vapid and artificial.",
                    topicType: "Review",
                    userId: 16,
                    gameId: 11,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "A GOOD CASE OF BITING OFF MORE THEN YOU CAN CHEW",
                    content:
                        "The short version...Cyberpunk is not the game that changed gaming, but despite the many failings the game has its not a horrible game even if misleading hype distorted what the game was going to be.",
                    topicType: "Review",
                    userId: 15,
                    gameId: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "IF I CAN MASTER IT, YOU CAN TOO",
                    content:
                        "Step 1: Start a new game Start a new game. A grid of gray squares will appear. Tip Start on the easiest setting, and work your way up to harder settings. Step 2: Click on a square Left-click on any gray square. On a Mac, simply click on it. If there is a mine hidden under the square, you immediately lose the game. If there isn't a mine under the square, there will be a number one through eight indicating how many mines are under the eight adjacent squares. Step 3: Locate other safe squares Determine safe squares by using the uncovered numbers. Lower numbers indicate fewer mines adjacent to that square. If the number is a 1 then there is only one mine around that square, and seven safe squares. Step 4: Flag possible mines Flag squares that you deduce are hiding mines by right-clicking on them. On a Mac, hit the option key at the same time you click the mouse. Tip Improperly flagging a square can cost you the game. Step 5: Locate all the mines Locate all the mines and uncover all the number squares to win the game and become the ultimate minesweeper.",
                    topicType: "Walkthrough",
                    userId: 21,
                    gameId: 29,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "LET ME INTRODUCE YOU TO THE SALTWATER CROCODILE",
                    content:
                        "Even though there is no crocodiles in the ocean and they belong in the swamp biome, I still hold true that a saltwater crocodile could be in the ocean biome.",
                    topicType: "Story",
                    userId: 2,
                    gameId: 28,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "UNCHARTED WATERS II IS THE FIRST GAME I PLAYED.",
                    content:
                        "I beat the game several times, tried to discover as much as I could and had tremendous fun. The game runs smoothly under 256 color mode with win 98 simulation, I used to play on a Win Me system. After all these years I still remember if you visit the store at 2am in Naples you can spend some good amt of money on a ungodly armor which grand you a win on every captain sword fight. Make sure you get that armor ASAP. There was no genuine copy during the time I play. But now, time to pay for a debt I owe for so long.",
                    topicType: "Review",
                    userId: 17,
                    gameId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "FUNNIEST STORY ?",
                    content:
                        "Curious what everyone thinks the funniest Main Story/DLC is. Personally my favorite so far is the Wattle Gobbler Headhunter pack. Torgue is just a funny and outrageous character and everything he says makes me crack up at least a little. Campaign of Carnage is really good and all but something about the jokes in this one are just amazing. My favorite line so far is probably VIOLENCE DOESN'T SOLVE YOUR PROBLEMS, EXCEPT ALL THE ONES THAT IT DOES!",
                    topicType: "Story",
                    userId: 19,
                    gameId: 4,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "THERE IS NO REASON TO NOT BUY THIS GAME",
                    content:
                        "Every person I've ever bought it for or told to buy it has not been disappointed. Not only that, but it inspired me to read all 7 of the books and play through Witcher 1 & 2. This game continues to live with me everyday even after I finished it a year ago. I would have played it sooner if I knew and I will definitely play it again because it's just that good.",
                    topicType: "Review",
                    userId: 5,
                    gameId: 10,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Pokemon Emerald",
                    content:
                        "Steve played pokemon emerald on his gameboy advance",
                    topicType: "Story",
                    userId: 4,
                    gameId: 27,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Stories", null, {});
    },
};
