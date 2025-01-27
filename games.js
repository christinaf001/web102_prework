// Image credits: Kickstarter
const games = ` [
  {
    "name": "Heroes Of Mythic Americas",
    "description": "An exciting 5e RPG supplement that heroically represents pre-Columbian American cultures and mythologies",
    "pledged": 1572,
    "goal": 10000,
    "backers": 9,
    "img": "./assets/heroes_of_mythic_americas.png"
  },
  {
    "name": "Cube Monster",
    "description": "Be the first champion to reach the top of Mount Kubia in a solo or competitive engine building strategy game",
    "pledged": 29446,
    "goal": 20000,
    "backers": 321,
    "img": "./assets/cube_monster.png"
  },
  {
    "name": "Zoo Tycoon: The Board Game",
    "description": "Your zoo in a box with more than 230 Animal Meeples. A highly thematic board game experience for 1-4 players.",
    "pledged": 442602,
    "goal": 78480,
    "backers": 3869,
    "img": "./assets/zoo_tycoon.png"
  },
  {
    "name": "Deity Tarot",
    "description": "A fully illustrated 78-card tarot deck with a divinely exalted take on the famous Smith-Waite tarot deck.",
    "pledged": 109,
    "goal": 8000,
    "backers": 3,
    "img": "./assets/deity_tarot.png"
  },
  {
    "name": "Camouflage | A hand-painting puzzle/adventure game",
    "description": "Paint your own camouflage to retrieve information, access secret locations and remove the threat to your fellow flying squirrels.",
    "pledged": 698,
    "goal": 5140,
    "backers": 9,
    "img": "./assets/camouflage.png"
  },
  {
    "name": "Beep Bapp Boom",
    "description": "The time to explode is getting shorter and shorter, please be alert!",
    "pledged": 44,
    "goal": 18133,
    "backers": 2,
    "img": "./assets/beep_bapp_boom.png"
  },
  {
    "name": "Frosthaven",
    "description": "Euro-inspired dungeon crawling sequel to the 2017 smash hit Gloomhaven",
    "pledged": 69608,
    "goal": 500000,
    "backers": 3193,
    "img": "./assets/frosthaven.png"
  },
  {
    "name": "Mislight - An Adventure Game With A Small Touch Of Thriller",
    "description": "Be the Light in a realm of Darkness",
    "pledged": 1036,
    "goal": 3099,
    "backers": 32,
    "img": "./assets/mislight.png"
  },
  {
    "name": "How to Read Minds 2 Kit: Ellusionist x Peter Turner",
    "description": "Command Attention With These REAL Mind Reading Techniques That Anyone Can Do... The Contents Inside This Kit Will Silence Skeptics.",
    "pledged": 147975,
    "goal": 10000,
    "backers": 1039,
    "img": "./assets/how_to_read_minds_2.png"
  },
  {
    "name": "A Wayfarer's Tale",
    "description": "A Wayfarer's Tale, is a Solo to 4 player game where you explore uncharted islands, collecting Treasure while avoiding Monsters.",
    "pledged": 13039,
    "goal": 1183,
    "backers": 1446,
    "img": "./assets/wayfarers_tale.png"
  },
  {
    "name": "Kingdom Death: Monster 1.5",
    "description": "A cooperative nightmare horror game experience",
    "pledged": 94139,
    "goal": 100000,
    "backers": 9264,
    "img": "./assets/kingdom_death.png"
  }
]
`
const template = `
{
"name": "",
"description": "",
"pledged": 0,
"goal": 0,
"backers": 0,
"img": ""
},
`

export default games;
// Parse the JSON string into an actual JavaScript array
const GAMES_JSON = JSON.parse(games);

// Grab the raisedCard element
const raisedCard = document.getElementById("total-raised");

// Calculate the total amount pledged using reduce
const totalRaised = GAMES_JSON.reduce((total, game) => total + game.pledged, 0);

// Set the inner HTML to display the total amount raised with a dollar sign
raisedCard.innerHTML = `$${totalRaised.toLocaleString()}`;
const fundedGames = GAMES_JSON.filter(game => game.pledged >= game.goal);
const unfundedGames = GAMES_JSON.filter(game => game.pledged < game.goal);

const totalMoneyRaised = fundedGames.reduce((total, game) => total + game.pledged, 0);

// Display the message
const message = `${totalMoneyRaised} has been raised for ${fundedGames.length} games, 
and ${unfundedGames.length} game${unfundedGames.length !== 1 ? 's' : ''} remain unfunded.`;

console.log(message);
// Sort the games based on the pledged amount in descending order
const sortedGames = GAMES_JSON.sort((a, b) => b.pledged - a.pledged);

// Destructure the sorted games to get the top two funded games
const [topGame, secondGame] = sortedGames;

// Get the containers for the top and second games
const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

// Create new elements for the names of the top two funded games
const topGameName = document.createElement('p');
topGameName.textContent = topGame.name;

// Create new elements for the second most funded game
const secondGameName = document.createElement('p');
secondGameName.textContent = secondGame.name;

// Append the game names to their respective containers
firstGameContainer.appendChild(topGameName);
secondGameContainer.appendChild(secondGameName);
