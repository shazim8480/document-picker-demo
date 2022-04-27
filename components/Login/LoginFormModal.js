import React from "react";
import { Button, Modal, FormControl, Input, Center, Image } from "native-base";

const LoginFormModal = ({ showModal, setShowModal }) => {
  //   const [showModal, setShowModal] = useState(false);
  return (
    <Center>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>
            <Center>
              <Image
                size={150}
                resizeMode={"contain"}
                source={require("../../assets/LOGO-BD.png")}
                alt="Alternate Text"
              />
            </Center>
          </Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Password</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default LoginFormModal;
