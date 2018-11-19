import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";
import Player from "./components/player";
import PlayerContainer from "./containers/player";

class App extends Component {
  static contextTypes = {
    store: PropTypes.object
  };
  componentWillMount() {
    this.context.store.subscribe(() => {
      this.setState({
        data: this.context.store.getState()
      });
    });
  }
  postar(player) {
    this.context.store.dispatch({
      type: "IMPRIMIR_1",
      nome: player
    });
  }

  render() {
    return (
      <div>
        <p>
          <button onClick={() => this.postar("Cristiano")}>Cristiano</button>
          <button onClick={() => this.postar("Messi")}>Messi</button>
          <button onClick={() => this.postar("Neymar")}>Neymar</button>
          {
            //Pass store by props
            //Passo o store por props
          }
          {/* <Player coisa={this.context.store.getState().reducer1State} /> */}
          <PlayerContainer />
        </p>
      </div>
    );
  }
}

export default App;
