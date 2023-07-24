import axios from "axios";
import { updateStart, updateSuccess, updateError } from "./userSlice";

export const updateUser = async (userData, dispatch) => {
  dispatch(updateStart());
  console.log("data upadte start:");
  try {
    const postedData = await axios.post(
      "http://localhost:8800/api/users/123/update",
      userData
    );
    //on successful posting,we can dispatch "updateSuccess"
    //with payload=res.data
    dispatch(updateSuccess(postedData.data));
  } catch (error) {
    dispatch(updateError());
    alert("Something went Wrong!!");
  }
};
