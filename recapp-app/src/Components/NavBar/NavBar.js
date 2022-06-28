//NavBar Component 
//This component will have the following:
//1. Logo
//  - img tag with our logo
//  - When clicked it redirects to the landing using useNavigate
//   page using useNavigate router method 
//2. Search Bar
//  - custom component in '../SearchBar/SearchBar'
//3. Weeks button 
//  - When clicked redirects to Practice links page using useNavigate
//4. Glossary button
//  - When clicked redirects to Practice links page using useNavigate
//5. Practice links button 
//  - When clicked redirects to Practice links page using useNavigate

import React from 'react';
import { useNavigate } from 'react-router';
import SearchBar from '../SearchBar/SearchBar'
import WeeksDropDown from '../WeeksDropDown/DropDown'
import GlossaryButton from '../GlossaryButton/Button'
import PracticeLinksButton from '../PracticeLinksButton/PracticeLinks';
import logo from '../../Images/logo.png'
import './NavBar.css'


function NavBar({ setUserValue }) {
    const navigate = useNavigate()
    return (
        <div className="navbar">

            <img alt="logo" className="logo" src={logo} onClick={() => { navigate('/') }} />

            <SearchBar className="navbar--search" setUserValue={setUserValue} />
            <div className="navbar--menus">
                <WeeksDropDown className="navbar--weeks" />
                <GlossaryButton className="navbar--glossary" />
                <PracticeLinksButton className="navbar--practice-links" />
            </div>
        </div>
    );
}

export default NavBar;