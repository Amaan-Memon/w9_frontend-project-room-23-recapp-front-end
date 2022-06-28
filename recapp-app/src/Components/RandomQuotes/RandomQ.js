// useEffect to fetch a quote from the API and set
// the quote and author displayed on the landing page

import React from "react";
import {useEffect, useState} from "react";


function RandomQuotes() {
    let [quotes, setQuotes] = useState([]);
    let [author, setAuthor] = useState([]);

    
    
    useEffect(()=>{
        async function getQuote(){
        const response = await fetch("https://quotes.rest/qod")
        let data = await response.json()

        console.log(data.contents.quotes[0].quote)
        setQuotes(data.contents.quotes[0].quote)

        console.log(data.contents.quotes[0].author)
        setAuthor(data.contents.quotes[0].author)
    }
    getQuote()
}, [])

return (
    <div className="box--container">
        <h3 className="header">Quote of the Day</h3>
            <p className="quote--text">{quotes}</p>
            <p className="quote--text">{author}</p>
    </div>
)
}

// function RandomQuote(){
//     const randomNum = Math.floor(Math.random()* quotes.length)
//     const url
//     return
// }

export default RandomQuotes;
