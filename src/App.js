import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown.js';
import Translate from './components/Translate.js';
import Route from './components/Route.js';
import Header from './components/Header.js'

const items = [
  {
    title: 'What is React?',
    content: 'React is a JS framework'
  },
  {
    title: 'Why use React',
    content: 'React is awesome'
  },
  {
    title: 'How do you use React?',
    content: 'With components'
  }
];

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

  return (

    <div>
      <Header />

      <Route path='/'>
        <Accordion items={items} />
      </Route>

      <Route path='/list'>
        <Search />
      </Route>

      <Route path='/dropdown'>
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>

      <Route path='/translate'>
        <Translate />
      </Route>

    </div>
  );

}

export default App;