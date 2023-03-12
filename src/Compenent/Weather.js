import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCityData } from '../Context/CityContext';



function Weather() {
    const { cityData } = useCityData();
    const [weatherData, setWeatherData] = useState([]);
    const [clsName, setClsName] = useState(0);
    //const hourlyFilter = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11], [12, 13, 14], [15, 16, 17], [18, 19, 20], [21, 22, 23]]


    useEffect(() => {
        axios(`https://api.openweathermap.org/data/2.5/forecast?lat=${cityData.latitude}&lon=${cityData.longitude}&appid=e8e7c5e707466edd672dece55694cd9d&units=metric&lang=tr`)
            .then((res) => setWeatherData(res.data.list))
            .catch((err) => console.log(err))
    }, [cityData.name])
    console.log(weatherData);


    return (
        <div>
            <div>

                <ul className="weather">

                    {
                        weatherData.filter(data => (new Date(data.dt * 1000).getHours() - 3) <= new Date().getHours() && new Date().getHours() < (new Date(data.dt * 1000).getHours()))
                            .map((data, index) => (
                                <li
                                    className={index === clsName ? "checkedList" : ""}
                                    key={index}
                                    onClick={() => setClsName(index)}
                                >
                                    <div id={index}>
                                        <p>{cityData.days[new Date(data.dt * 1000).getDay()].slice(0, 3)}</p>
                                        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={`${data.weather[0].icon}@2x`} />
                                        <p>{Math.round(data.main.temp_max)}<sup>o</sup>    <span>{Math.floor(data.main.temp_min)}<sup>o</sup></span></p>
                                    </div>

                                </li>
                            ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Weather