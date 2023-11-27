import {
  Flex,
  Box,
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
        <Box
          h={"300px"}
          flexDirection={"row"}
          flex="1"
          justifyItems={"center"}
          alignContent={"center"}
          justifyContent={"center"}
       
          sx={{
            background:
              "url(https://t3.ftcdn.net/jpg/04/32/13/30/360_F_432133021_lpYj0WnQ6IrEZqPxRn3j0OPWBrascZjD.jpg) center/cover no-repeat",
          }}
        >
       
        </Box>
      </Flex>
      <Flex h={"fit-content"} w={"full"} bg={"cyan.800"}>
        <Box
          h={"300px"}
          flexDirection={"row"}
          flex="1"
          justifyItems={"center"}
          alignContent={"center"}
          justifyContent={"center"}
       
          sx={{
            background:
              "url(https://t3.ftcdn.net/jpg/04/32/13/30/360_F_432133021_lpYj0WnQ6IrEZqPxRn3j0OPWBrascZjD.jpg) center/cover no-repeat",
          }}
        >
       
        </Box>
      </Flex>
    </Carousel>
  );
};

export default AdvertBanner;
