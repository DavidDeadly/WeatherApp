import React from 'react';
import Card from './Card';
import styled from 'styled-components';

function PreCards({className, cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  if(cities){
    return (
      <div className={className}>
        {cities.map(city => <Card 
            key={city.id}
            id={city.id}
            name={city.name}
            max={city.main.temp_max}
            min={city.main.temp_min}
            img={city.weather[0].icon}
            onClose={onClose}/>
        )}
      </div>
    )
  } else return (<></>)
};

const Cards = styled(PreCards)`
  margin: auto;
  margin-bottom: 5vh;
  height: 100%;
  max-width: 55rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 800px) {
      max-width: 80%;
      height: 100%;
      margin-bottom: 15%;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, 1fr);
  } 
`;


export default Cards;