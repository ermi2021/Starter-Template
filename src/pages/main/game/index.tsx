/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GameProp } from "../../../props/game";
import {
  Box,
  Center,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

const Game = () => {
  const location = useLocation();
  const [game, setGame] = useState<GameProp | null>();
  // Check if state exists and has a game object

  useEffect(() => {
    setGame(location.state?.game || null);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <Center py={12}>
      {game && (
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${game?.chanceFirepot1})`,
              filter: "blur(10px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"sm"}
              height={200}
              width={282}
              objectFit={"contain"}
              src={game.chanceFirepot1}
              alt="#"
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              Game
            </Text>
            <Heading
              fontSize={"xl"}
              fontFamily={"body"}
              fontWeight={"semibold"}
              textAlign={"center"}
              textColor={"black"}
            >
              {game.title}
            </Heading>
          </Stack>
        </Box>
      )}
    </Center>
  );
};

export default Game;
