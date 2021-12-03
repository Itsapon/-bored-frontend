const initialState = {
  weather: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "WEATHER/fetchdata":
      // console.log("The action is: ", action.payload);
      return {
        ...state,
        weather: action.payload,
      };

    default: {
      return state;
    }
  }
}
