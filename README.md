# QR Code Generator

A simple QR Code Generator web application built with Node.js, Express.js, and EJS.

## Project Structure

- `app.js`: Server file containing the main logic for handling GET and POST requests, and serving static files.
- `public/`: Folder containing static files such as images, CSS, and JS files.
    - `css/`: Stylesheets for the web application.
- `views/`: Folder containing ejs files
    - `index.ejs`: JavaScript templating language for generating HTML with plain JavaScript. 
- `index.html`: Main HTML file for the application home page.

## Briefly describe what this code sample does:

This code sample is a basic implementation of a QR Code Generator web application using Node.js, Express.js, and EJS. The application allows users to input a URL, generates a corresponding QR code image, and displays it on a web page. Key features include a stylish display of the QR code, the ability to download the generated QR code image, and responsiveness for various screen sizes.

Here's a brief breakdown of code:

- The application is built using the Express.js framework.
- The server handles a POST request, typically triggered by user input, to generate a QR code dynamically based on the URL provided by the user.
- The main EJS template (index.ejs) plays a central role in presenting the user interface. It includes elements for displaying the generated QR code and button for downloading the QR code.
- QR codes are generated on the server side, ensuring that the encoding process is executed securely and efficiently. The qr-image npm package is utilized for this purpose.
- The application employs CSS styles to enhance the visual appeal of both the QR code and the buttons.
