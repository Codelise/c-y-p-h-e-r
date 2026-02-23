import { useState, useEffect } from "react";
import rot from "rot"; // ROT13
import CypherResult from "./components/CypherResult";

// encryptText function
const encryptText = (inputText) => rot(inputText);

// decryptText function
const decryptText = (encryptedText) => rot(encryptedText);

export default function App() {
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState();
  const [displayEncryptedText, setDisplayEncryptedText] = useState();
  const [displayDecryptedText, setDisplayDecryptedText] = useState();
  // gets the saved pigpen from localStorage then use it as default value
  const [displayPigPenText, setDisplayPigPenText] = useState(() => {
    const loadStorage = localStorage.getItem("pigpen");
    return loadStorage || "";
  });

  // save to localStorage
  // it runs everytime displayPigPenText updates
  useEffect(() => {
    // if displayPigPenText has value
    localStorage.setItem("pigpen", displayPigPenText);
  }, [displayPigPenText]);

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
    // this converts string to UPPERCASE for PigPen
    const pigPenText = dataText.toUpperCase();

    // pass the reversedText value into setDisplayText for re-rendering
    setDisplayText(reverse);
    // pass the encryptText value into setDisplayEncryptedText for re-rendering
    setDisplayEncryptedText(encrypt);
    // pass the encryptText value into setDisplayDecryptedText for re-rendering
    setDisplayDecryptedText(decrypt);
    // pass the pigpen text to re-render
    setDisplayPigPenText(pigPenText);
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

  // clears the form and display
  function clearForm() {
    setText("");
    setDisplayText("");
    setDisplayEncryptedText("");
    setDisplayDecryptedText("");
    setDisplayPigPenText("");
    localStorage.removeItem("pigpen");
  }

  return (
    <>
      <h1>C-y-p-h-e-r</h1>
      <form onSubmit={submitText}>
        <label>Enter something:</label>
        <input
          type="text"
          value={text}
          placeholder="Enter something"
          onChange={getText}
        />
        <button type="submit">Submit</button>
      </form>
      <CypherResult label="Reversed" text={displayText} />
      <CypherResult label="Encrypted" text={displayEncryptedText} />
      <CypherResult label="Decrypted" text={displayDecryptedText} />
      <CypherResult
        label="Pigpen Cipher"
        text={displayPigPenText}
        isPigPen={true}
      />
      <button onClick={() => clearForm()}>Clear Form</button>
    </>
  );
}
