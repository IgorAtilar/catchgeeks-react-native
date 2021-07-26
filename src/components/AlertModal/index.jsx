import React from "react";

import { Modal } from "react-native";

import Header from "../Header";

import { theme } from "../../global/styles/theme";

import {
  ModalBackground,
  ModalContainer,
  ModalHeader,
  ModalText,
  ModalBody,
  ModalFooter,
  Button,
  ButtonText,
} from "./styles";

const AlertModal = ({
  modalVisible,
  setModalVisible,
  cancelAndSubmit,
  modalHeaderText,
  modalBodyText,
  submitFunction,
  cancelFunction,
  ...rest
}) => {
  return (
    <Modal visible={modalVisible} transparent {...rest}>
      <ModalBackground>
        <ModalContainer>
          <Header
            style={{ marginTop: 0, marginBottom: 10, borderTopLeftRadius: 20 }}
          />
          {modalHeaderText && (
            <ModalHeader>
              <ModalText>Gotcha!</ModalText>
            </ModalHeader>
          )}
          <ModalBody>
            <ModalText font={theme.fonts.text400} textSize={16}>
              {cancelAndSubmit ? modalBodyText : modalBodyText + " was caught!"}
            </ModalText>
          </ModalBody>
          <ModalFooter>
            {cancelAndSubmit && (
              <Button styleCancel onPress={() => cancelFunction()}>
                <ButtonText styleCancel>Cancel</ButtonText>
              </Button>
            )}
            <Button onPress={() => submitFunction()}>
              <ButtonText>Confirm</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContainer>
      </ModalBackground>
    </Modal>
  );
};

export default AlertModal;
