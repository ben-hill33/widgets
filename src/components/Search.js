import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term)
  const [results, setResults] = useState([]);
  // console.log(results);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await
        axios.get('https://en.wikipedia.org/w/api.php', {
          params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            srsearch: debouncedTerm,
          },
        });
      setResults(data.query.search);
    }
    search();
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >Go</a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={event => setTerm(event.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
}

export default Search;

/**
 * useEffect Hook:
 * Allows function components to use something like lifecycle methods (you can't use componentDidMount or other functions to manage set used in classes)
 * We configure the hook to run some code automatically in one of three scenarios:
 * SCENARIO 1. When the componenet is rendered for te first time only
 * SCENARIO 2. When the component is rendered for the first time and whenever it re-renders
 * SCENARIO 3. when the component is rendered for the first time and (whenever it rerenders and some piece of data has changed)
 *
  // second argument will never be anything other an an array if there is one
  // [] run at initial render
  // nothing run at initial render and run after every rerender
  // [data] run at initial render and run after every rerender IF data has changed since last rerender
  // USEEFFECT CAN'T BE MARKED WITH ASYNC AND AWAIT
  // There are work arounds though
  // Async Method 2
  // (async () => {
  //   await axios.get('stuff');
  // })();
  // Async Method 3 (promises)
  // axios.get('stuff')
  // .then((data) => {
  //   console.log(response.data)
  // })
 */