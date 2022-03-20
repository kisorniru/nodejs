/*
 * Title: Quotes Library
 * Description: Utility library for getting a list of Quotes.
 * Author: Noor-A-Alam Siddique
 * Date: 20/03/2022
 */

//  Dependencies
const fs = require('fs');

//  Quotes object - Module scaffolding
const quotes = {};

// Get all the quotes and return them to the user.
quotes.allQuotes = function allQuotes() {
    // Read the text file containing the quotes folder.
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf-8');

    //  Turn the string into an array
    const arrayOfQuotes = fileContents.split(/\r?\n/);

    //  Return the array
    return arrayOfQuotes;
};

//  Export the library
module.exports = quotes;
