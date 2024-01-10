// Importing libraries
const PDFDoc = require('pdfkit');
const fs = require('node:fs');

// Creating the PDF file and writing to system

// Standard printer paper size
const doc = new PDFDoc({size: 'A4'});
doc.pipe(fs.createWriteStream("./myFile.pdf"));

// Adding each file to the PDF
// Each image in its own page
for(let i = 1; i < 19; i++ ) {

    // Based on file name convention for now...
    if(i < 10) {
        doc.image(`./assets/0${i}.jpg`,0, 0, {width: 595.28, height: 841.89});
    }
     if(i > 9) {
        doc.image(`./assets/${i}.jpg`,0, 0, {width: 595.28, height: 841.89});
    }


    if(i < 18) {
        doc.addPage();
    }
    
}


// Close PDF
doc.end();