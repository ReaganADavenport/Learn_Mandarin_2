import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import './radicals.css';

const ListStyle = styled.ul`
    list-style-type: none;`

const RadicalList = () => {
    return(
        <div className="Home">
            <h1>Subtopics</h1>
            <ListStyle>
            <li> <Link to={`/radicals/char_eng/1`}>Character -> English</Link> </li>
            <li> <Link to={`/radicals/grammar`}>Grammar</Link> </li>
            <li> English -> Pinyin </li>
            <li> English -> Character </li>
            <li> Character Practice </li>
            <li> Reading </li>
                
            </ListStyle>
            
        </div>
    )
}


RadicalList.propTypes = {
    vocab: PropTypes.array
};

export default RadicalList;