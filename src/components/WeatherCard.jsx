import React from 'react';
import module from './WeatherCard.module.scss'
import sky from '../assets/sky.jpg'

function WeatherCard(props) {
    return (
        <div className={module.container}>
            <div className={module.card}>
                <h2>Москва</h2>
                <div className={module.card_image}>
                    <img src={sky} />
                </div>
                <div className={module.temperature}>
                    -2`
                </div>
                <div className={module.currentDay}>
                    {/* {currentDay} */}
                </div>
                <div className={module.currentDate}>
                    {/* {currentDate} */}
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;