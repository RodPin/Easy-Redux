import React, { Component } from "react";

class Player extends Component {
  // Here i Can render anything based on store
  //Aqui eu posso renderizar qualquer coisa que vem da store
  render() {
    return (
      <div>
        <p>{this.props.coisa}</p>
      </div>
    );
  }
}

export default Player;
