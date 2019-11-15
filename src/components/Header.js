import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Head>
      <h1>Rick &amp; Morty Fan Page</h1>
      <Link to='/'>
        <button>
          Home
        </button>
      </Link>
    </Head>
  );
}


// Begin styling:

const Head = styled.header`
color: white;
background-color: blue;
text-align: center;

& h1{
  margin: 0;
  padding: 10px;
}

& button{
  color: white;
  background-color: red;
  padding: 10px;
  margin: 5px;
`;
