/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import { Spinner,Center } from "@chakra-ui/react";
import { useEffect, useState} from "react";
import { GameProp } from "../../../props/game";
import { gameService } from "../../../services/gamesService";
import Game from "../../../components/game";

const Games = () => {
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
    <>
       {loading ? (
        <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          alignSelf={'center'}
          justifySelf={'center'}
        />
        </Center>
      ) : (
        <Game games={games}/>
      )}
   </>
  );
};

export default Games;
