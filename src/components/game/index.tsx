/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Link,
  Center,
  Grid,
  GridItem,
  Heading,
  Text,
  Stack,
  Image,
  useColorModeValue,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Modal,
  ModalOverlay,
  Spinner,
  Hide,
} from "@chakra-ui/react";
import { GameProp } from "../../props/game";
import { getGameUrl } from "../../services/gameService";
import { useState } from "react";

const Game = ({ games }: { games: GameProp[] }) => {
  const [loading, setLoading] = useState(false);
  const [accountCheck, setAccountCheck] = useState(false);
  const { onClose } = useDisclosure();
  const resolveGameUrl = async (name: string) => {
    setLoading(true);
    const gameUrl: any = await getGameUrl(name);
    console.log(gameUrl);

    if (gameUrl?.url && localStorage.getItem("token")) {
      setLoading(false);
      window.open(gameUrl?.url, "_blank");
    } else {
      setLoading(false);
    }
  };
  return (
    <Box>
      <Modal isCentered isOpen={loading} onClose={onClose}>
        <Hide below="md">
          <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(10px) hue-rotate(90deg)"
          />
        </Hide>

        <ModalContent>
          <ModalHeader fontWeight={"bold"} fontSize={"md"} textAlign={"center"}>
            Your Game is Loading, Please Wait
          </ModalHeader>

          <ModalBody py={3}>
            <Center>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal
        isCentered
        isOpen={accountCheck}
        onClose={() => {
          setAccountCheck(false);
        }}
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalCloseButton />
        <ModalContent>
          <ModalHeader> Sign in required!</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Text textAlign={"left"} fontWeight={"bold"}>
              {" "}
              Sign in to play a game.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        minH="100%"
        w={"100%"}
        gap={4}
      >
        {games.map((game) => (
          <GridItem
            as={Link} // Use the Link component
            onClick={() => {
              if (localStorage.getItem("token")) {
                resolveGameUrl(game.name);
              } else {
                setAccountCheck(true);
              }
            }}
            cursor={"pointer"}
          >
            <Center py={12}>
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
                    backgroundImage: `url(${game.chanceFirepot1})`,
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
                    GAME
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
            </Center>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
export default Game;
