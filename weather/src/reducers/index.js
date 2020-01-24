import {
  ADD_JOKE,
  FETCHING_JOKE_SUCCESS,
  FETCHING_JOKE_FAILURE
} from "../actions";

const initialState = {
  isLoading: false,
  joke: null,
  error: ""
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOKE:
      return {
        ...state,
        isLoading: true
      };
    case FETCHING_JOKE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        joke: action.payload
      };
    case FETCHING_JOKE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
