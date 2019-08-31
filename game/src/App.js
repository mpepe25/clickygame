import React from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper/index";
import Title from "./components/Title"
import data from "./Data/Cards.json";
import "./App.css";

class App extends React.Component {
  state = {
    data: data,
    simpsonsClicked: [], 
    score: 0,
    correct:0
  };

  componentDidMount() {
    this.setState({ data: data });
  }
  shuffle =  (array) =>{

    var currentIndex = array.length;
    var temporaryValue, randomIndex;
  
    // While there remain elements shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  
  };
  // clickCard = val => {
  //   const newArr = this.state.data.map(item => {
  //       if(item.name === val.name){
  //           if(!item.clicked){
  //               console.log("You changed it's value")
  //               this.item.clicked = true;
  //           } else {
  //               console.log("already clicked")
  //           }
  //       }
  //       return item;
  //   })
  //   this.setState({ cards: newArr })
  // };

  clickCard = id =>{
  if(this.state.simpsonsClicked.includes(id)){
    alert("Game Over");
    this.setState({ simpsonsClicked: [], score: 0 });
    this.shuffle(data);
  } else {
    this.setState({ simpsonsClicked: [...this.state.simpsonsClicked, id], score: this.state.score + 1 });
    this.shuffle(data);
  }
}
  render() {
    return (
      <div>
        <Wrapper>
        <Title>SIMPSON GAME </Title>
        <h3 className="scoreSummary"> {this.state.clickMessage} </h3>
        <h3 className="scoreSummary">
          Correct: {this.state.correc} <br />
          Score: {this.state.bestScore}{" "}
        </h3>
          <h1>Score: {this.state.score}</h1>
       {this.state.data.map((key) => {
         return (<Card id={key.id} card={key.name} imgUrl={key.imgUrl} clickCard={this.clickCard} />);
       })}
       </Wrapper>

      </div>
    );
  }
}

export default App;



