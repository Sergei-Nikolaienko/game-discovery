import { HStack, Image, Link } from '@chakra-ui/react';
import logo from '../../assets/Logo/logo.webp';
import ColorModeSwitch from '../ColorModeSwitch';
import SearchInput from '../SearchInput';

interface Props {
  onSearch: (searchText: string) => void
};

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding='2em'>
      <Link href='/'>
        <Image src={logo} boxSize='60px' objectFit='cover' />
      </Link>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  )
};

export default Navbar;
