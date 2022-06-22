import React from 'react';
import './SearchBar.css'

function SearchBar() {
    return (
        <div>
            <input className=" searchbar" type="text" placeholder="Search resources..."/>
            <button className="searchbar--button">Search</button>
        </div>
    );
}
export default SearchBar;