const fs = require('fs');
const { join } = require('path');
fs.readFile('./hw2.json','utf8',(err,joinString)=>{
    
     const data = JSON.parse(joinString);

        let validBoolean =data.flag;
        if (!typeof validBoolean === "boolean"){
            console.log(validBoolean)
        }
        let validArray = data.myPromices;
        if(!Array.isArray(validArray)){
            console.log(validArray)
        }
        if (!typeof data.element==="object"){
            console.log (data.element);
    }
    let validNull = data.screenshot;
    if(!typeof validNull === "null"){
        console.log (data.screenshot)
    }
    let validString = data.elementText;
    if(!typeof validString === "String"){
        console.log (data.elementText)
    }
    let validCons = data.allElementsText;
    if(!validCons.includes('const')){
        console.log (data.allElementsText)
    }
    let validCounter = data.counter;
    if(!typeof validCounter > 10){
        console.log (data.counter)
    }
    let validConst = data.const;
    if(!validConst.toUpperCase === "FIRst".toUpperCase){
        console.log (data.const)
    }
    let validEqvals = data.config;
    if(!validEqvals === "Common"){
        console.log (data.config)
    }

    let validLenght = data.parameters;
    if(!validLenght.length === 8){
       console.log(validLenght)
   }
   let validMoreString = data.description;
   if(!validMoreString > 5 && !validMoreString < 13){
       console.log (data.element)
    }
   
        else{
        console.log (true);
        }
    
})