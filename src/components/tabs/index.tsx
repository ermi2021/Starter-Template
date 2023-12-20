/* eslint-disable react/jsx-no-undef */
import {
  TabList,
  TabPanels,
  TabPanel,
  Tabs,
  Tab,
  TabIndicator,
} from "@chakra-ui/react";

const GamesTab = () => {
  return (
    <Tabs align="center" isFitted>
      <TabIndicator mt="-1.5px" height="3px" bg="cyan.700" borderRadius="3px" />
      <TabList fontWeight={'bold'}>
        <Tab  fontWeight={'semibold'} textColor={'cyan.700'}>All</Tab>
        <Tab  fontWeight={'semibold'} textColor={'cyan.700'}>Popular</Tab>
        <Tab  fontWeight={'semibold'} textColor={'cyan.700'}>Most Played</Tab>
      </TabList>
    </Tabs>
  );
};

export default GamesTab;
