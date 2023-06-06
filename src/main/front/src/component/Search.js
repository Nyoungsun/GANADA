import React, { useState } from 'react';
import '../css/Search.css';
import logo from '../logo.png';
import searchBtn from '../searchBtn.png';
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const navigate = useNavigate();

    const [text, setText] = useState('');

    const onText = (e) => {
        setText(e.target.value);
    };

    const goResult = () => {
        navigate('/result', {
            state: {
                text: text
            }
        });
    };

    const pressEnter = (e) => {
        if (e.key === 'Enter') {
            goResult();
        }
    };

    return (
        <div>
            <div id='logoDiv'>
                <img src={logo} alt='logo' />
            </div>

            <div id='searchDiv'>
                <input onChange={onText} onKeyDown={pressEnter}></input>
                <button onClick={goResult}>
                    <img src={searchBtn} alt='검색' />
                </button>
            </div>
        </div>
    );
};

export default Search;