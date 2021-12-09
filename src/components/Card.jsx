import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import dayOrNigth from '../Functions/dayOrNight';


function PreCard({className, id, name, onClose, min, max, img}) {
  // acá va tu código
  if(id) {
    return (
      <div id={id} className={className}>
        <button onClick={() => onClose(id)}>X</button>
        <Link to={`/city/${id}`}>
          <h2>{name}</h2>
          <p>Min<span>{Math.round(min)}°</span></p>
          <p>Max<span>{Math.round(max)}°</span></p>
          <img src={`https://openweathermap.org/img/wn/${img}@2x.png`} alt="Weather state"/>
        </Link>
      </div>
    ) 
  } else return (<></>);
};

const Card = styled(PreCard)`
  position: relative;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  border-radius: 5px;
  background: ${(props) => dayOrNigth(props.img)};
  max-width: 17rem; 
  max-height: 10rem; 
  margin: auto;
  
  a {
    max-width: inherit;
    max-height: inherit;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    color: black;
    text-decoration: none;
    background: transparent;
  }


  h2 {
    margin: auto;
    font-size: 1.5rem;
    grid-column: 1/5;
    padding-top: 1rem;
  }

  span {
    margin-top: 1rem;
    display: block;
  }

  img{
    position: relative;
    bottom: 1.7rem;
    right: 1rem;
  }

  button{
    position: absolute;
    left: 14.5rem;
    top: 0.5rem;
    width: 1.8rem;
    height: 2rem;
    background-color: rgba(255, 0, 0, 0.7);
    color: lightgrey;
    border-style: none;
    border-radius: 3px;

    &:hover {
      background-color: white;
      color: rgba(255, 0, 0, 0.7);
      border-style: solid;
      border-width: 1px;
      border-color: rgba(255, 0, 0, 0.7);
    }

    &:focus{
      outline: none;
      box-shadow: none;
    }

  }

  @media (max-width:500px) {
    & button {
      &:hover {
        background-color: rgba(255, 0, 0, 0.7);
        color: lightgrey;
      }
    }
  }

`;

export default Card;