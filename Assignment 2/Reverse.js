function reverseword(line) {
    const word = line.split(' ');
    const reverseword = word.map( words => reverseword(words));
    return reverseword.join(' ');
}

function reverseword(words) {
    return words.split(' ').reverse().join(' ');
}

const inputline = 'This is a sunny day';
const reverseline = reverseword(inputline);
console.log(reverseline);