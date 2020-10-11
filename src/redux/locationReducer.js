export default function locationReducer(state = "", action) {
  switch (action.type) {
    case "GET_WEATHER_SUCCESS":
      console.log("WEATHER SUCCESS");
      console.log(action.payload);
      return {
        ...state,
        weaterData: action.payload,
      };

    default:
      return state;
  }
}
