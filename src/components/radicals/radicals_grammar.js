import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import './home.css';

const ListStyle = styled.ul`
    list-style-type: none;`

const RadicalsGrammar = () => {
    return(
        <div className="Grammar">
            <h1>Grammar Lesson 1: Radicals</h1>
            <p>Looking at a wall of Chinese characters is often daunting to the uninitiated, like gazing at hieroglyphics. What on earth do they mean? How do you de-code them? </p>
            <p>Don’t panic! The larger characters you will encounter are only combinations of other smaller characters stuck together. Imagine the smaller characters as Lego pieces that can be left as they are or combined with other blocks to express a more complicated object or idea. These smaller characters are called radicals. The list here is by no means exhaustive, but it will give you a sense of what to look for.</p>
            <p>The way to “de-code” these enigmatic characters is to think of them as a game of charades. One portion will tell you how to pronounce the character, or at least what it rhymes with. Another portion will tell you the meaning. Here is a simple example:</p>
            <h3>玥</h3>
            <p>The first radical is, 玉 means “jade or jewel”, so the reader should think, “oh, this character has something to do with something shiny.</p>
            <p>月 is pronounced “yuè” with a 4th tone tells the reader that the character is pronounced “yuè”, possibly with a 4th tone as well.</p>
            <p>As it happens this character: 玥，is pronounced “yuè” with a 4th tone and means “mysterious gem or pearl”</p>
            
        </div>
    )
}

export default RadicalsGrammar;