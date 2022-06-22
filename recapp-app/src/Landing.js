//LANDING PAGE 
//This is the landing page for the application and will have the following components: 
//1. NavBar
// - Logo
// - Search Bar
// - Weeks drop down menu
// - Glossary button
//2. Random Quotes Generator
// - Random quotes will generate from the quotes API
//3. Mission Statement
// - A welcome message and mission Statement will be displayed on the landing page
//4. Footer
// - Copyright
// - Links to other pages

import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import RandomQuotes from './Components/RandomQuotes/RandomQ';
import Footer from './Components/Footer/Footer';
import './index.css'

export function Landing() {
    return (
        <div className="landing">
            <NavBar />
                <div className="box--container">
                    <h1 className="header">Welcome to RECAPP</h1>
                    <p className="text">
                        We are dedicated to providing you with the most 
                        up-to-date resources to help consolidate your learning from the the SoC Bootcamp.
                    </p>
                </div>
                <RandomQuotes />
            <Footer />
        </div>
    );
}

