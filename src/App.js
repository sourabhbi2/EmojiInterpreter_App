import React, { useState } from "react";
import "./styles.css";

var color = "#9333ea";
//shopping list
var emojiDictionary = {
  "😊": "smilling",
  "🤣": "laughing",
  "😎": "smart",
  "😔": "sad",
  "😀": "Grinning Face",
  "😍": "Smiling Face With Heart-Eyes",
  "😒": "Unamused face",
  "🤩": "Star-Stuck",
  "😘": "Face blowing a kiss",
  "😛": "Face with  tongue",
  "🤪": "Zany Face",
  "😈": "Smiling Face with Horns",
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
      <h1> Emoji
        <span style={{ color: color }}> interpreter!</span>
      </h1>

      <input style={{ width: "25%" }} onChange={emojiInputHandler}></input>

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
