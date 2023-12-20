/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
import { Tab, TabList, Tabs } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { categoriesService } from "../../services/categoriesService";
import { CategoryProp } from "../../props/category";

const AdvertBanner = ({
  onTabChange,
}: {
  onTabChange: (selectedTab: CategoryProp, selected: CategoryProp) => void;
}) => {
  // Set the default selected tab
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<CategoryProp[]>([]);
  const [selectedTab, setSelectedTab] = useState<CategoryProp | null>(null);

  const handleTabChange = (tab: CategoryProp) => {
    setSelectedTab(tab);
    onTabChange(tab, selectedTab || categories[0]); // Pass the selected tab to the parent
  };

  const getCategories = async () => {
    setLoading(true);
    try {
      const res = await categoriesService();

      if (res) {
        console.log('response to categoires: ', res);
        
        setCategories(res as CategoryProp[]);
      } else {
        setCategories([]); // Set an empty array or handle the error case appropriately
        console.error("Error in categoriesService");
      }
    } catch (error) {
      console.error("Error in getCategories", error);
    } finally {
      setLoading(false);
      console.log("categories🙄: ", categories);
    }
  };

  useEffect(() => {
    getCategories();
  }, []); // Removed categories from the dependency array

  return (
    <>
      {!loading && categories !== undefined && categories !== null ? (
        <Tabs
          size={"sm"}
          overflowX={"scroll"}
          variant="unstyled"
          colorScheme="green"
        >
          <TabList>
            {categories.map((category) => (
              <Tab
                key={category.id} // Assuming category has a unique identifier like an "id"
                rounded={"md"}
                shadow={"sm"}
                fontSize={"12px"}
                fontWeight={"medium"}
                bg={"gray.300"}
                ml={2}
                mb={2}
                width={"300px"}
                _selected={{ color: "white", bg: "teal.500" }} // Style for the selected tab
                onClick={() => handleTabChange(category)}
              >
                {category.title}
              </Tab>
            ))}
          </TabList>
        </Tabs>
      ) : (
        <></>
      )}
    </>
  );
};

export default AdvertBanner;
