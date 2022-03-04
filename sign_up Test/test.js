const assert = require("chai").assert;   //import the chai library
//import the functions
const isLetter = require("./index.js").isLetter;        
const isEmail = require("./index.js").isEmail;
const isLength = require("./index.js").isLength;

//write tests
describe('isLetter', function(){
    it('checking if value is strings', function(){
        let result = isLetter();
        assert.match(result, /^[a-zA-Z]+$/); //the function "match", matches the value from the imorted function to a regular expression
    });
});

describe('isLetter', function(){
    it('checking if value is an email', function(){
        let result = isEmail();
        assert.match(result, /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    });
});

describe('isLength', function(){
    it('checking if value is greaterthan 8', function(){
        let result = isLength();
        assert.match(result, /^([a-zA-Z0-9_-]){8,1000}$/);
    });
});
