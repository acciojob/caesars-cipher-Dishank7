// Your Script here.

const lookup = {
    'A': 'N','B': 'O','C': 'P','D': 'Q',
    'E': 'R','F': 'S','G': 'T','H': 'U',
    'I': 'V','J': 'W','K': 'X','L': 'Y',
    'M': 'Z','N': 'A','O': 'B','P': 'C',
    'Q': 'D','R': 'E','S': 'F','T': 'G',
    'U': 'H','V': 'I','W': 'J','X': 'K',
    'Y': 'L','Z': 'M', '?': '?', ',': ','
  };

function rot13(encodedStr){
   // console.log(encodedStr[0]);
   let decoderArr = [];
   for(let i = 0; i < encodedStr.length; i++){
       if(lookup[encodedStr[i]] == undefined){
        decoderArr[i] = encodedStr[i];
       }else{
        decoderArr[i] = lookup[encodedStr[i]];
       }
   }
   return decoderArr;
}

console.log(rot13('#MNZD'));

module.exports = rot13;
