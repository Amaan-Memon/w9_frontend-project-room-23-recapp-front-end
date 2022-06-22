//NavBar Component 
//This component will have the following:
//1. Logo
//2. Search Bar
//3. Weeks drop down menu
//4. Glossary button

import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import WeeksDropDown from '../WeeksDropDown/DropDown'
import GlossaryButton from '../GlossaryButton/Button'
// import '../../public/images/logo.jpg'
import "./"

function NavBar(){
    // const handleWeekClick = ()=>{
        
    // }
    return(
        <div className="navbar"> 
            
            <img alt = "logo" className = "logo" src={"logo.jpg"}/>
            <img alt = "logo" className = "logo" src="https://github.com/SchoolOfCode/w9_frontend-project-room-23-recapp-front-end/blob/main/recapp-app/public/images/logo.jpg"/>
            <SearchBar className= "navbar--search"/>
            <div className="navbar--menus">
                <WeeksDropDown className="navbar--weeks"/>
                <GlossaryButton className="navbar--glossary"/>
            </div>
        </div>        
    );
}

export default NavBar;