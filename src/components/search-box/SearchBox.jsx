import React from "react";

import "./SearchBox.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="SearchBox"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
