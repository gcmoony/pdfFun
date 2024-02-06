// Importing libraries
const PDFDoc = require('pdfkit');
const fs = require('node:fs');

// Creating the PDF file and writing to system
// Standard printer paper size
const doc = new PDFDoc({size: 'A4'});
doc.pipe(fs.createWriteStream("./myFile.pdf"));

// Create array of files located in specified folder
let files = fs.readdirSync("./assets")

// Init page counter
let pageCount = 1;


// Adding each file to the PDF
// Each image on its own page
for(let file of files) {
  doc.image(`./assets/${file}`,0, 0, {width: 595.28, height: 841.89});

  // Add a new PDF page for the next image
  if(pageCount <= files.length - 1) {
    doc.addPage();
  }
  pageCount++;
}

// Close PDF
doc.end();