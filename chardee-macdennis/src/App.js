import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import ClickItem from "./components/ClickItem";
import cast from "./cast.json"

class App extends Component {
  // Setting this.state.pictures.json array
  state = {
    cast,
    score: 0,
    highscore: 0,

  };

  scramblePictures = id => {
    const cast = this.state.cast.sort.map(char => char.id !== id);
    this.setState({ cast })
  }

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Main >
          {this.state.cast.map(char => (
            <ClickItem
              scramblePictures={this.scramblePictures}
              id={char.id}
              key={char.id}
              gif={char.gif}
            />
          ))}
        </Main>
      </div>
    );
  }
}

export default App;