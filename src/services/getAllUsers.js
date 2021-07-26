import api from "./api";

export const getAllUsers = async () => {
  try {
    const response = await api.get("users");
    return response.data;
  } catch (e) {
    console.log("Error on getAllUsers", e);
  }
};
