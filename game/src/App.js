import React from "react";
import Card from "./components/Card";
import data from "./Data/Cards.json";
import "./App.css";

class App extends React.Component {
  state = {
    cards: []
  };

  componentDidMount() {
    this.setState({ cards: data });
  }

  clickCard = val => {
    const newArr = this.state.cards.map(item => {
        if(item.name === val.name){
            if(!item.clicked){
                console.log("You changed it's value")
                item.clicked = true;
            } else {
                console.log("already clicked")
            }
        }
        return item;
    })
    this.setState({ cards: newArr })
  };

  render() {
    return (
      <div>
        {this.state.cards.map((card, i) => (
          <Card card={card} click={this.clickCard} key={i + "-card"} />
        ))}
      </div>
    );
  }
}

export default App;
