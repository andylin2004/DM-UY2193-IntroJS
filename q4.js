// this is a guess the number game, where the in has to be between 0 and 100
function numberGame(number) {
    // if the number is out of range, call it out with an alert
    if (number < 0 && number > 100) {
        alert("That's too high for the game--try something between 0 and 100");
    } else {
        // otherwise, we are making a rng number, we times the rng by 101 and then floor that product, so we have a random from 0 to 100
        let randomNumber = Math.floor(Math.random() * 101);
        if (randomNumber == number) {
            // if the number guess is the same as the number, then we tell that
            alert("You've guessed the number! It was actually " + number);
        } else {
            // otherwise we roast them and tell them that the numbers don't match, and say what is the guess is and what the actual number is
            alert("You failed to guess the number! The actual number is " + randomNumber + ", but you guessed " + number);
        }
    }
}