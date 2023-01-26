import React from 'react';
import module from './WeatherCard.module.scss'
import sun from '../assets/sun.png'

function WeatherCard(props) {
    return (
        <div className={module.container}>
            <div className={module.card}>
                <h2>27.01.23</h2>
                <div className={module.card_image}>
                    <img src={sun} />
                </div>
                <div className={module.temperature}>
                    <h1>Sunny</h1>
                </div>
                <div className={module.currentDay}>
                    {/* {currentDay} */}
                </div>
                <div className={module.currentDate}>
                    {/* {currentDate} */}
                </div>
                <div className={module.data_week}>
                    <h4>-7 Avg</h4>
                </div>
                {/* <div className={module.num_data}>
                    <h4>25 Января</h4>
                </div> */}
            </div>
        </div>
    );
}

export default WeatherCard;