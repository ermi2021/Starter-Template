/* eslint-disable react/jsx-no-undef */
"use client";

import {
  Box,
  Text,
  Button,
  SimpleGrid,
  Stack,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { accountService } from "../../../services/accountService";
import { UserProp } from "../../../props/user";
import StatsCard from "../../../components/statcard";
import { FaArrowDown, FaArrowUp, FaMoneyBillWave } from "react-icons/fa";
import Withdraw from "../../../components/withdraw";
import Deposit from "../../../components/deposit";

export default function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [withdraw, setWithdraw] = useState(false);
  const [userInformation, setUserInformation] = useState<UserProp | any>();

  const getUserInformation = async () => {
    const user = await accountService();

    if (user) {
      console.log("user: ", user);

      setUserInformation(user);
    }
  };
  const closeModal = () => {
    onClose();
  };
  useEffect(() => {
    getUserInformation();
  }, []);
  return (
    <Box h={"full"} flexDirection={"column"} mx={5}>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            {withdraw ? (
              <Withdraw onCloseModal={closeModal} />
            ) : (
              <Deposit onCloseModal={closeModal} />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

      <Stack
        direction="row"
        my={3}
        spacing={4}
        justify="space-between"
        alignContent={"center"}
        alignItems={"center"}
        mb={4}
      >
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
          <Button
            bg={"green.400"}
            color={"white"}
            onClick={() => {
              setWithdraw(false);
              onOpen();
            }}
          >
            Deposit
          </Button>
          <Button
            bg={"red.400"}
            color={"white"}
            onClick={() => {
              setWithdraw(true);
              onOpen();
            }}
          >
            Withdraw
          </Button>
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
