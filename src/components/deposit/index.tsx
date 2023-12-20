/* eslint-disable react/jsx-no-undef */
import {
  Box,
  Button,
  Divider,
  Input,
  Text,
  Stack,
  useToast
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { topUpAmount } from "../../services/accountService";
import SuccessToast from "../toast/successtoast";
import ErrorToast from "../toast/errortoast";


const Deposit = (props: { onCloseModal: () => void }) => {
  const [isLoading, setIsLoading] = useState(false);
  const DepositSchema = yup.object().shape({
    depositamount: yup.string().required(),
  });
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      depositamount: "",
    },
    validationSchema: DepositSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      topUpAmount(values.depositamount).then ((res) => {
        if (res) {
          SuccessToast({
            message: "Deposited successfully",
            title: "Deposit",
            toast: toast,
          });
          setIsLoading(false);
          setTimeout(() => {
            setIsLoading(false);
            props.onCloseModal();
          }, 3000);
        } else {
          ErrorToast({
            message: "Incorrect pin code",
            title: "Deposit failed.",
            toast: toast,
          });

          setIsLoading(false);
          props.onCloseModal();
        }
      });
      setTimeout(() => {
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
            Deposit
          </Text>
        </Box>
        <Input
          isInvalid={formik.errors.depositamount ? true : false}
          errorBorderColor="red.200"
          borderWidth={"thin"}
          focusBorderColor="gray.300"
          borderColor={"gray.400"}
          name="username"
          placeholder="Pin code:"
          size="md"
          onChange={formik.handleChange("depositamount")}
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

export default Deposit;
