// function play(){
//     const homeScreen = document.getElementById('home-screen')
//     homeScreen.classList.add('hidden')
//     const palyGroundSection = document.getElementById('play-ground')
//     palyGroundSection.classList.remove('hidden')
// }

function continueGame(){
    // step - 1: gemerate a random aplhabet
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet is:', alphabet)
}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}
