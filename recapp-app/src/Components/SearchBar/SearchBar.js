import React, { useEffect, useState } from 'react';
import './SearchBar.css';
import {useNavigate} from 'react-router-dom';

function SearchBar() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [url, setUrl]= useState('https://localhost:5500/resources/');

    const handleClick = ()=>{
        setUrl(`https://localhost:5500/resources/search?tags=${query}`)
        async function navResults() {navigate('/search')}
        navResults()
    }

    useEffect(()=>{
        async function getData(){
            const response = await fetch(url);
            const actualData = await response.json();
            console.log(actualData)
            console.log(url)
            setData(actualData.payload)
        }
        getData();
    }, [url]);

    const handleChange= (e)=>{
        setQuery(e.target.value);
    }

    return (
        <div className='searchbar--wrapper'>
            <input onChange={handleChange} className=" searchbar" type="text" placeholder="Search resources..."/>
            <button onClick={handleClick} className="searchbar--button" >Search</button>
        </div>
    );
}
export default SearchBar;