import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Head>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <h2>
          To see a list of Rick and Morty characters:
        </h2>
        <Link to='/characters'>
          <button>
            Click here!
        </button>
        </Link>
      </Head>
    </section>
  );
}

// Begin styling:

const Head = styled.header`
display: flex;
flex-direction: column;
align-items: center;
color: red;
background-color: blue;

& img{
  width: 40%;
}

& button{
  color: white;
  background-color: red;
  padding: 10px;
  margin: 5px;
}
`;
