// google translate API key 
// This API can only be used when your browser is at ‘http://localhost:3000’. If you try to make a request to the API from any other address, the request will fail.
import React, { useState } from 'react';
import Dropdown from './Dropdown.js';
import Convert from './Convert.js';

const options = [
  {
    label: 'Danish',
    value: 'da',
  },
  {
    label: 'Czech',
    value: 'cs',
  },
  {
    label: 'Dutch',
    value: 'nl',
  },
  {
    label: 'German',
    value: 'de',
  },
  {
    label: 'Icelandic',
    value: 'is',
  },
  {
    label: 'Latin',
    value: 'la',
  },
  {
    label: 'Norwegian',
    value: 'no',
  },
  {
    label: 'Portuguese(Portugal, Brazil)',
    value: 'pt',
  },
  {
    label: 'Russian',
    value: 'ru',
  },
  {
    label: 'Spanish',
    value: 'es',
  },
  {
    label: 'Swedish',
    value: 'sv',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
}

export default Translate;
