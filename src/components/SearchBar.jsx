import React from 'react';
import styled from 'styled-components';

function PreSearchBar({className, onSearch}) {
  // acá va tu código
  const [city, setCity] = React.useState("");

  const newCity = (city) => {
    setCity(city);
  };

  let input = React.useRef();

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if(city) {
        onSearch(city);
        input.current.value = null;
        newCity("");
      } 
      else alert("A city name is mandatory");
    }} className={className}>
      <input type="text" placeholder="City..." onChange={(e) => newCity(e.target.value)} ref={input}/>
      <button type="submit">Add</button>
    </form>  
  ) 
};

const SearchBar = styled(PreSearchBar)`
  background-color: rgba(51, 61, 51, 0.81);
  align-self: flex-end;
  padding: 0.5rem;
  width: 17rem;
  display: flex;
  justify-content: space-between;
  border-radius: 3px;

  & input {
    border-style: none;
    border-radius: 4px;
    appearance: none;
    line-height: 2rem;
    
    &:focus {
      outline-color: rgba(51, 61, 51, 0.81);
    }
  }

  & button {
    color: rgba(30, 170, 27, 0.9);
    background-color: inherit;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(30, 170, 27, 0.9);
    border-radius: 4px;

    &:focus {
      outline: none;
      box-shadow: none;
    }

    &:hover {
      background-color: white;
      color: rgba(6, 112, 6, 0.81);
    }

  }

  @media (max-width:500px) {
    position: fixed;
    left: 0;
    bottom: 0;
    margin: 0;
    width: 100%;
    justify-content: space-evenly;
    background-color: rgb(51, 61, 51);
    border-radius: 0;
    z-index: 1;

    & button {
      margin: auto;
      width: 8rem;

      &:hover {
        background-color: rgb(51, 61, 51);
        color: rgba(30, 170, 27, 0.9);
      }
    }
  }
`;

export default SearchBar;