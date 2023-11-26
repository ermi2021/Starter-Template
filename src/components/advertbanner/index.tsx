import {
  Text,
  Flex,
  Center,
  Box,
  Image,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
const AdvertBanner = () => {
  return (
    <Carousel
      showIndicators={false}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
    >
      <Flex h={"fit-content"} w={"full"} bg={"cyan.800"}>
        <VStack
          flex="0.5"
          py={"auto"}
          px={"20"}
          display="flex"
          flexDirection={"column"}
          alignItems="start"
          justifyContent={"center"}
        >
          <Text
            fontSize={"2xl"}
            textColor={"white"}
            textAlign={"left"}
            justifySelf={"center"}
            ml={"10"}
          >
            Welcome back, username
          </Text>
          <Text
            fontSize={"xl"}
            textColor={"white"}
            textAlign={"left"}
            justifySelf={"center"}
            ml={"10"}
          >
            Game Title
          </Text>
        </VStack>

        <Box
          h={"300px"}
          flexDirection={"row"}
          flex="0.5"
          alignContent={"start"}
          justifyContent={"start"}
        >
          <Box boxSize={"sm"}>
            <Image
              align="start"
              objectFit={"contain"}
              mb={2}
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </Box>
        </Box>
      </Flex>
          <Flex h={"fit-content"} w={"full"} bg={"cyan.800"}>
        <VStack
          flex="0.5"
          py={"auto"}
          px={"20"}
          display="flex"
          flexDirection={"column"}
          alignItems="start"
          justifyContent={"center"}
        >
          <Text
            fontSize={"2xl"}
            textColor={"white"}
            textAlign={"left"}
            justifySelf={"center"}
            ml={"10"}
          >
            Welcome back, username
          </Text>
          <Text
            fontSize={"xl"}
            textColor={"white"}
            textAlign={"left"}
            justifySelf={"center"}
            ml={"10"}
          >
            Game Title
          </Text>
        </VStack>

        <Box
          h={"300px"}
          flexDirection={"row"}
          flex="0.5"
          alignContent={"start"}
          justifyContent={"start"}
        >
          <Box boxSize={"sm"}>
            <Image
              align="start"
              objectFit={"contain"}
              mb={2}
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </Box>
        </Box>
      </Flex>
    </Carousel>
  );
};

export default AdvertBanner;
