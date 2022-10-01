var fs = require('fs');

// Synchronus Processing
const data = fs.readFileSync('./demo.txt', 'utf8');
fs.writeFileSync('./riya.txt', data, 'utf8');



// AsyncResource Processing
fs.readFile('./demo.txt', 'utf8', (err, data) => {
  console.log("Our Text is \n\n\n\n" + data)
  fs.writeFile('./riya.txt', data, 'utf8', (err) => {
    console.log("\n\n\n\nSucessfully wrote data on riya.txt file\n\n\n")
  });
});