import React, { useState, useContext } from "react";

import { DataContext } from "../../context/data";

import Avatar from "../Avatar";

import AlertModal from "../AlertModal";

import { CardButton } from "./styles";

const BoxItem = ({ avatar_url, geekIndex, name, login }) => {
  const { geekBox, setGeekBox } = useContext(DataContext);

  const [modalVisible, setModalVisible] = useState(false);

  const handleCancel = () => {
    setModalVisible(!modalVisible);
  };

  const handleSubmit = () => {
    const data = geekBox.filter((item, index) => {
      return index !== geekIndex;
    });
    setGeekBox(data);
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <CardButton onPress={() => setModalVisible(!modalVisible)}>
        <Avatar
          height={90}
          width={90}
          source={{ uri: avatar_url }}
          borderColor="transparent"
        />
      </CardButton>
      <AlertModal
        modalVisible={modalVisible}
        cancelAndSubmit
        cancelFunction={handleCancel}
        submitFunction={handleSubmit}
        modalBodyText={`Are you sure you  want to release ${
          name ? name : login
        }?`}
      />
    </>
  );
};

export default BoxItem;
