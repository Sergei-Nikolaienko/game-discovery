import { Game } from '../../hooks/useGames';
import { Box, Card, CardBody, HStack, Heading, Image, useColorModeValue } from '@chakra-ui/react';
import PlatformIconList from '../PlatformIconList';
import CriticScore from '../CriticScore';
import Emoji from '../Emoji';
import getCroppedImageUrl from '../../services/image-url';

interface Props {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  const cardBg = useColorModeValue('linear-gradient(to right, #C9EEFF, #97DEFF)', '#2D3748');
  const cardBd = useColorModeValue('1px solid #4A5568', 'none');

  return (
    <Card 
      borderRadius={10}
      overflow={'hidden'}
      minHeight='380px'
      maxHeight='fit-content'
      bg={cardBg}
      border={cardBd}
    >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack 
          marginBottom={3}
          justifyContent={'space-between'}
        >
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading
          fontSize={'1.5rem'}
          marginBottom={'1em'}
        >
          <HStack justifyContent={'space-between'} >
            <Box marginBottom={1}>
             {game.name}
            </Box>
            <Emoji
              rating={game.rating_top} 
            />
          </HStack>
        </Heading>
      </CardBody>
    </Card>
  )
};

export default GameCard;
