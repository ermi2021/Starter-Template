/* eslint-disable react-hooks/rules-of-hooks */
import {
  Grid,
  GridItem,
  Spinner,
} from "@chakra-ui/react";
import AdvertBanner from "../../../components/advertbanner";
import { useEffect, useState } from "react";
import { gameService } from "../../../services/gamesService";
import { GameProp } from "../../../props/game";
import Game from "../../../components/game";
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
          <Game games={games}/>
        </GridItem>
      )}
    </Grid>
  );
};

export default Home;
