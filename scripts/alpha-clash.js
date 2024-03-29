// function play(){
//     const homeScreen = document.getElementById('home-screen')
//     homeScreen.classList.add('hidden')
//     const palyGroundSection = document.getElementById('play-ground')
//     palyGroundSection.classList.remove('hidden')
// }

// function handleKeyboardPressEvent(){
//     console.log('keypressed')
// }

// document.addEventListener('keyup' handleKeyboardPressEvent)

function handleKeyboardPressEvent(event) {
    const playerPressed = event.key;
    const currentAlphabet = document.getElementById('display-random')
    const innerTextofAlphabet = currentAlphabet.innerText
    const expectedAlphabet = innerTextofAlphabet.toLocaleLowerCase()
    // console.log(expectedAlphabet, playerPressed)

    if (expectedAlphabet === playerPressed) {
        console.log('You got a Point')
        console.log('you have pressed correctly', expectedAlphabet)

        // score update 
        // let currentScoreElement = document.getElementById('current-score')
        // const currentScoreInnerText = currentScoreElement.innerText
        // const currentScore = parseFloat(currentScoreInnerText)
        // console.log(currentScore)
        // const newScore = currentScore + 1
        // currentScoreElement.innerText = newScore
        // start a new round 

        // alternative or function way 

        const currentScore = getTextElementValueById('current-score')
        console.log(currentScore)
        const updatedScore = currentScore + 1
        setTextElementValueId('current-score', updatedScore)

        continueGame()
        removeBackgroundColorById(expectedAlphabet)
    }
    else {
        console.log('You lost a Life')
        // let currentLifeElement = document.getElementById('current-life')
        // const currentLifeInnertext = currentLifeElement.innerText
        // const currentLife = parseFloat(currentLifeInnertext)
        // let newLife = currentLife -1
        // currentLifeElement.innerText = newLife

        // alternative or function way 

        const currentlife = getTextElementValueById('current-life')
        const updatedLife = currentlife - 1
        setTextElementValueId('current-life', updatedLife)
        if (updatedLife === 0) {
            gameover()
        }

    }
}

document.addEventListener('keyup', handleKeyboardPressEvent)


function continueGame() {

    const alphabet = getARandomAlphabet();
    // console.log('Your random Alphabet:', alphabet)
    const displayRandom = document.getElementById("display-random")
    displayRandom.innerText = alphabet
    setBackgroundColorById(alphabet)

}

function play() {
    // hide everything but payground
    hideElementById('home-screen');
    hideElementById('score')
    showElementById('play-ground');
    // reset score and life
    setTextElementValueId('current-life', 5)
    setTextElementValueId('current-score', 0)

    continueGame()
}


function gameover() {
    hideElementById('play-ground')
    showElementById('score')
    // update final score 
    const lastScore = getTextElementValueById('current-score')   
    setTextElementValueId('final-score', lastScore)
    
    // clear the last alphabet 
    const currentAlphabet = getElementTextById('display-random')
    // console.log(currentAlphabet)
    removeBackgroundColorById(currentAlphabet)
}
