import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FlashCard from '../Card';

import './radicals.css';

import {Columns, Column } from 'bloomer';

const listStyle = {
    // backgroundColor: 'rgba(0,0,0, 0.8)',
    alignContent: 'space-between',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    listStyleType: 'none',
    margin: '5px',
    padding: '5px'
}

class Radical_Char_Eng_1 extends Component {
    state = {
        vocabulary:[]
    }

    async componentDidMount(){
        const vocabulary = await this.loadData();
        this.setState({
            vocabulary
        });
        console.log ('state is', this.state);
    };

    loadData = async () => {
        const url = 'http://localhost:3000/v1/radicals/char_eng/1';
        const response = await fetch(url);
        const data = response.json();
        console.log('data is', data);
        return data;
    }

    render(){
        const { vocabulary } = this.state;
        return(
            <div className="List">
            <h1>Vocabulary</h1>
            <h2>Type in the English Translation of the Mandarin Character</h2>
            <Columns style={listStyle}>
                {vocabulary.length > 0 ?
                    vocabulary.map(term =>
                        <Column key={term.id} style={listStyle}>
                            <FlashCard vocabWord= {term} />
                        </Column>
                        
                    )
                    :
                    <Column>No Vocabulary</Column>
                }
            </Columns>
            </div>
    )
    }
}

Radical_Char_Eng_1.propTypes = {
    vocab: PropTypes.array
};

export default Radical_Char_Eng_1;