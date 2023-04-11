import { HStack, Image, Link } from '@chakra-ui/react';
import logo from '../../assets/Logo/logo.webp';
import ColorModeSwitch from '../ColorModeSwitch';
import SearchInput from '../SearchInput';

interface Props {
  onSearch: (searchText: string) => void
};

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack gap={{lg: '110px'}} padding='2em'>
      <Link href='/'>
        <Image 
          src={logo}
          width={{base: '70px', md: '80px', lg: '90px'}}
          objectFit='contain' 
        />
      </Link>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  )
};

export default Navbar;
