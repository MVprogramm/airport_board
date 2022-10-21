import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFlight } from "../../store/searchSlice.js";
import "./search.scss";

const Search = () => {
  const initialState =
    sessionStorage.getItem("flight") === null
      ? ""
      : sessionStorage.getItem("flight");

  const [searchFlight, setSearchFlight] = useState(initialState);
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(setFlight(searchFlight));
  };

  return (
    <section className="search">
      <h1 className="search__title">Search flight</h1>
      <form className="search__form" onSubmit={onSubmit}>
        <div className="search__icon"></div>
        <input
          className="search__input"
          type="text"
          placeholder="Flight #"
          value={searchFlight}
          onChange={(e) => setSearchFlight(e.target.value)}
        />
        <button className="search__btn">Search</button>
        <div className="search__btn search__btn_decoration"></div>
      </form>
    </section>
  );
};

export default Search;
