import React, { useEffect, useState } from 'react';
import './SearchBar.css';
import {useNavigate} from 'react-router-dom';



function SearchBar({setUserValue}) {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    console.log(data)
    
    const [query, setQuery] = useState('');
    const [url, setUrl]= useState('http://localhost:5500/resources/', );
    console.log(url)
    const handleClick = ()=>{
        setUserValue(query)
        setUrl(`http://localhost:5500/resources/search?tags=${query}`)
        async function navResults() {navigate('/search',)}
        navResults()
    }

    useEffect(()=>{
        async function getData(){
            const response = await fetch(url);
            const data = await response.json();
            // console.log(actualData)
            // console.log(url)
            setData(data.payload)
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