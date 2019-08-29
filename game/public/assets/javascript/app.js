import React, { Component } from "react";
import Picture from "./components/Picture";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import simpson from "./simpson.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
   simpson
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <>
        <NavBar />
        <Header />
        <Wrapper>
          {this.state.simpson.map(simpson=> (
          <Picture
            id={simpson.id}
            key={simpson.id}
            image={simpson .image}
          />
          ))}
        </Wrapper>
      </>
    );
  }
}

export default App;