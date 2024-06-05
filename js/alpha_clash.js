
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
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}