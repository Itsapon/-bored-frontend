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
//fetches one random activity without arguments
export const fetchRandom = () => {
  return async (dispatch, getState) => {
    console.log("this is thunk speaking");
    try {
      const res = await axios.get(`${ApiUrl}`);
      console.log("this is res: ", res);
      dispatch(loadStore(res.data));
    } catch (e) {
      console.log(e);
    }
  };
};

//fetches one random activity either with one arguments or two.

export const fetchSpecific = (activityType, activityPeople) => {
  console.log("starting the specific fetch..");
  const type = activityType;
  const people = activityPeople;
  if (type === "select" || people === -1) {
    if (type === "select") {
      return async (dispatch, getState) => {
        console.log("this is specific thunk with one arg");
        try {
          const res = await axios.get(`${ApiUrl}?participants=${people}`);
          console.log("this is res for people: ", res.data);
          dispatch(loadStore(res.data));
        } catch (e) {
          console.log(e); // if there's nothing found API sends back a proper error message
        }
      };
    }
    if (people === -1) {
      return async (dispatch, getState) => {
        console.log("this is specific thunk with one arg");
        try {
          const res = await axios.get(`${ApiUrl}?type=${type}`);
          console.log("this is res for type: ", res.data);
          dispatch(loadStore(res.data));
        } catch (e) {
          console.log(e);
        }
      };
    } else {
      console.log("something went wrong in drop down menus");
      return;
    }
  }
  if (type !== "select" && people !== -1) {
    return async (dispatch, getState) => {
      console.log("this is specific thunk with two args");
      try {
        const res = await axios.get(
          `${ApiUrl}?type=${type}&participants=${people}`
        );
        console.log("res of fetch with two args: ", res);
        //just do fetch request with the defined consts at the start of this function.
        dispatch(loadStore(res.data));
      } catch (e) {
        console.log(e);
      }
    };
  }
};
