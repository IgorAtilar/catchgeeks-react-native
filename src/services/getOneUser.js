import api from "./api";

export const getOneUser = async (login) => {
  try{
    const response = await api.get("users/"+login);
    return response.data;
  }catch(e){
    console.log('Error on getOneUser ', e)
  }
};
