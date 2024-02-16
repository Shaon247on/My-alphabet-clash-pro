// function play(){
//     const homeScreen = document.getElementById('home-screen')
//     homeScreen.classList.add('hidden')
//     const palyGroundSection = document.getElementById('play-ground')
//     palyGroundSection.classList.remove('hidden')
// }

function handleKeyboardButtonPress(){
    console.log('button pressed')
}

document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
    const alphabet = getARandomAlphabet();
    const displayRandom = document.getElementById("display-random")
    displayRandom.innerText = alphabet
    setBackgroundColorById(alphabet)

}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}
