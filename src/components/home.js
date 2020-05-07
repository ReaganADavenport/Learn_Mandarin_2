import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './home.css';

const ListStyle = styled.ul`
    list-style-type: none;`

const Home = () => {
    return(
        <div className="Home">
            <h1>Learn Mandarin</h1>
            <h3>List of Topics</h3>
            <ListStyle>
            <li> <Link to={`/radicals`}>Radicals</Link> </li>
                <li>Numbers</li>
                <li>Greetings</li>
                <li>Nationalities</li>
                <li>Family</li>
                <li>Dates</li>
                <li>Hobbies</li>
                <li>Days and Months</li>
                <li>Studying</li>
                <li>Visiting</li>
                <li>Appointments</li>
            </ListStyle>
            
        </div>
    )
}

export default Home;