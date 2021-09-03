const fs = require('fs');
var jsv = require('json-validator');
const {type} = require('os');
const {stringify} = require('querystring');
fs.readFile('./hw2.json', 'utf8', (err, joinString) => {

    const json = JSON.parse(joinString);

    function validText(allElementsText) {
        return {
            isValid: allElementsText.includes('const')
        }
    };

    function validRegistr(constr) {
        return {
            isValid: constr.toUpperCase === "FIRst".toUpperCase,
        }
    };

    function validEquls(config) {
        return {
           isValid: config === "Common"
        }
    }

    function validArray(parameter) {
        return {
         isValid: Object.keys(parameter).length === 8
        }
    }



    var userSchema = {

        flag: {
            required: true,
            isBoolean: true

        },
        myPromices: [
            {type: "number"},
            {type: "number"},
            {type: "string"}],

        element: {
            sa: {type: "number"}
        },
        screenshot: {
            type: null
        },
        elementText: {
            type: "string"
        },

        counter: {
            type: "number",
            min: 10,
            required: true

        },
        allElementsText: {
            type: "string",
            validate: validText

        },
        constr: {
            type: "string",
            validate: validRegistr
        },
        config: {
            type: "string",
            validate: validEquls
        },
        parameters:{
           validate:validArray},




        description: {
            type: "string",
             isLength: [5,13]



        }
    }


    jsv.validate(json, userSchema, function (err, messages) {
        if (err) {
            throw err;
        }

        console.log(JSON.stringify(json, null, 4));
        console.log(JSON.stringify(messages, null, 4,));

    })
});