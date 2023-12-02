/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Grid,
  GridItem,
  Hide,
  Input,
  Show,
  Spacer,
  Spinner,
} from "@chakra-ui/react";
import AdvertBanner from "../../../components/advertbanner";
import { useEffect, useState } from "react";
import { gameService } from "../../../services/gamesService";
import { GameProp } from "../../../props/game";
import Game from "../../../components/game";
import MobileAdvertBanner from "../../../components/mobileadvertbanner";
import TabletBanner from "../../../components/tabbanner";
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
        <Show breakpoint="(min-width: 480px) and (max-width: 991px)">
          <TabletBanner />
        </Show>

        <Hide above="sm">
          <MobileAdvertBanner />
        </Hide>
        <Show breakpoint="(min-width: 992px)">
          <AdvertBanner />
        </Show>
        <Spacer />
        <Hide breakpoint="(max-width: 767px)">
          <Box marginTop={2} justifyContent="right" display="flex">
            <Input
              placeholder="Search"
              m={5}
              size={"md"}
              width={"30%"}
              borderColor={"gray.300"}
              focusBorderColor={"gray.400"}
            />
          </Box>
        </Hide>
      </GridItem>
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          alignSelf={"center"}
          justifySelf={"center"}
        />
      ) : (
        <GridItem area={"main"}>
          <Game games={games} />
        </GridItem>
      )}
    </Grid>
  );
};

export default Home;
