/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Link,
  Center,
  Grid,
  GridItem,
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
  Show,
} from "@chakra-ui/react";
import { GameProp } from "../../props/game";
import { useState } from "react";
import { useNavigate } from "react-router";

const Game = ({ games }: { games: GameProp[] }) => {
  const navigate = useNavigate();
  const [accountCheck, setAccountCheck] = useState(false);
  const { isOpen,onClose } = useDisclosure();

  return (
    <Box>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
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
        <ModalContent margin={3} padding={2}>
          <ModalHeader textAlign={"center"}> Sign in required!</ModalHeader>
          <ModalCloseButton />

          <ModalBody textAlign={"center"} fontWeight={"semibold"} mb={5}>
            Sign in to play a game.
          </ModalBody>
        </ModalContent>
      </Modal>

      <Grid
        templateColumns={{
          base: "repeat(3, 1fr)",
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
                navigate(`game/play/${game.name}`);
              } else {
                setAccountCheck(true);
              }
            }}
            cursor={"pointer"}
          >
            <Hide above="sm">
              <Center>
                <Image
                  rounded={"lg"}
                  // height={200}
                  shadow="md"
                  width={282}
                  objectFit={"contain"}
                  src={game.chanceFirepot1}
                  alt="#"
                />
              </Center>
            </Hide>
            <Show above="sm">
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
                  {/* <Stack pt={10} align={"center"}>
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
                  </Stack> */}
                </Box>
              </Center>
            </Show>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
export default Game;
