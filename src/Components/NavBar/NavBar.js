//NavBar Component 
//This component will have the following:
//1. Logo
//2. Search Bar
//3. Weeks drop down menu
//4. Glossary button

import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import SearchButton from '../SearchButton/SearchButton'
import WeeksDropDown from '../WeeksDropDown/WeeksDropDown'
import GlossaryButton from '../GlossaryButton/GlossaryButton'

function NavBar(){
    return(
        <div className="navbar"> 
            <img className = "logo" src="https://www.freepnglogos.com/uploads"/>
            <div className="search">
                <SearchBar/>
                <SearchButton/>
            </div>
            <div className="navbar--menus">
                <WeeksDropDown className="weeks-drop-down"/>
                <GlossaryButton className="glossary"/>
            </div>
        </div>        
    );
}

export default NavBar;