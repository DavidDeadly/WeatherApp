import React from 'react';
import styled from 'styled-components';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';

const H1 = styled.h1`
  font-size: 30px;
  color: rgba(170, 168, 27, 0.9);
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;

  img {
    margin-right: 2vw;
  }

  @media (max-width:700px) {
      width: 100%;
      justify-content: space-evenly;

    }
`;

const StyledLink = styled(Link)`
  &:hover {
    color: rgba(30, 170, 27, 0.9);
  }
 
  @media (max-width:500px) {
    &:hover {
      color: rgba(51, 61, 51, 0.81);
    }
  }
`;

export default function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <StyledLink to="/" >
        <Div>
        <img src={Logo} alt="soyHenry Icon" />
        <H1>WeatherApp</H1>
        </Div>
      </StyledLink>
      <StyledLink to="/about" >
        <H1>About</H1>
      </StyledLink>
      <SearchBar onSearch={onSearch}/>
    </nav>
  );
};
