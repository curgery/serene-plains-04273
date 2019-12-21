/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link } from 'react-router-dom';
import IMG from './pages/img/rlg-cv.jpg';


const NavBar = () => (
    <nav>
        
        <img
            src={IMG}
            alt="avatar"
            width={125}
            height={135}
            style={{ transform: 'rotate(360deg)'}}
        />

        <ul>
            <li >              
                <Link to="/">Robert L. Glover
                </Link>              
            </li>
            <li>
                <Link to="/articles-list">Articles</Link>
            </li>
            <li>
                <Link to="/about">CV</Link>
            </li>
           
        </ul>
        
        
    </nav>
        
        
  );

export default NavBar;