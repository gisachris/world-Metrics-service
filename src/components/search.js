import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import CountryMin from './countryMin';
import '../styles/search.css';
import '../styles/countryMin.css';

const Search = () => {
  const [results, setResults] = useState('');
  const countries = useSelector((state) => state.countries.data);

  if (results === '') {
    return (
      <section className="searchpageholder">
        <section className="searchField">
          <input type="search" name="search" id="search" placeholder="enter a country..." onChange={(e) => setResults(e.target.value)} />
        </section>
        <span className="emptySearchResult">Search for a country above!</span>
      </section>

    );
  }
  return (
    <section className="searchpageholder">
      <section className="searchField">
        <input type="search" name="search" id="search" placeholder="enter a country..." onChange={(e) => setResults(e.target.value)} />
      </section>
      <section className="searchResults">
        {countries.filter((country) => (results.toLowerCase() === '' ? country : country.name.common.toLowerCase().includes(results.toLowerCase()))).map((country) => (<CountryMin key={country.name.common} country={country} />))}
      </section>
    </section>
  );
};

export default Search;
