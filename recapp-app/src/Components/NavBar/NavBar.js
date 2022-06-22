//NavBar Component 
//This component will have the following:
//1. Logo
//2. Search Bar
//3. Weeks drop down menu
//4. Glossary button

import React from 'react';
import { useNavigate } from 'react-router';
import SearchBar from '../SearchBar/SearchBar'
import WeeksDropDown from '../WeeksDropDown/DropDown'
import GlossaryButton from '../GlossaryButton/Button'
import './NavBar.css'
import logo from '../../Images/logo.png'
import PracticeLinksButton from '../PracticeLinksButton/PracticeLinks';

function NavBar(){
    const navigate = useNavigate()
    return(
        <div className="navbar"> 
            
            <img alt = "logo" className = "logo" src={logo} onClick={()=>{navigate('/')}}/>
            
            <SearchBar className= "navbar--search"/>
            <div className="navbar--menus">
                <WeeksDropDown className="navbar--weeks"/>
                <GlossaryButton className="navbar--glossary"/>
                <PracticeLinksButton className="navbar--practice-links"/>
            </div>
        </div>        
    );
}

export default NavBar;