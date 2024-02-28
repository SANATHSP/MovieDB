import React from "react";

const SearchBar = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        placeholder="type movie name..."
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
      ></input>
    </div>
  );
};

export default SearchBar;
