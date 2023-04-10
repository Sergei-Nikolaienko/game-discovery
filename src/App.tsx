import { useState } from 'react'
import { Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import './App.css'
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import useGenres, { Genres } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';

function App() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);

  return (
    <Grid 
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area='nav'>
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX='2.5em'>
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)} />
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
