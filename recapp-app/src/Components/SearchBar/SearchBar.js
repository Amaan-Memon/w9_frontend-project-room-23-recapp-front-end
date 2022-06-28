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
<<<<<<< HEAD
 //could posible use useDebounce to refractor the amount of api requests sent.
    useEffect(()=>{
        async function getData(){
=======

    useEffect(() => {
        async function getData() {
>>>>>>> cef5d172e75a0d08c68c2eadfc9b043045bba58e
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