import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import ClickItem from "./components/ClickItem";
import cast from "./cast.json"

class App extends Component {
  // Setting this.state.pictures.json array
  state = {
    cast: cast,
    score: 0,
    highscore: 0,
    clicked: []
  };

  componentDidMount() {
    this.scrambleGifs(this.state.scrambleGifs);
  }

  // Scramble the gifs when they are clicked on
  scrambleGifs = id => {
    const unClicked = this.state.clicked.indexOf(id) > -1;
    // Setting an if else statement if the gif has been clicked or not increasing the users score
    if(!unClicked) {
      // Then when a gif is clicked, push it into the clicked array 
      this.state.clicked.push(id);
      if(this.state.score === this.state.highscore){
        this.setState({
          cast: this.state.cast.sort(
            () => .5 - Math.random()
          ),
          score: this.state.score + 1,
          highscore: this.state.highscore + 1
        });
      } else {
        this.setState({
          cast: this.state.cast.sort(
            () => .5 - Math.random()
          ),
          score: 0,
          clicked: []
        })
      }
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <Header score={this.state.score} highscore={this.state.highscore}/>
        <Main >
          {this.state.cast.map(cast => (
            <ClickItem
              scrambleGifs={this.scrambleGifs}
              id={cast.id}
              key={cast.id}
              gif={cast.gif}
            />
          ))}
        </Main>
      </div>
    );
  }
}

export default App;