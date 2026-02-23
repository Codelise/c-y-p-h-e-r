import { useState } from "react";
import rot from "rot"; // ROT13

// encryptText function
const encryptText = (inputText) => rot(inputText);

// decryptText function
const decryptText = (encryptedText) => rot(encryptedText);

export default function App() {
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState();
  const [displayEncryptedText, setDisplayEncryptedText] = useState();
  const [displayDecryptedText, setDisplayDecryptedText] = useState();

  // gets input text
  function getText(e) {
    setText(e.target.value);
  }

  // submits, calls reverse text, encrypt, and decrypt functions
  function submitText(event) {
    event.preventDefault();
    // stores the text state into variable for reuse
    const dataText = text;
    // this variable calls the reverseText function
    const reverse = reverseText(dataText);
    // this variable calls the encryptText function
    const encrypt = encryptText(dataText);
    // this variable calls the decrypt function
    const decrypt = decryptText(encrypt);
    // pass the reversedText value into setDisplayText for re-rendering
    setDisplayText(reverse);
    // pass the encryptText value into setDisplayEncryptedText for re-rendering
    setDisplayEncryptedText(encrypt);
    // pass the encryptText value into setDisplayDecryptedText for re-rendering
    setDisplayDecryptedText(decrypt);
    // clears the input field
    setText("");
  }

  // reverses the text
  function reverseText(inputText) {
    // first split the text
    const splitText = inputText.split("");
    // then reverse it
    const reverseText = splitText.reverse();
    // then rejoin it
    const joinText = reverseText.join("");
    // then return it
    return joinText;
  }

  return (
    <>
      <form onSubmit={submitText}>
        <label>Enter something:</label>
        <input
          type="text"
          value={text}
          placeholder="Enter something"
          onChange={getText}
        />
        <button type="submit">Reverse</button>
      </form>
      <p>Reversed Text: {displayText}</p>
      <p>Encrypted Text: {displayEncryptedText}</p>
      <p>Decrypted Text: {displayDecryptedText}</p>
    </>
  );
}
