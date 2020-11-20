import React from 'react';
// import Accordion from './components/Accordion';
import Search from './components/Search';

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

export default () => {
  return (

    <div>
      <br />
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
}