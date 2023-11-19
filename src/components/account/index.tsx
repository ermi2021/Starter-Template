
import React, { useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Text,
} from '@chakra-ui/react';

const Account = () => {
    const [balance, setBalance] = useState(0);
    const [showDepositInput, setShowDepositInput] = useState(false);
    const [showWithdrawInput, setShowWithdrawInput] = useState(false);
    const [depositAmount, setDepositAmount] = useState(0);
    const [withdrawAmount, setWithdrawAmount] = useState(0);

    const handleDepositClick = () => {
        setShowDepositInput(true);
        setShowWithdrawInput(false);
    };

    const handleWithdrawClick = () => {
        setShowWithdrawInput(true);
        setShowDepositInput(false);
    };

    const handleDepositSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // setBalance(balance + depositAmount);
        // setDepositAmount(0);
        setShowDepositInput(false);
    };

    const handleWithdrawSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // setBalance(balance - withdrawAmount);
        // setWithdrawAmount(0);
        setShowWithdrawInput(false);
    };

    return (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={4}>
                Total balance: {balance}
            </Text>
            <Stack direction="row" spacing={4} justify="center" mb={4}>
                <Button onClick={handleDepositClick}>Deposit</Button>
                <Button onClick={handleWithdrawClick}>Withdraw</Button>
            </Stack>
            {showDepositInput && (
                <form onSubmit={handleDepositSubmit} >
                    <FormControl textAlign="center" maxW='40%' marginLeft='5%'>
                        <FormLabel>Deposit amount:</FormLabel>
                        <Input
                            type="number"
                            placeholder='Please enter the deposit number'
                            // value={depositAmount}
                            onChange={(event) => setDepositAmount(Number(event.target.value))}
                        />
                    </FormControl>
                    <Button marginLeft='5%' type="submit" mt={4} colorScheme="green">
                        Submit
                    </Button>
                </form>
            )}
            {showWithdrawInput && (
                <form onSubmit={handleWithdrawSubmit}>
                    <FormControl>
                        <FormLabel>Withdraw amount:</FormLabel>
                        <Input
                            type="number"
                            placeholder='Please enter your amount'
                            // value={withdrawAmount}
                            onChange={(event) => setWithdrawAmount(Number(event.target.value))}
                        />
                    </FormControl>
                    <Button type="submit" mt={4} colorScheme="red">
                        Submit
                    </Button>
                </form>
            )}
        </Box>
    );
};

export default Account;
