/* eslint-disable react/jsx-no-undef */
import {
  Box,
  Button,
  Divider,
  Input,
  Text,
  Stack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

const Withdraw = (props: { onCloseModal: () => void }) => {
  const [isLoading, setIsLoading] = useState(false);
  const WithdrawSchema = yup.object().shape({
    withdrawamount: yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      withdrawamount: "",
    },
    validationSchema: WithdrawSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        props.onCloseModal();
      }, 2000);
    },
  });
  return (
    <Box
      bg={"white"}
      p={7}
      borderRadius={"lg"}
      boxShadow={"lg"}
      dropShadow={"lg"}
    >
      <Divider
        orientation="horizontal"
        color={"black"}
        size={"lg"}
        height={"0.5"}
      />
      <Stack spacing={4}>
        <Box>
          <Text fontSize="xl" fontWeight={"bold"}>
            Withdraw
          </Text>
        </Box>
        <Input
          isInvalid={formik.errors.withdrawamount ? true : false}
          errorBorderColor="red.200"
          borderWidth={"thin"}
          focusBorderColor="gray.300"
          borderColor={"gray.400"}
          name="username"
          placeholder="Withdraw amount:"
          size="md"
          onChange={formik.handleChange("withdrawamount")}
        />

        <Button
          isLoading={isLoading}
          onClick={() => {
            formik.handleSubmit();
          }}
          colorScheme={"teal"}
          variant={"solid"}
          fontSize={12}
        >
          Submit
        </Button>
      </Stack>
      <Divider orientation="horizontal" marginY={2} size={"lg"} />
    </Box>
  );
};

export default Withdraw;
