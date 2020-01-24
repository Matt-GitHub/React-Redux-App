import React from "react";
import { connect } from "react-redux";
import { fetchActivity } from "../actions/index";

export const Joke = props => {
  console.log("props", props);
  return (
    <div>
      <h1>Today's Chuck Norris Joke</h1>
      <button onClick={props.fetchActivity}>Get Joke</button>
      {!props.joke && !props.isLoading && <h2>Make yourself Laugh</h2>}
      {props.joke && !props.isLoading && <h2>{props.joke}</h2>}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    isLoading: state.isLoading,
    joke: state.joke,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchActivity })(Joke);
