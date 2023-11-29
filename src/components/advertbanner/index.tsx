/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
import {
  Box,
  Image,
  useColorModeValue,
  Text,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
const AdvertBanner = () => {
  return (
    <Carousel
      showIndicators={false}
      showThumbs={false}
      autoPlay={false}
      infiniteLoop={false}
      showStatus={false}
    >
      <Box height={"fit"} bg={"teal.500"} paddingY={4}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          minH="100%"
          w={"fit"}
          marginX={10}
          gap={4}
        >
          {[
            "https://client-int.qtlauncher.com/images/?id=TRB-bayraktar_en_US&type=logo-square&version=1689799195526",
            "https://client-int.qtlauncher.com/images/?id=1x2-coinfield_en_US&type=logo-square&version=1667798993145",
            "https://client-int.qtlauncher.com/images/?id=GLX-coinflip_en_US&type=logo-square&version=1695782753222",
            "https://client-int.qtlauncher.com/images/?id=TRB-turboplinko_en_US&type=logo-square&version=1689797661198",
          ].map((val) => (
            <GridItem>
              <Box
                // flex={{ base: 1, sm: 0.5, md: 0.25, lg: 0.25 }}
                bg={useColorModeValue("white", "gray.800")}
                maxW="sm"
                borderWidth="1px"
                cursor={"pointer"}
                rounded="lg"
                shadow="lg"
                position="relative"
                _hover={{ shadow: "3xl", transition: "all .3s ease" }}
              >
                <Image src={val} w={"220"} h={"220"} roundedTop="lg" />
                <Text paddingY={2} fontSize={"sm"} fontWeight={"semibold"}>
                  Category
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Box height={"fit"} bg={"teal.500"} paddingY={4}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          minH="100%"
          w={"fit"}
          marginX={10}
          gap={4}
        >
          {[
            "https://client-int.qtlauncher.com/images/?id=TRB-bayraktar_en_US&type=logo-square&version=1689799195526",
            "https://client-int.qtlauncher.com/images/?id=1x2-coinfield_en_US&type=logo-square&version=1667798993145",
            "https://client-int.qtlauncher.com/images/?id=GLX-coinflip_en_US&type=logo-square&version=1695782753222",
            "https://client-int.qtlauncher.com/images/?id=TRB-turboplinko_en_US&type=logo-square&version=1689797661198",
          ].map((val) => (
            <GridItem>
              <Box
                // flex={{ base: 1, sm: 0.5, md: 0.25, lg: 0.25 }}
                bg={useColorModeValue("white", "gray.800")}
                maxW="sm"
                borderWidth="1px"
                cursor={"pointer"}
                rounded="lg"
                shadow="lg"
                position="relative"
                _hover={{ shadow: "3xl", transition: "all .3s ease" }}
              >
                <Image src={val} w={"220"} h={"220"} roundedTop="lg" />
                <Text paddingY={2} fontSize={"sm"} fontWeight={"semibold"}>
                  Category
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Carousel>
  );
};

export default AdvertBanner;
