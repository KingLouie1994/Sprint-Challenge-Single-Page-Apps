import React, { useEffect } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from 'styled-components';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  const {characters, setCharacters, setServerError} = props;
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      setCharacters(response.data.results)
    })
    .catch(err => {
      setServerError(err.message)
    })
  }, [setCharacters, setServerError]);

  return (
    <List>
      {characters.map(chr => (
        <CharacterCard key={chr.id} character={chr}/>
      ))}
    </List>
  );
}


// Begin styling:

const List = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;
