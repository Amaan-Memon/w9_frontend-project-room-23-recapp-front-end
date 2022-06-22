import React from 'react';
import './SearchBar.css'

function SearchBar() {
    return (
        <div className='searchbar--wrapper'>
            <input className=" searchbar" type="text" placeholder="Search resources..."/>
            <button className="searchbar--button">Search</button>
        </div>
    );
}
export default SearchBar;