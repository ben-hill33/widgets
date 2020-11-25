import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown.js';
import Translate from './components/Translate.js'

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a JS framework'
//   },
//   {
//     title: 'Why use React',
//     content: 'React is awesome'
//   },
//   {
//     title: 'How do you use React?',
//     content: 'With components'
//   }
// ];

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
]

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (

    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropdown(!setShowDropdown)}>
        Toggle Dropdown
        </button>
      {showDropdown ?
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        /> : null
      } */}
      <Translate />
    </div>
  );

}

export default App;