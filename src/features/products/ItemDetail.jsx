import React from 'react';
import {
    Modal,
    ModalBody,
    ModalContext,
    ModalFooter,
    ModalHeader,
    Button,
} from 'flowbite-react';

export default function ItemDetail() {
    return (
        <div>
            <Modal show={true} size="md" popup={true} dismissible>
                <ModalHeader>Item Details</ModalHeader>
                <ModalBody>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                        This is where the item details will be displayed.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="gray"
                        onClick={() => console.log('Close modal')}
                    >
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
