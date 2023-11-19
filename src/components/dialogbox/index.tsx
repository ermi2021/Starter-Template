
import React from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@chakra-ui/react"

type DialogBoxProps = {
    active: boolean;
    message: string;
    okayButtonText: string;
    onOkay: () => void;
};

const DialogBox: React.FC<DialogBoxProps> = ({
    active,
    message,
    okayButtonText,
    onOkay,
}) => {
    return (
        <Modal isOpen={active} onClose={onOkay}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{message}</ModalHeader>
                <ModalBody>
                    <Button colorScheme="blue" onClick={onOkay}>{okayButtonText}</Button>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onOkay}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default DialogBox;
