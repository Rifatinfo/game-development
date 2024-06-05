
/*  first option  */
//  function play(){
//     // step-1 hide the home screen 
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // show the playground 
//     const playgroundSection = document.getElementById('play-ground')
//     // console.log(playgroundSection.classList);
//     playgroundSection.classList.remove('hidden');
// }
function handleKeyBoardButtonPress(event){
    const playerPressed = event.key;
    //console.log('player pressed', playerPressed);
  // stop game 
  if(playerPressed === 'Escape'){
     gameOver();
  }
    // get the expected to press 
    const currentAlphabetsElement = document.getElementById('current-alphabets');
    const currentAlphabet = currentAlphabetsElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(currentAlphabet, expectedAlphabet);

    //checked match 
    if(playerPressed === expectedAlphabet){
       console.log('you got a point');
   /* 
      // get the current score 
      const currentScoreElement = document.getElementById('current-score');
      const currentScoreText = currentScoreElement.innerText;
      const currentScore = parseInt(currentScoreText);
      console.log(currentScore);
      
       // increase the score by 1 
        const newScore = currentScore + 1; 
       
        // show the update score 
        currentScoreElement.innerText = newScore;
        // start a new round 
    */
   const currentScore  = getTextElementValueById('current-score');
   const updateScore = currentScore + 1;
   setTextElementValueById('current-score', updateScore);


       console.log('you have pressed correctly', expectedAlphabet);
       removeBackgroundColorById(expectedAlphabet);
       continueGame();
    }
    else{
        console.log('you missed. you lost a life');

       /* 
        // get the current life number 
    const currentLifeElement = document.getElementById('current-life');
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);

        // reduce the life life count 
    const newLife = currentLife - 1; 

        // display the update life count 
        currentLifeElement.innerText = newLife;

        */
       const currentLife = getTextElementValueById('current-life');
       const updateLife = currentLife - 1 ; 
       setTextElementValueById('current-life', updateLife);

       if(updateLife === 0){
        gameOver();
         
       }
    }
}  

// capture keyboard key press 
document.addEventListener('keyup', handleKeyBoardButtonPress);



function continueGame(){
    // step - 2 :  generate a random alphabet
   const alphabet = getARandomAlphabet();
   console.log('your random alphabets', alphabet);

   //set randomly generated alphabet to the screen (show it)
   const currentAlphabetsElement = document.getElementById('current-alphabets');
   currentAlphabetsElement.innerText = alphabet;

   // set backGround color 
   setBackgroundColorById(alphabet);
}


/*  second option    */
function play(){
    // hide everything show only the playground 
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // score and life 
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);
    continueGame()
}

function gameOver(){
   hideElementById('play-ground');
   showElementById('final-score');

   // update final score 
   const lastScore = getTextElementValueById('current-score');
   setTextElementValueById('last-score', lastScore);

   // clear the last selected alphabet 
   const currentAlphabet =  getElementTextById('current-alphabets');
//    console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}

