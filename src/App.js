import React, { useState } from "react";
import "./styles.css";

var color = "black";
//shopping list
var emojiDictionary = {
  "😊": "smilling",
  "🤣": "laughing",
  "😎": "smart",
  "😔": "sad",
  "❤️": "love",
  "💔": "broken-heart"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database..!";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    //input/view
    <div className="App">
      <h1>
        <span style={{ color: color }}>inside outt!</span>
      </h1>

      <input onChange={emojiInputHandler}></input>

      <h2> {meaning}</h2>

      <h3>emojis we have</h3>
      {emojiWeKnow.map((emoji) => {
        return (
          <span
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
