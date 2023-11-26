/* eslint-disable react-hooks/rules-of-hooks */
import {
  Grid,
  GridItem,
  Box,
  Image,
  Text,
  Stack,
  Heading,
  Center,
  useColorModeValue,
  Spinner,
} from "@chakra-ui/react";
import AdvertBanner from "../../../components/advertbanner";
import { useEffect, useState } from "react";
import { gameService } from "../../../services/gamesService";
import { Link } from "react-router-dom";
import { GameProp } from "../../../props/game";
const Home = () => {

  const [games, setGames] = useState<GameProp[]>([]);
  const [loading, setLoading] = useState(false);

  const getGames = async () => {
    setLoading(true);
    try {
      const res = await gameService();

      if (res) {
        // setGames(res);
        console.log("response dataaa: ", res);
        let theGames = res;
        setGames(theGames as GameProp[]);
      } else {
        setGames([]); // Set an empty array or handle the error case appropriately
        console.error("Error in gameService");
      }
    } catch (error) {
      console.error("Error in getGames", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <Grid
      templateAreas={`"banner"
                  "main"
                  `}
      minH="100%"
      w={"100%"}
      gap={4}
    >
      <GridItem overflow={"hidden"} area={"banner"}>
        <AdvertBanner />
      </GridItem>
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          alignSelf={'center'}
          justifySelf={'center'}
        />
      ) : (
        <GridItem area={"main"}>
          <Grid
            templateColumns={{
              base: "repeat(3, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            minH="100%"
            w={"100%"}
            gap={4}
          >
            {games.map((game) => (
              <GridItem
                as={Link} // Use the Link component
                to={`/game/${game.id}`}
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
                        Brand
                      </Text>
                      <Heading
                        fontSize={"xl"}
                        fontFamily={"body"}
                        fontWeight={'semibold'}
                        textAlign={'center'}
                        textColor={'black'}
                      >
                       {game.title}
                      </Heading>
                    </Stack>
                  </Box>
                </Center>
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      )}
    </Grid>
  );
};

export default Home;
