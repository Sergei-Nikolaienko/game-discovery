import { HStack, Image, Link, useColorModeValue } from '@chakra-ui/react';
import logo from '../../assets/Logo/logo.webp';
import ColorModeSwitch from '../ColorModeSwitch';
import SearchInput from '../SearchInput';

interface Props {
  onSearch: (searchText: string) => void
};

const Navbar = ({ onSearch }: Props) => {
  const navBG = useColorModeValue('linear-gradient(to right, #C9EEFF, #97DEFF)', 'none');
  const navBD = useColorModeValue('1px solid #4A5568', 'none');

  return (
    <HStack 
      bg={navBG} 
      borderBottom={navBD} 
      gap={{lg: '110px'}} 
      padding='1em 2em'
      borderRadius={{base: '0', lg: '0 0 2em 2em'}}
    >
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
