/* eslint-disable react-hooks/rules-of-hooks */
import {
  Grid,
  GridItem,
  Hide,
  Input,
  InputGroup,
  InputLeftElement,
  Show,
  Spacer,
  Spinner,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
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
  const handleTabChange = (selectedTab: string): void => {
    // Do something with the selected tab
    console.log('Selected tab:', selectedTab);
  };

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
      gap={2}
    >
      <GridItem overflow={"hidden"} area={"banner"}>
        <Show breakpoint="(min-width: 480px) and (max-width: 991px)">
          <TabletBanner />
        </Show>

        <Hide above="sm">
          <MobileAdvertBanner onTabChange={handleTabChange}/>
        </Hide>
        <Show breakpoint="(min-width: 992px)">
          <AdvertBanner onTabChange={handleTabChange}/>
        </Show>
        <Spacer />

        {/* <Box ml="auto" marginTop={5}> */}
        <InputGroup display={"flex"} marginTop={5}>
          <InputLeftElement children={<BsSearch />} />

          <Input
            placeholder="Search"
            // m={5}
            borderRadius={20}
            backgroundColor={"gray.200"}
            size={"md"}
            // width={{breakpoint: "(min-width: 480px) and (max-width: 767px)"}}
            width={{
              xl: "30%",
              lg: "30%",
              md: "40%",
              sm: "40%",
              base: "100%",
            }}
            // width={"35%"}
            border={"1px"}
            borderColor={"gray.300"}
            focusBorderColor={"gray.400"}
          />
        </InputGroup>
        {/* </Box> */}
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
