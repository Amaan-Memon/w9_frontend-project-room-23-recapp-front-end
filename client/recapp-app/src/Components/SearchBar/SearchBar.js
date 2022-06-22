import React from 'react';

function SearchBar() {
    return (
        <div>
            <input type="text" placeholder="Search resources..."/>
            <button className="searchbar--button">Search</button>
        </div>
    );
}
export default SearchBar;