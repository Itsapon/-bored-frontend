//imports
import axios from "axios";

const ApiUrl = "http://www.boredapi.com/api/activity";
//action creators

//THUNK
export const fetchRandom = () => async (dispatch, getState) => {
  console.log("this is thunk speaking");
  try {
    const res = await axios.get(`${ApiUrl}`);
    console.log("this is res: ", res);
  } catch (e) {
    console.log(e);
  }
};
