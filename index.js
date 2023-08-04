
// Generates the random number
const randomNumber1 = Math.floor((Math.random() * 6) + 1);
const randomNumber2 = Math.floor((Math.random() * 6) + 1);

// Creates the image link
const randomDiceeImgSrc1 = "images/dice" + randomNumber1 + ".png";
const randomDiceeImgSrc2 = "images/dice" + randomNumber2 + ".png";


// Access the first players image
let image1 = document.querySelectorAll("img")[0];

// Set its image 
image1.setAttribute("src", randomDiceeImgSrc1);

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceeImgSrc2);


// Updates the h1 according to the who wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = '&#128681 Player 1 Wins!';
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = 'Player 2 Wins! &#128681'
} else {
    document.querySelector("h1").innerHTML = 'Game is tie! &#128528'

}





























// const generateRandomNumber = async () => {
//     const randomNumber = Math.floor((Math.random() * 6) + 1);
//     console.log("🚀 ~ file: index.js:4 ~ generateRandomNumber ~ randomNumber:", randomNumber)
//     return randomNumber
// }
// // generateRandomNumber()

// const playDicee = async () => {
//     const player1 = await generateRandomNumber();
//     const player2 = await generateRandomNumber();

//     console.log("P1 ", player1, "P2", player2);
//     const src1 = `images/dice${player1}.png`;
//     const src2 = `images/dice${player2}.png`
//     document.querySelector("img.img1").setAttribute("src", src1)
//     document.querySelector("img.img2").setAttribute("src", src2)

//     if (player1 > player2) {
//         document.querySelector("h1").innerHTML = '&#128681 Player 1 Wins!';
//     } else if (player1 < player2) {
//         document.querySelector("h1").innerHTML = 'Player 2 Wins! &#128681'
//     } else {
//         document.querySelector("h1").innerHTML = 'Game is tie! &#128528'

//     }

// }


// (async () => {
//     try {
//         await playDicee();
//     } catch (err) {
//         throw new Error("Error", err);
//     }
// })();