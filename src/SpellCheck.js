import React, { useState } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const XSpellCheck = () => {
  const [text, setText] = useState('');
  const [correction, setCorrection] = useState('');

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    // Check for misspellings and suggest corrections
    const words = inputText.split(' ');
    const firstMisspelling = words.find(word => customDictionary[word.toLowerCase()]);
    if (firstMisspelling) {
      const correctedSpelling = customDictionary[firstMisspelling.toLowerCase()];
      setCorrection(`Did you mean: ${correctedSpelling}?`);
    } else {
      setCorrection('');
    }
  };

  return (
    <div>
      <textarea
        placeholder="Enter text ..."
        value={text}
        onChange={handleInputChange}
      ></textarea>
      {correction && <p>{correction}</p>}
    </div>
  );
};

export default XSpellCheck;
