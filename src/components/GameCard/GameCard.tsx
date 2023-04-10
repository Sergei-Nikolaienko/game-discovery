import React from 'react'
import { Game } from '../../hooks/useGames';
import { Box, Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import PlatformIconList from '../PlatformIconList';
import CriticScore from '../CriticScore';
import getCroppedImageUrl from '../../services/image-url';
import Emoji from '../Emoji';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'} height='350px'>
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
          fontSize={'2xl'} 
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
}

export default GameCard