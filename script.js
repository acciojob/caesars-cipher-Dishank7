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

function rot13(str) {
var result = "";
for (var i = 0; i < str.length; i++) {
var c = str.charCodeAt(i);
if (c >= 65 && c <= 90) { // only operate on uppercase letters
c = ((c - 65 + 13) % 26) + 65; // shift by 13 places
}
result += String.fromCharCode(c);
}
return result;

}

console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
