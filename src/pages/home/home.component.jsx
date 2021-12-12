import React from 'react';
import logoBigText from '../../assets/logo-big-text.png';
import InitialGrid from '../../components/initialGrid/initialGrid.component';
import './home.styles.css';

const Home = () => {
    return(
        <div className='home'>
            <img  alt='logo' className='logo-big' src={logoBigText} />
            <InitialGrid />
        </div>
    )
}

export default Home;
