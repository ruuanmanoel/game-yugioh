const state={
    score:{
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById('score_points')
    },
    cardSprites:{
        avatar: document.getElementById('card-image'),
        name: document.getElementById('card-name'),
        type: document.getElementById('card-type')
    },
    fieldCard:{
        player: document.getElementById('player-field-card'),
        computer: document.getElementById('computer-field-card'),
    },
    actions:{
        button: document.getElementById('next-duel'),
    }
}
const playerSide={
    player1: "player-field-card",
    computer: "computer-field-card",
}
const pathImages = ".src/assets/icons/"
const cardData =[
    {
        id:0,
        name: "Blues Eyes White Dragon",
        type: "Paper",
        img: `${pathImages}dragon.png`,
        WinOf: [1],
        LoseOf: [2]
    },
    {
        id:1,
        name: "Dark Magician",
        type: "Rock",
        img: `${pathImages}magician.png`,
        WinOf: [2],
        LoseOf: [0]
    },
    {
        id:2,
        name: "Exodian",
        type: "Scissors",
        img: `${pathImages}dragon.png`,
        WinOf: [0],
        LoseOf: [1]
    }
]
async function drawCards(cardNumbers,fieldSide) {
    for(let i =0; i< cardNumbers; i++){
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard,fieldSide);
        document.getElementById(fieldSide).appendChild(cardImage);
    }
}
function init(){
    drawCards(5,playerSide.player1);
    drawCards(5,playerSide.computer);
}
init();