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
    let tempArray = []
    let counter = 0
    let word = ''
    for (let index = 0; index < expr.length; index += 2) {
    counter++
    const element = expr[index] + expr[index + 1];
    if (element === '10') {
    tempArray.push('.')
    }
    if (element === '11') {
    tempArray.push('-')
    }
    if (counter === 5) {
    word += MORSE_TABLE[tempArray.join('')] || ' '
    tempArray = []
    counter = 0
    }
    }
    return word
}

module.exports = {
    decode
}
