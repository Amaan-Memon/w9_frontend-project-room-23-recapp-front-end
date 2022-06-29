//Search Bar
// - Created a function called SearchBar which takes in the setUserValue 
//   function as a parameter 
// - useEffect is used to fetch data async from the backend, format 
//   it as a JSON and then setData function sets state to the data's 
//   payload
// - Returns an input and a search button which redirects through  
//   useNavigate to search result page 

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';


function SearchBar({ setUserValue }) {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    console.log(data)

    const [query, setQuery] = useState('');
    const [url, setUrl] = useState('http://localhost:5500/resources/',);
    console.log(url)

    const handleClick = ()=>{
        setUserValue(query.toLowerCase())

        setUrl(`http://localhost:5500/resources/search?tags=${query}`)
        async function navResults() { navigate('/search',) }
        navResults()
    }

    useEffect(() => {
        async function getData() {
            const response = await fetch(url);
            const data = await response.json();
            setData(data.payload)
        }
        getData();
    }, [url]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    return (
        <div className='searchbar--wrapper'>
            <input onChange={handleChange} className=" searchbar" type="text" placeholder="Search resources..." />
            <button onClick={handleClick} className="searchbar--button" >Search</button>
        </div>
    );
}
export default SearchBar;