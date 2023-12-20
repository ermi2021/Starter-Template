/* eslint-disable react/jsx-no-undef */
import {
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import { Categories } from "../../../src/utils/data/caresoulimages/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";

const MobileAdvertBanner = ({ onTabChange }: { onTabChange: (selectedTab: string, selected: string) => void;}) => {
  const [selectedTab, setSelectedTab] = useState(Categories[0]); // Set the default selected tab

  const handleTabChange = (tab:string, selectedTab:string) => {
    setSelectedTab(tab);
    onTabChange(tab, selectedTab); // Pass the selected tab to the parent
  };
  return (
    <>
    <Tabs size={'sm'} overflowX={'scroll'} variant="unstyled" colorScheme="green">
      <TabList>
        {Categories.map((category) => (
          <Tab   
          key={category}
          rounded={'md'}
          shadow={'sm'}
          fontSize={'10px'}
          fontWeight={'medium'}
          bg={'gray.300'}
          ml={2}
          mb={2}
          width={'300px'}
          _selected={{ color: 'white', bg: 'teal.500' }} // Style for the selected tab
          onClick={() => handleTabChange(category, selectedTab)}>{category}</Tab>
        ))}
      </TabList>
    </Tabs>
    </>
  );
};

export default MobileAdvertBanner;
