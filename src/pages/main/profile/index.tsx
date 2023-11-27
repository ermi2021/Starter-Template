/* eslint-disable react/jsx-no-undef */
"use client";

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
  Stat,
  StatLabel,
  StatNumber,
  SimpleGrid,
  Center,
  Stack,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";

import { useEffect, useState } from "react";
import { accountService } from "../../../services/accountService";
import { UserProp } from "../../../props/user";
import StatsCard from "../../../components/statcard";
import { FaArrowDown, FaArrowUp, FaMoneyBillWave } from "react-icons/fa";

export default function Profile() {
  const [userInformation, setUserInformation] = useState<UserProp | any>();
  const [showDepositInput, setShowDepositInput] = useState(false);
  const [showWithdrawInput, setShowWithdrawInput] = useState(false);
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const getUserInformation = async () => {
    const user = await accountService();

    if (user) {
      console.log("user: ", user);

      setUserInformation(user);
    }
  };

  const handleDepositClick = () => {
    setShowDepositInput(true);
    setShowWithdrawInput(false);
};

const handleWithdrawClick = () => {
    setShowWithdrawInput(true);
    setShowDepositInput(false);
};

  useEffect(() => {
    getUserInformation();
  }, []);
  return (
    <Box h={"full"} flexDirection={"column"} mx={5}>
      <Stack direction="row" my={3} spacing={4} justify="space-between" alignContent={'center'} alignItems={'center'} mb={4}>
      <Text
        fontWeight={"bold"}
        fontSize={"2xl"}
        color={"black"}
        my={4}
        textAlign={"center"}
      >
        Account Information
      </Text>
      <Stack direction="row" my={3} spacing={4} justify="end" mb={4}>
        <Button  bg={'green.400'} color={'white'} onClick={handleDepositClick}>Deposit</Button>
        <Button bg={'red.400'} color={'white'} onClick={handleWithdrawClick}>Withdraw</Button>
      </Stack>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Balance"}
          stat={userInformation?.balance + " " + userInformation?.currency}
          icon={<FaMoneyBillWave size={"2em"} />}
        />
        <StatsCard
          title={"Total In"}
          stat={userInformation?.total_in + " " + userInformation?.currency}
          icon={<FaArrowDown size={"2em"} />}
        />
        <StatsCard
          title={"Total Out"}
          stat={userInformation?.total_out + " " + userInformation?.currency}
          icon={<FaArrowUp size={"2em"} />}
        />
      </SimpleGrid>
     
    </Box>
  );
}
