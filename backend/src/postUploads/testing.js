const fs = require('fs');
const uploadPath = __dirname;

// Check if the destination folder has write permissions
fs.access(uploadPath, fs.constants.W_OK, (err) => {
  if (err) {
    console.error('Error: Destination folder does not have write permissions.');
    // Handle the error, e.g., create the folder with the necessary permissions
  } else {
    console.log('Destination folder has write permissions.');
    // Proceed with file upload or any other operations
  }
});