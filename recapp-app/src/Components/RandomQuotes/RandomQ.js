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
    <div>
        <ul>
            <li>{quotes}</li>
            <li>{author}</li>
        </ul>
    </div>
)
}

// function RandomQuote(){
//     const randomNum = Math.floor(Math.random()* quotes.length)
//     const url
//     return
// }

export default RandomQuotes;