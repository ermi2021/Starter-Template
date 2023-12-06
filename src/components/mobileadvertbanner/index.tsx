import {
  Box,
  Image,
  List,
  ListItem,
  Button,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import { images2 } from "../../../src/utils/data/caresoulimages/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MobileAdvertBanner = () => {
  return (
    <Carousel
      showIndicators={false}
      showThumbs={false}
      autoPlay={false}
      infiniteLoop={false}
      showStatus={false}
    >
      <Box height={"fit"} bg={"teal.500"} paddingY={5}>
        <List margin={"auto"} width={"90%"}>
          <SimpleGrid columns={{ base: 3 }}>
            {images2.map((image: any) => (
              <ListItem paddingY="15px">
                <VStack>
                  <Image
                    boxSize="70px"
                    borderRadius={10}
                    objectFit="contain"
                    src={image}
                  />

                  <Button
                    height={"5"}
                    fontSize="sm"
                    color={"white"}
                    fontWeight={"light"}
                    variant="unstyled"
                    textDecoration="none"
                    whiteSpace="normal"
                    textAlign="center"
                    wordBreak={"break-word"}
                  >
                    Category
                  </Button>
                </VStack>
              </ListItem>
            ))}
          </SimpleGrid>
        </List>
      </Box>

      <Box height={"fit"} bg={"teal.500"} paddingY={5}>
        <List margin={"auto"} width={"90%"}>
          <SimpleGrid columns={{ base: 3 }}>
            {images2.map((image: any) => (
              <ListItem paddingY="15px">
                <VStack>
                  <Image
                    boxSize="70px"
                    borderRadius={10}
                    objectFit="contain"
                    src={image}
                  />

                  <Button
                    height={"5"}
                    fontSize="sm"
                    color={"white"}
                    fontWeight={"light"}
                    variant="unstyled"
                    textDecoration="none"
                    whiteSpace="normal"
                    textAlign="center"
                    wordBreak={"break-word"}
                  >
                    Category
                  </Button>
                </VStack>
              </ListItem>
            ))}
          </SimpleGrid>
        </List>
      </Box>

      <Box height={"fit"} bg={"teal.500"} paddingY={5}>
        <List margin={"auto"} width={"90%"}>
          <SimpleGrid columns={{ base: 3 }}>
            {images2.map((image: any) => (
              <ListItem paddingY="15px">
                <VStack>
                  <Image
                    boxSize="70px"
                    borderRadius={10}
                    objectFit="contain"
                    src={image}
                  />

                  <Button
                    height={"5"}
                    fontSize="sm"
                    color={"white"}
                    fontWeight={"light"}
                    variant="unstyled"
                    textDecoration="none"
                    whiteSpace="normal"
                    textAlign="center"
                    wordBreak={"break-word"}
                  >
                    Category
                  </Button>
                </VStack>
              </ListItem>
            ))}
          </SimpleGrid>
        </List>
      </Box>
    </Carousel>
  );
};

export default MobileAdvertBanner;
