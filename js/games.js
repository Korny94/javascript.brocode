// API CALL & GET QUERYSTRING


const key = "?key=dfdbb9ccf03946b793f193f9ec243e36";

const apiCall = document.querySelector("#apiCall");

const gameDetails = document.querySelector("#gameDetails");

const gameTitle = document.querySelector("#gameTitle");

const queryString1 = document.location.search;

const params1 = new URLSearchParams(queryString1);

const id1 = params1.get("id");

const url10 = "https://api.rawg.io/api/games" + key;

console.log(id1);



async function createGameList() {
    try {
        const response = await fetch(url10);
        const json = await response.json();

        console.log(json);

        apiCall.innerHTML = "";

        const games = json.results;

        console.log(games)

        games.forEach(function(game) {
            apiCall.innerHTML += `
                <a href="../game.html?id=${game.id}" class="gameCard">
                    <div class="gameBgImg" style="background-image: url(${game.background_image})"></div>
                    <h4>${game.name}</h4>
                </a>
            `
        })

    } catch(err) {
        console.log("ERROR: ", err)
    }
}

createGameList();


const url11 = "https://api.rawg.io/api/games/" + id1 + key;
console.log(url11)

async function fetchGame() {
    try {
        const response = await fetch(url11);
        const details = await response.json();

        const games = details.results;

        console.log(games)

        console.log(details)

        createGameHtml(details);

        gameTitle.innerHTML = details.name;

    } catch(err) {
        console.log("Error");
    }
}

fetchGame();

function createGameHtml(details) {
    gameDetails.innerHTML = `
        <h1>${details.name}</h1>
        <div class="detailGameBgImg" style="background-image: url(${details.background_image})"></div>
        <p>${details.description}</p>
        <time>Released: ${details.released}</time>
    `;

}