import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import iso from "../Functions/country";

function PreCity ({className, cities}) {
    const { cityId } = useParams();
    const c = cities.filter(city => city.id === parseInt(cityId))[0];
    const d = cities[cities.length-1];
    if(c) {
        const country = iso(c.sys.country);
    
        return ( 
            <>
            <div className={className}>
                <h1>{c.name.toUpperCase()}</h1>
                <div className="main">
                    <div>
                        <h3>Location</h3>
                        <p>Latitude:<br/>{c.coord.lat}</p>
                        <p>Longitude:<br/>{c.coord.lon}</p>
                    </div>
                    <div>
                        <h3>Temperature</h3>
                        <p>{c.main.temp}° <br />
                        <span style={{display: c.main.temp === c.main.feels_like ? "none" : "inline"}}>But feels like {c.main.feels_like}°</span></p>
                        <p style={{display: c.main.temp_max === c.main.temp_min ? "none" : "inline"}}>Range: {c.main.temp_max}°/{c.main.temp_min}°</p>
                        <p>Humidity: {c.main.humidity}%</p>
                    </div>
                    <div>
                        <h3>Weather</h3>
                        <h5>{c.weather[0].main}</h5>
                        <p>Type: {c.weather[0].description}</p>
                        <img src={`http://openweathermap.org/img/wn/${c.weather[0].icon}@2x.png`}alt="Weather State"/>
                    </div>
                </div>
                <hr/>
                <h3>{country}</h3>
                <h6>more info</h6>
                <div id="moreInfo">
                    <a href={`http://en.wikipedia.org/wiki/${c.name}`} target="_blank" rel="noopener noreferrer">
                        Try here
                    </a>
                    <a href={`https://en.wikipedia.org/wiki/${c.name},_${country}`} target="_blank" rel="noopener noreferrer">Or here</a>
                </div>
            </div>
            <hr/>
            </>
        );
    } else if (d) {
        const country = iso(d.sys.country);
    
        return ( 
            <>
            <div className={className}>
                <h1>{d.name.toUpperCase()}</h1>
                <div className="main">
                    <div>
                        <h3>Location</h3>
                        <p>Latitude:<br/>{d.coord.lat}</p>
                        <p>Longitude:<br/>{d.coord.lon}</p>
                    </div>
                    <div>
                        <h3>Temperature</h3>
                        <p>{d.main.temp}° <br />
                        <span style={{display: d.main.temp === d.main.feels_like ? "none" : "inline"}}>But feels like {d.main.feels_like}°</span></p>
                        <p style={{display: d.main.temp_max === d.main.temp_min ? "none" : "inline"}}>Range: {d.main.temp_max}°/{d.main.temp_min}°</p>
                        <p>Humidity: {d.main.humidity}%</p>
                    </div>
                    <div>
                        <h3>Weather</h3>
                        <h5>{d.weather[0].main}</h5>
                        <p>Type: {d.weather[0].description}</p>
                        <img src={`http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`}alt="Weather State"/>
                    </div>
                </div>
                <hr/>
                <h3>{country}</h3>
                <h6>more info:</h6>
                <div id="moreInfo">
                    <a href={`https://en.wikipedia.org/wiki/${d.name}`} target="_blank" rel="noopener noreferrer">
                        Try here
                    </a>
                    <a href={`http://en.wikipedia.org/wiki/${d.name},_${country}`} target="_blank" rel="noopener noreferrer">Or here</a>
                </div>
            </div>
            <hr/>
            </>
        );
    } else return (<></>);
};


const City = styled(PreCity)`
    margin: auto;
    max-width: 60%;
    max-height: 100%;
    padding: 2rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    line-height: 1.5rem;
    color: black;
    background: radial-gradient(ellipse, transparent 90%, rgba(5,9,0,0.8)22%);

    #moreInfo {
        margin: auto;
        max-width: 20%;
        display: flex;
        justify-content: space-between;

        a {
            display: block;
        }
    }
    

    h1, h3 {
        margin-bottom: 1.5rem;
    }

    a {
        color: black;
        text-decoration: wavy;

        &:hover {
            color: rgba(30, 170, 27, 0.9);
        }
    }

    .main {
        display: flex;
        justify-content: space-evenly;
    }

    @media (max-width: 700px) {
        margin: 0;
        max-width: 100%;
        background: radial-gradient(ellipse, rgba(5,9,0,0.5) 5%, transparent 100%);

        .main {
            max-height: 44rem;
            flex-direction: column;
        }

        #moreInfo {
            max-width: 50%;
        }

    }
`;

export default City;

