import React from "react";
import styled from 'styled-components';

export default function CharacterCard(props) {
  const {character} = props;
  return (
    <Card>
      <h3>{character.name}</h3>
      <img src={character.image} alt=''></img>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Species: {character.species}</p>
      <p>Status: {character.status}</p>
    </Card>
  );
}


// Begin styling:

const Card = styled.div`
width: 30%;
background-color: lightgrey;
margin-top: 20px;
padding-left: 5px;
`;
