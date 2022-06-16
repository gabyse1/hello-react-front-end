const GET_GREETINGS_FROM_API = 'GET_GREETINGS_FROM_API';

const initialState = {
  greetings: [],
};

const getGreetingsFromAPI = () => async (dispatch) => {
  await fetch('http://localhost:3001/api/v1/greetings')
    .then((response) => response.json())
    .then((data) => dispatch({
      type: GET_GREETINGS_FROM_API,
      payload: data,
    }));
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETINGS_FROM_API:
      return { greetings: action.payload.greetings };
    default:
      return state;
  }
};

export { getGreetingsFromAPI };

export default greetingReducer;
