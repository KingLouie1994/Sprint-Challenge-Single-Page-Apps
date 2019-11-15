import React, { useState } from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';

export default function App() {

  const [characters, setCharacters] = useState([]);

  return (
    <main>
      <Header />
      <Route exact path='/' render={props => <WelcomePage {...props} />} />
      <Route path='/characters'
        render={props => <CharacterList
          {...props}
          characters={characters}
          setCharacters={setCharacters} />}
      />
    </main>
  );
}

