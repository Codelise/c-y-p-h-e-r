// functions inside Object
export const encryptorFunctions = {
  REVERSE: (inputText) => inputText.split("").reverse().join(""),
  ROT13: (inputText) => rot(inputText),
  PIGPEN: (inputText) => {
    return inputText.toUpperCase();
  },
};

// fetches single word from the API, number = 1
const fetchRandomWord = async () => {
  try {
    const response = await fetch(
      "https://random-word-api.herokuapp.com/word?number=1",
    );
    const data = await response.json();
    console.log(data[0].toUpperCase());
    return data[0].toUpperCase(); // gets the first word from API
  } catch (error) {
    alert("Error fetching word from API");
    return "CIPHER"; //fallback default word to still work even API fails
  }
};

// core of the game, number=3
export const generateNewGame = async () => {
  const correctAnswer = await fetchRandomWord(); // gets the response of fetchRandomWord function
  const cipherTypes = Object.keys(encryptorFunctions); // makes keys : REVERSE, ROT13, PIGPEN
  const chosenCipherTypes =
    cipherTypes[Math.floor(Math.random() * cipherTypes.length)]; // picks one random encryptor
  const encryptedWord = encryptors[chosenCipherTypes](correctAnswer); // applies the chosen encryptor from choseCipherTypes

  //   this will give 3 wrong answers
  //   fetches 3 random words from API
  const wrongResponse = await fetch(
    "https://random-word-api.herokuapp.com/word?number=3",
  );
  // response from fetching 3 random words
  const wrongAnswers = await wrongResponse.json();

  //   combines the correct answer, chosen encryption and 3 wrong answers, all UPPERCASE for now
  const gameOptionShuffle = [
    answer,
    ...wrongAnswers.map((d) => d.toUpperCase()),
  ].sort(() => Math.random() - 0.5);

  //   returns all the UI to render
  return {
    rightAnswer: correctAnswer,
    display: encryptedWord,
    type: chosenCipherTypes,
    choices: gameOptionShuffle,
  };
};
