import React from 'react';
import Nav from './Component3/Nav';
import Tweets from './Component3/Tweets';
import './App.css';

export default function App() {
    return (
        <div className='home'>
            <Nav />
            <Tweets />
        </div>
    )
}
