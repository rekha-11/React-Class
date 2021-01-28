import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
            <nav>
                <ul className='navlinks'>
                    <Link to = '/contact'>
                        <li>Contact</li>
                    </Link>
                    <Link to ='/about'>
                        <li>About</li>
                    </Link>
                    <Link to = '/shop'>
                        <li>Shop</li>
                    </Link>   
                </ul>
            </nav>
            </div>
        )
    }
}
