import React from 'react'
import useGenres, { Genres } from '../../hooks/useGenres'
import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../../services/image-url';

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack marginBottom='1em'>

            <Image
              boxSize='32px'
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />

            <Button 
              fontSize='lg' 
              variant='link'
              fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
            
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList