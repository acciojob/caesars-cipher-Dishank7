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
     let decoderStr = "";
     for(let i = 0; i < encodedStr.length; i++){
         if(lookup[encodedStr[i]] == undefined){
          decoderStr += encodedStr[i];
         }else{
         decoderStr += lookup[encodedStr[i]];
         }
     }
     return decoderStr;
  }

 console.log(rot13("SERR YBIR? NPPVBWBO")); 

module.exports = rot13;
