import { connect } from "react-redux";
import Player from "../components/player";

//ajustando o Container Component

const mapStateToProps = state => {
  console.log(state);
  return {
    player: state.reducer1State
  };
};

const PlayerContainer = connect(mapStateToProps)(Player);

export default PlayerContainer;
