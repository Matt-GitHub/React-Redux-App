import Axios from "axios";

export const ADD_JOKE = "ADD_JOKE";
export const FETCHING_JOKE_SUCCESS = "FETCHING_JOKE_SUCCESS";
export const FETCHING_JOKE_FAILURE = "FETCHING_JOKE_FAILURE";

export const fetchActivity = () => dispatch => {
  dispatch({ type: ADD_JOKE });
  Axios.get("http://api.icndb.com/jokes/random")
    .then(response => {
      console.log(response.data.value.joke);
      dispatch({
        type: FETCHING_JOKE_SUCCESS,
        payload: response.data.value.joke
      });
    })
    .catch(error => {
      dispatch({ type: FETCHING_JOKE_FAILURE, payload: error.response });
    });
};
