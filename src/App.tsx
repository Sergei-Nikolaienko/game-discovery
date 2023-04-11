import { useState } from 'react'
import { Box, Flex, Grid, GridItem, Show, Hide, useColorModeValue } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { Genres } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';
import GenreSelector from './components/GenreSelector';

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
};

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
      <GridItem 
        area='nav' 
        marginBottom={{base: '1em', md: '1.5em', lg: '2em'}}
      >
        <Navbar
          onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}
        />
      </GridItem>
      <Show above='lg'>
        <GridItem 
          area='aside'
          paddingX='2.5em'
          height='max-content'
        >
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <Box 
          paddingLeft={2.5}
          marginBottom={5}
          textAlign={{base: 'center', lg: 'left'}}
        >
          <GameHeading
            gameQuery={gameQuery}
          />
        </Box>
        <Flex
          paddingLeft={2.5}
          marginBottom={5}
          gap={5}
          justifyContent={{base: 'center', lg: 'left'}}
        >
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}
          />
          <SortSelector 
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
          />
          <Hide above='lg'>
            <GenreSelector
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </Hide>
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
};

export default App;
