const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(`Random number is: ${randomNumber}`);  // Add this line to log the random number

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/check', (req, res) => {
  const userGuess = parseInt(req.query.guess, 10);

  if (userGuess > randomNumber) {
    res.send('Too high!');
  } else if (userGuess < randomNumber) {
    res.send('Too low!');
  } else {
    res.send('Correct! You guessed the number!');
    // Generate a new random number for the next game
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`New random number is: ${randomNumber}`);  // Log the new random number
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
