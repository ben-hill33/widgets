import React, { useState } from 'react';

const Accordion = ({ items }) => {

  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  }

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">
    {renderedItems}
  </div>

};

export default Accordion;

/**
 *
 * array destructuring is a shortcut to get access to the array indexes
 * whenever we call usestate we get bavck an array with 2 elements inside of it
 * instead of writing out:
 * const things = useState(null)
 * const activeIndex = things[0]
 * const setActiveIndex = things[1]
 * activeindex is the piece of state that we are keeping track of
 * setactiveindex is a function we call to update a piece of state
 * those names are not special, they can be any variable name describing what the variable is doing
 *
 * SETTER FUNCTIONS
 * any time we call useState, we get back that array, and the second argument inside it is always going to be our setter
 * when we re-render
 * the initial value of useState is default at null is only being used at initialization, after that the value of active index is equal to the value of the setter function
*/
