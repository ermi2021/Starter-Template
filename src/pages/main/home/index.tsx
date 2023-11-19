import { Grid, GridItem } from "@chakra-ui/react";

const Home = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(2,1fr)",
        xl: "repeat(3,1fr)",
      }}
      minH="100%"
      w={"100%"}
      gap={4}
    >
      <GridItem
        rowSpan={2}
        bg="gray.300"
        h={300}
        borderRadius={"lg"}
      ></GridItem>
      <GridItem
        rowSpan={2}
        h={300}
        bg="gray.300"
        borderRadius={"lg"}
      ></GridItem>
      <GridItem
        rowSpan={2}
        h={300}
        bg="gray.300"
        borderRadius={"lg"}
      ></GridItem>
      <GridItem
        rowSpan={2}
        h={300}
        bg="gray.300"
        borderRadius={"lg"}
      ></GridItem>
      <GridItem
        rowSpan={2}
        h={300}
        bg="gray.300"
        borderRadius={"lg"}
      ></GridItem>
      <GridItem
        rowSpan={2}
        h={300}
        bg="gray.300"
        borderRadius={"lg"}
      ></GridItem>
      <GridItem
        rowSpan={2}
        h={300}
        bg="gray.300"
        borderRadius={"lg"}
      ></GridItem>
      <GridItem rowSpan={2} bg="gray.300" borderRadius={"lg"}></GridItem>
      <GridItem rowSpan={2} bg="gray.300" borderRadius={"lg"}></GridItem>
    </Grid>
  );
};

export default Home;
