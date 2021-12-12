import React from 'react';
import natureCover from '../../assets/nature-cover.png';
import foodCover from '../../assets/food-cover.png';
import lifestyleCover from '../../assets/lifestyle-cover.png';
import allCover from '../../assets/all-cover.png';
import './initialGrid.styles.css';
import { Link } from 'react-router-dom';


const InitialGrid = () => {
    return (
        <div className='initialGrid'>
            <div className="grid-item">
                <Link to={'gallery/nature'}>
                    <img alt="nature"  src={natureCover}  />
                </Link>
            </div>
            <div className="grid-item">
                <Link to={'gallery/food'}>
                    <img alt="food"  src={foodCover} />
                </Link>
            </div>
            <div className="grid-item">
                <Link to={'gallery/lifestyle'}>
                    <img alt="lifestyle"  src={lifestyleCover} />
                </Link>
            </div>
            <div className="grid-item-bottom">
                <Link to={'gallery'}>
                    <img alt="all"  src={allCover} />
                </Link>
            </div>
        </div>
    )
}

export default InitialGrid;