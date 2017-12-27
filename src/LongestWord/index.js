import R from 'Ramda';

export const getWordNum = (sentence) => {
    const splitInToWords = (sentence) => sentence.split(' ');
    const getLongerWord = (a, b) => (a.length > b.length) ? a : b;
    const getLongestWordInWords = (words) => R.reduce(getLongerWord, '', words);
    const f = R.pipe(splitInToWords, getLongestWordInWords);
    return f(sentence);
}

console.log(getWordNum('The grass is always green on the other side'));