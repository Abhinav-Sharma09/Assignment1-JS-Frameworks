// Import the fs module
const fs = require('fs');

// Read the text file asynchronously
readFile('file.txt', 'utf8', (err, data) => {
  // Handle any errors
  if (err) {
    console.error(err);
    return;
  }
  // Output the content of the file to the console
  console.log(data);
});
