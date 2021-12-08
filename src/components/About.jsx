import React from "react";
import styled from "styled-components";

function PreAbout ({className}) {

    return (
        <>
            <hr />
            <div className={className}>
            <h1>By Jose David Rueda</h1>
            <p>With this web app you can search for any city and see some weather related info, for instance temperature and its range.
            <div id="main">
            <h3>Functionalities:</h3>
            <ul>
                <li>There's a search bar in the upper right corner, where you clearly can see a city placeholder.</li>
                <li>It's not posible to search for a city twice.</li>
                <li>It's imposible to search something when you don't know its name.</li>
                <li>You can delete the city that you hate the most.</li>
                <li>In the main page all the cities you search will be listed and on top of them will be the last search you did.</li>
                <li>The last search will be seen from all the page except from here <span>(about)</span>.</li>
                <li>The cards' background change if in the city in question is daytime or not.</li>
                <li>You can access to a city extra details <span>(even a wiki)</span> by clicking on its respective card <span>(avoid the red button)</span>.</li>
                <li>Also the app is resposive, so if you have a phone feel free to go and test it.</li>
            </ul>

            <h3>Tecnologies:</h3>
            <ul>
                <li><a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a></li>
                <li><a href="https://reactrouterdotcom.fly.dev" target="_blank" rel="noopener noreferrer">React Router</a></li>
                <li><a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">Bootstramp</a></li>
                <li><a href="https://styled-components.com" target="_blank" rel="noopener noreferrer">Styled Components</a></li>
            </ul>
            </div>
            
            </p>
            <p>This app was made as part of and thanks to the <a id="henry" href="http://soyhenry.com" target="_blank" rel="noopener noreferrer license external">soyHenry</a> bootcamp</p>
        </div>
        <hr/>
    </>
    );
};

const About = styled(PreAbout)`
    margin: auto;
    max-width: 60%;
    max-height: 100%;
    padding: 2rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    line-height: 1.5rem;
    color: black;
    background: radial-gradient(ellipse, transparent 90%, rgba(5,9,0,0.8)22%);
    
    #main {
        text-align: justify;
    }

    li {
        list-style-type: "</>|  ";
    }
    
    span {
        text-decoration: line-through;
        color: #353333;
    }

    a {
        color: black;
        text-decoration: wavy;

        &:hover {
            color: rgba(30, 170, 27, 0.9);
        }
    }

    #henry {
        &:hover {
            color: #838100;
        }
    }

    @media (max-width: 700px) {
        margin: 0;
        max-width: 100%;
        max-height: 100%;
        background: radial-gradient(ellipse, rgba(5,9,0,0.5) 5%, transparent 100%);

    }
`;

export default About;