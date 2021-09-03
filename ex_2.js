
function replaceSentence() {

const sentence = "Hello my dog";
const lettersToChange = 2;
const replacePart = "lal";

var x = sentence;
var arr = x.split(""); 
arr.splice(lettersToChange,1,replacePart);
var result = arr.join("");
console.log(result);
  }
  replaceSentence();

    
 











