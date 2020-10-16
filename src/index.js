const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let binaryWords = {};
    let result = '';

    for (let key in MORSE_TABLE) {  // Create hash table. Key - symbal; Value - morse code;
      for (let char of key) {
        if (binaryWords[MORSE_TABLE[key]] === undefined) {
          binaryWords[MORSE_TABLE[key]] = ''
        }
        if (char === '.') {
          binaryWords[MORSE_TABLE[key]] += '10';
        } else if (char === '-') {
          binaryWords[MORSE_TABLE[key]] += '11';
        }
      }

      //Fill empty cells with zeros
      binaryWords[MORSE_TABLE[key]] = binaryWords[MORSE_TABLE[key]].padStart(10, 0)

    }

    // add space code in 'binaryWords'
    binaryWords[' '] = '**********'

    let morseBinary = expr;
    for (let i = 0; i <= expr.length / 10; i = i + 1) { // Decrypt morse binary code
      let = current = morseBinary.slice(0, 10);
      for (let key in binaryWords) {
            if (current === binaryWords[key]) {
              result += key;
              morseBinary = morseBinary.slice(10);
            }
      }
    }
    return result;
}

module.exports = {
    decode
}