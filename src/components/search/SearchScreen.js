import React, { useMemo } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { heroes } from "../../data/heroes";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../Heroes/HeroCard";
import { getHeroByName } from "../selectors/getHeroByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;
  const heroesFiltered = useMemo(() => getHeroByName(q), [q]);
  //const heroesFiltered = getHeroByName(searchText);
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  return (
    <div>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="type a hero..."
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn m-1 btn-primary">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q === "" && <div className="alert alert-info">Search a hero</div>}
          {(q !== "" && heroesFiltered.length === 0 ) && <div className="alert alert-danger">Hero not found :(</div>}
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}

        </div>
      </div>
    </div>
  );
};
