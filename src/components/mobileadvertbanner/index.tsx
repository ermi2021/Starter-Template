import { Box, Image, GridItem, Grid } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import { images } from "../../../src/utils/data/caresoulimages/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const MobileAdvertBanner = () => {
  return (
    <Carousel
      showIndicators={false}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={false}
      showStatus={false}
    >
      {images.map((image: any) => (
        <Box height={"fit"} bg={"teal.500"} paddingY={5}>
          <Box width="85%" margin="auto">
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
              //   gap={8}
            >
              <GridItem>
                <Box
                  // flex={{ base: 1, sm: 0.5, md: 0.25, lg: 0.25 }}
                  //   bg={useColorModeValue("white", "gray.800")}
                  maxW="sm"
                  borderWidth="1px"
                  cursor={"pointer"}
                  rounded="lg"
                  shadow="lg"
                  position="relative"
                  _hover={{ shadow: "3xl", transition: "all .3s ease" }}
                >
                  <Image src={image} rounded="lg" />
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default MobileAdvertBanner;
