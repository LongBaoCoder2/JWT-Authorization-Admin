import {
  getAllUserFail,
  getAllUserProcess,
  getAllUserSuccess,
} from "../../redux/Slice/userSlice";
import axios from "../api/axiosClient";

export const getAllUserRequest = async (accessToken, dispatch) => {
  dispatch(getAllUserProcess());
  try {
    const res = await axios.get("/v1/users", {
      headers: {
        Authorization: `Beaer ${accessToken}`,
      },
    });
    const users = res.data.map((user) => {
      return {
        id: user._id,
        username: user.username,
        email: user.email,
      };
    });

    dispatch(getAllUserSuccess(users));
  } catch (err) {
    dispatch(getAllUserFail());
  }
};
