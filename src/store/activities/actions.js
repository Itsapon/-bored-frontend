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

export const fetchSpecific =(activityType, activityPeople)=>{
  /*needs two arguments, one for type, one for ppl. Type is string, people is int. 
  if statement to look for how many arguments there are. 
  Two different requests: one with one spot in the req, and one with two spots. 
  If there's only one argument, goes to first req. etc

  
  */
 const type=activityType; 
 const people=activityPeople;
 if (type==="select"||people===-1){
   if(type==="select"){
    return async (dispatch, getState)=> {
      console.log("this is specific thunk with one arg");
      try{
        const res = await axios.get(`${ApiUrl}?participants=${people}`)
        console.log("this is res for people: ", res.data)  
      }catch (e){
        console.log(e)
      }
   }}
   if (people===-1){
    return async (dispatch, getState)=> {
      console.log("this is specific thunk with one arg");
      try{
        const res = await axios.get(`${ApiUrl}?type=${type}`)
        console.log("this is res for type: ", res.data)   
       
      }catch (e){
        console.log(e)
      }}
    }else{
     console.log("something went wrong in drop down menus");
     return
   }
  }
if (type!=="select"&&people!==-1){
  return async (dispatch, getState)=> {
    console.log("this is specific thunk with two args");
    try{
      const res = await axios.get(`${ApiUrl}?type=${type}&participants=${people}`)
      console.log("res of fetch with two args: ", res)
      //just do fetch request with the defined consts at the start of this function.

    }catch (e){
      console.log(e)
    }
  }

}
}