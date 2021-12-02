//imports
import axios from "axios";

const ApiUrl = "http://www.boredapi.com/api/activity";
//action creators
const loadStore = (activity) => {
  return {
    type: "activities/loadStore",
    payload: activity,
  };
};

//THUNK
export const fetchRandom = () => {
  return async (dispatch, getState) => {
    // console.log("this is thunk speaking");
    try {
      const res = await axios.get(`${ApiUrl}`);
      //   console.log("this is res: ", res);
      dispatch(loadStore(res.data));
    } catch (e) {
      console.log(e);
    }
  };
};
