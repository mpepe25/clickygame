import React from "react";
import Card from "./components/Card";
import data from "./Data/Cards.json";
import "./App.css";

class App extends React.Component {
  state = {
    data: data
  };

  componentDidMount() {
    this.setState({ cards: data });
  }

  clickCard = val => {
    const newArr = this.state.data.map(item => {
        if(item.name === val.name){
            if(!item.clicked){
                // console.log("You changed it's value")
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
       
      </div>
    );
  }
}

export default App;



// {this.state.cards.map((card, i) => (
//   <Card card={card} click={this.clickCard} key={i + "-card"} />
// ))}