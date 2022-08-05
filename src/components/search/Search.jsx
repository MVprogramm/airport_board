import React from 'react';
import './search.scss';

const Search = () => (
  <section className="search">
    <h1 className="search__title">Search flight</h1>
    <form className="search__form">
      <div className="search__icon"></div>
      <input className="search__input" type="text" placeholder="Airline, destination or flight #" />
      <button className="search__btn">Search</button>
      <div className="search__btn search__btn_decoration"></div>
    </form>
  </section>
);

export default Search;
