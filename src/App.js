import React, { useState } from 'react';
import Nav from './Nav';
import Movies from './Movies';
import './App.css';

export default function App() {
    return (
        <div className='App'>
            <Nav/>
            <Movies/>
        </div>
    )
}
