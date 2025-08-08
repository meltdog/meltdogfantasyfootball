/*   STEP 1   */
export const leagueID = "1180084055259652096"; // your league ID
export const leagueName = "Meltdog Fantasy Football"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Meltdog Fantasy Football (MFF) is a thriving fantasy football league that brings together 12 passionate competitors in a highly engaging environment. Established in 2022 and commissioned by Caleb "Meltdog" Melton, MFF is hosted on the Sleeper app and has grown into a hallmark of camaraderie, competition, and football fanaticism. Caleb’s leadership has been instrumental in cultivating a league culture that is equal parts spirited rivalry and genuine community.</p>
  <p>To ensure the rich history of the league is preserved, MFF has expanded beyond the digital field. A dedicated website serves as a dynamic, living archive—a repository for records, game histories, trades, playoff brackets, and the stories behind the fiercest rivalries. This evolving platform captures the essence of MFF, transforming it into more than a league. It is a chronicle of its members' journeys, triumphs, and unforgettable moments.</p>
  <p>Fantasy football isn’t just a pastime for Caleb; it’s a driving force that fuels his creativity and commitment as commissioner. His journey began with TikTok, where he shared league updates and highlights with an engaged audience, sparking a creative spark that has since grown into a multimedia approach. From the social media spotlight to the extensive league website, Caleb continues to push the boundaries of what it means to manage a fantasy football league, setting a new standard for commissioners everywhere.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "786129701889568768",
      "name": "Caleb Melton",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Kentucky", // (optional)
      "bio": "Commissioner of Meltdog Fantasy Football. Father of the league, the website, and the TikTok account. Passionate lover of the game and destined to win a championship in my own league!",
      "photo": "/managers/meltdog.JPG", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Seth", // Can be anything (usually your rival's name)
        link: 1, // manager array number within this array, or null to link back to all managers page
        image: "/managers/seth.JPG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "DOGS ONLY.",
      "tradingScale": 7, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "806760399406997504",
      "name": "Seth Franklin",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Carrollton", // (optional)
      "bio": "Leader of the greatest team ever assembled, Season 0 Arkansas Franklin.",
      "photo": "/managers/seth.JPG", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Meltdog", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/meltdog.JPG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4039, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Win championships and draft an elite quarterback.",
      "tradingScale": 6, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "806769095004516352",
      "name": "Grayson Kinman",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Carrollton", // (optional)
      "bio": "Season 3 Manager of the Year. Known to put up points. A force to be reckoned with.",
      "photo": "/managers/grayson.JPG", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Ayden", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/ayden.JPG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 7564, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "The best offense is a good offense.",
      "tradingScale": 5, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "808458864050667520",
      "name": "Garrison Brumback",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Carrollton", // (optional)
      "bio": "Holder of the best record in MFF History 12-2 and worst record in MFF History 1-13. Season 1 Manager of the Year. Season 2 Defensive Manager of the Year.",
      "photo": "/managers/brummy.JPG", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Cam", // Can be anything (usually your rival's name)
        link: 4, // manager array number within this array, or null to link back to all managers page
        image: "/managers/cam.JPG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 7564, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Don't listen to the critics... I got my guys, you got yours.",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "808485067943944192",
      "name": "Cameron Butcher",
      "tookOver": 2024, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Carrollton", // (optional)
      "bio": "Leader of a Goon Squad...formerly a Butcher Squad.",
      "photo": "/managers/cam.JPG", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ten", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Garrison", // Can be anything (usually your rival's name)
        link: 3, // manager array number within this array, or null to link back to all managers page
        image: "/managers/brummy.JPG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 9509, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Trust the process.",
      "tradingScale": 7, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "859547886659149824",
      "name": "Landon Isaacs",
      "tookOver": 2023, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Carrollton", // (optional)
      "bio": "Season 2 Rookie Manager of the Year. Maybe the most willing trader in the entirety of the Fantasy Football World.",
      "photo": "/managers/landon.JPG", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Austin", // Can be anything (usually your rival's name)
        link: 9, // manager array number within this array, or null to link back to all managers page
        image: "/managers/austin.JPG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 2133, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Everybody's got a price.",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "860674527070392320",
      "name": "Ayden Taylor",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Carrollton", // (optional)
      "bio": "Season 1 Champion, Season 2 Manager of the Year, Season 2 Offensive Manager of the Year.",
      "photo": "/managers/ayden.JPG", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Grayson", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/grayson.JPG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 7564, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Fade the oldheads.",
      "tradingScale": 7, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "860720020559376384",
      "name": "Neil Abbott",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Carrollton", // (optional)
      "bio": "The first ever back-to-back and multiple time champion in league history. Season 2 Comeback Manager of the Year.",
      "photo": "/managers/neil.JPG", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rudoodoo", // Can be anything (usually your rival's name)
        link: 11, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rudoodoo.JPG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4866, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Stack a good offense like some pancakes.",
      "tradingScale": 3, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "860729485773918208",
      "name": "Luke Taylor",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Carrollton", // (optional)
      "bio": "Regular season winner looking to take that success to the playoffs. Season 1 Rookie of the Year.",
      "photo": "/managers/luke.JPG", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Owen", // Can be anything (usually your rival's name)
        link: 10, // manager array number within this array, or null to link back to all managers page
        image: "/managers/owen.JPG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6801, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Make the playoffs and finish the job.",
      "tradingScale": 5, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "887533042854711296",
      "name": "Austin Hicks",
      "tookOver": 2024, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Carrollton", // (optional)
      "bio": "Season 3 Rookie Manager of the Year. Renowned glazer of Bucky Irving and Tee Higgins.",
      "photo": "/managers/austin.JPG", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2024, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Landon", // Can be anything (usually your rival's name)
        link: 5, // manager array number within this array, or null to link back to all managers page
        image: "/managers/landon.JPG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 11584, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "It's okay to get the guys who have a little bit of Austism.",
      "tradingScale": 6, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "980199599648362496",
      "name": "Owen Stark",
      "tookOver": 2023, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Carrollton", // (optional)
      "bio": "Just happy to be here.",
      "photo": "/managers/owen.JPG", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Luke", // Can be anything (usually your rival's name)
        link: 8, // manager array number within this array, or null to link back to all managers page
        image: "/managers/luke.JPG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 5850, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Build around a charismatic white quarterback.",
      "tradingScale": 4, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 12,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1075602954985521152",
      "name": "Rudoodoo",
      "tookOver": 2024, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Ghent", // (optional)
      "bio": "Courtesy to draft Pat Freiermuth and I do oblige.",
      "photo": "/managers/rudoodoo.JPG", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Neil", // Can be anything (usually your rival's name)
        link: 7, // manager array number within this array, or null to link back to all managers page
        image: "/managers/neil.JPG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 7600, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Get Pat and get things down pat.",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 13,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "808433602726567936",
      "name": "Rudoodoo's Old Account",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Ghent", // (optional)
      "bio": "Due to a forgotten password, Aaron's old account rudoodoo was replaced by rudoodude.",
      "photo": "/managers/rudoodoo.JPG", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Neil", // Can be anything (usually your rival's name)
        link: 7, // manager array number within this array, or null to link back to all managers page
        image: "/managers/neil.JPG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 7600, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "See new Rudoodoo profile.",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 14,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "861360722179895296",
      "name": "Landon Groves",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Carrollton", // (optional)
      "bio": "Former member of Meltdog Fantasy Football.",
      "photo": "/managers/grover.JPG", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Kennedy", // Can be anything (usually your rival's name)
        link: 7, // manager array number within this array, or null to link back to all managers page
        image: "/managers/kennedy.JPG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 2374, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "If they decline the trade, try, try again.",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 15,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "887530694249963520",
      "name": "Parker Sauls",
      "tookOver": 2023, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Carrollton", // (optional)
      "bio": "Meltdog Fantasy Football Enemy #1. Failed to honor his punishment, The Cage, therefore, is serving a ban that can only be lifted by participating in the punishment.",
      "photo": "/managers/parker.JPG", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2023, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6794, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Too sorry to have one.",
      "tradingScale": 5, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 16,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "806769899606237184",
      "name": "Kennedy Daigle",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Carrollton", // (optional)
      "bio": "Former member of Meltdog Fantasy Football. Golf is more my thing.",
      "photo": "/managers/kennedy.JPG", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Grover", // Can be anything (usually your rival's name)
        link: 13, // manager array number within this array, or null to link back to all managers page
        image: "/managers/grover.JPG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4034, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "WRs Win Fantasy.",
      "tradingScale": 9, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 17,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "860694941385502720",
      "name": "Dhane Montgomery",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Carrollton", // (optional)
      "bio": "Former member of Meltdog Fantasy Football. Real football is more my thing.",
      "photo": "/managers/dhane.JPG", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "bal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Tre", // Can be anything (usually your rival's name)
        link: 17, // manager array number within this array, or null to link back to all managers page
        image: "/managers/trevon.JPG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6994, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "If you're going to cheat, don't get caught.",
      "tradingScale": 5, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 18,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "860729520490127360",
      "name": "Trevon Griffin",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Carrollton", // (optional)
      "bio": "Former member of Meltdog Fantasy Football. Fuck Doodoo fatass",
      "photo": "/managers/trevon.JPG", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Dhane", // Can be anything (usually your rival's name)
        link: 16, // manager array number within this array, or null to link back to all managers page
        image: "/managers/dhane.JPG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4988, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Don't sleep on the scout team.",
      "tradingScale": 4, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
