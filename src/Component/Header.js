import React from 'react';
import covidmain from '../image/covidmain.png';
import './Header.css';


const Header = ({onChange, search, getSearch}) => {
    return (
        <div>
            <form onSubmit={getSearch}>
                <input type="text" name="searchbar" onChange={onChange} value={search} placeholder="영문 국가 명 ex) South Korea, Canada"/>
                <button type="submit">click</button>
            </form>
            <img src={covidmain} alt="map"/>
            <h1>Covid-19 Alert</h1>
        </div>
    );
};

export default Header;
