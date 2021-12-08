import React from 'react';
import { createGlobalStyle } from "styled-components";
import Navbar from "../components/Nav";
import Card from '../components/Card';
import Cards from "../components/Cards";
import About from '../components/About';
import City from '../components/City';
import { Route, Routes, Outlet, Navigate } from 'react-router-dom';

const GlobalStyles = createGlobalStyle`
  body {
    box-sizing: border-box;
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,0.74) 0%, rgba(148,187,233,0.74) 100%);
  }

  .App {
  text-align: center;
}

  .row {
  display: flex;
  justify-content: center;
}
`;

export default function App() {
  const [cities, setCities] = React.useState([]);

  const onSearch = (city) => {
    const apiKey = "42526a29e58732a4eb1ac1ffe2b9bfda";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then(recurso => {
        if(recurso.main){
          cities.every(city => city.id !== recurso.id) ? setCities([...cities, recurso]) : alert("Why a city twice?")
        } else {
          alert(recurso.message.toUpperCase());
        }
      });
  }

  const onClose = (cityId) => {
    setCities(cities.filter((city) => city.id !== cityId));
  }
  
  return (
    <div className="App">
        <GlobalStyles />
          <Navbar onSearch={onSearch}/>
        <Routes>
          <Route path="/" element={<Navigate replace to="/cities"/>}/>
          <Route path="/*" element={
            <>
            <hr style={{display: cities[0] ? "block" : "none"}}/>
            <h2 style={{display: cities.length ? "block" : "none"}}>Last Search</h2>
            <Card 
            id={cities[cities.length-1] ? cities[cities.length-1].id: null}
            name={cities[cities.length-1] ? cities[cities.length-1].name: null}
            max={cities[cities.length-1] ? cities[cities.length-1].main.temp_max: null}
            min={cities[cities.length-1] ? cities[cities.length-1].main.temp_min: null}
            img={cities[cities.length-1] ? cities[cities.length-1].weather[0].icon: null}
            onClose={onClose}
            />
            <hr style={{display: cities.length ? "block" : "none"}}/>
            <Outlet/>
            </>
          }>
            <Route path="cities" element={
              <>
              <Cards cities={cities} onClose={onClose}/> 
              </>
            }/>
            <Route path="city/:cityId" element={<City cities={cities}/>}/>
          </Route>
          <Route path="/about" element={<About/>} />
        </Routes>
    </div>

  );
}
