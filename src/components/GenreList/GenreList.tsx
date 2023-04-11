import useGenres, { Genres } from '../../hooks/useGenres'
import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text, useColorModeValue } from '@chakra-ui/react';
import getCroppedImageUrl from '../../services/image-url';

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
};

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const fontColor = useColorModeValue('black', 'white');


  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading marginBottom={10} fontSize='2xl'>Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <HStack marginBottom='1em'>
              <Image
                boxSize='32px'
                borderRadius={8}
                objectFit='cover'
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontSize='lg'
                variant='link'
                whiteSpace='normal'
                textAlign='left'
                color={fontColor}
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
};

export default GenreList;
