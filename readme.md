# PDF Photo Generator

## Why
I didn't want to upload documents online to generate a PDF file, and I also wanted to avoid paying subscriptions for programs that I would use infrequently.

## What it does (MVP)
Takes a folder of photos and creates a PDF file from the photos. Each photo takes up a single page, and each page is A4 standardized for regular printing paper.

## How to use
1. Clone this project:
    ``` 
    git clone https://github.com/gcmoony/pdfFun.git
    ```
2. Open a terminal and navigate to your project

3. Install dependancies
    ```
    npm install
    ```
4. Add your images to `./assets`
5. Run the program via terminal
    ```
      node ./CreatePDF.js
    ```
## Future plans, maybe
- [Complete] ~~Allow program to work with any number of photos~~
- Allow naming of PDF file without modifying source code
- [Complete] ~~Allow program to enumerate through each photo, regardless of photo name convention~~
- Web interface to allow file upload
  - Organization of photos
  - Download PDF after generation


## Got an idea?
Submit an issue, or maybe a pull request. I like ideas!


## Other info
This project utilizes [pdfkit](https://pdfkit.org/), which is a JavaScript PDF generation library for Node. Please check out the [repository here](https://github.com/foliojs/pdfkit).