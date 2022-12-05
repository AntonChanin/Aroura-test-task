const wordsStorage = [
  "Got",
  "ability",
  "shop",
  "recall",
  "fruit",
  "easy",
  "dirty",
  "giant",
  "shaking",
  "ground",
  "weather",
  "lesson",
  "almost",
  "square",
  "forward",
  "bend",
  "cold",
  "broken",
  "distant",
  "adjective."
]

const getRandomNumber = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min) + min);
}

const getRandomWord = (firstLetterToUppercase = false) => {
  const word = wordsStorage[getRandomNumber(0, wordsStorage.length - 1)];
  return firstLetterToUppercase ? word.charAt(0).toUpperCase() + word.slice(1) : word;
}

const getLoremIpsum = (length = 10) => {
  return [...Array(length)].map((_, i) => getRandomWord(i === 0)).join(' ').trim() + '.';
}

export default getLoremIpsum;