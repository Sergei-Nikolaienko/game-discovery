import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import useGenres, { Genres } from '../../hooks/useGenres';

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
};

const GenreSelector = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        Genres:
      </MenuButton>
      <MenuList>
        {data.map((genre) => (
          <MenuItem
            key={genre.id}
            fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
            onClick={() => onSelectGenre(genre)}
          >
            {genre.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
};

export default GenreSelector;
