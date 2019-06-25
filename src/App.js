import * as React from "react";
import { Container, Sprite } from "nes-react";
import "./App.css";
import characters from "./characters";
import items from "./items";

class App extends React.Component {
  state = {
    characters: characters,
    items: items,
    selectedOption: "option1"
  };

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <h1>What Your Mario Kart Play Style Says About You!</h1>
        <Sprite sprite={"mario"} />
        <p>
          As was discussed here, the character you choose when playing Mario
          Kart says a lot about who you are at heart. I would argue that your
          favorite item also says a lot. So what does your favorite character
          and item in Mario Kart say about you? Answer the questions below to
          find out!
        </p>
        <h3>1. Which character is your favorite to use?</h3>
        <Container rounded>
          <form className="character-choice">
            <label>
              <input
                type="radio"
                name="characters"
                value="option1"
                checked={this.state.selectedOption === "option1"}
                onChange={this.handleOptionChange}
                className="character-choice"
              />
              Mario
            </label>
            <label>
              <input
                type="radio"
                name="characters"
                value="option2"
                checked={this.state.selectedOption === "option2"}
                onChange={this.handleOptionChange}
                className="character-choice"
              />
              Luigi
            </label>
            <label>
              <input
                type="radio"
                name="characters"
                value="option3"
                checked={this.state.selectedOption === "option3"}
                onChange={this.handleOptionChange}
                className="character-choice"
              />
              Princess Peach
            </label>
            <label>
              <input
                type="radio"
                name="characters"
                value="option4"
                checked={this.state.selectedOption === "option4"}
                onChange={this.handleOptionChange}
                className="character-choice"
              />
              Toad
            </label>
            <label>
              <input
                type="radio"
                name="characters"
                value="option5"
                checked={this.state.selectedOption === "option5"}
                onChange={this.handleOptionChange}
                className="character-choice"
              />
              Yoshi
            </label>
            <label>
              <input
                type="radio"
                name="characters"
                value="option6"
                checked={this.state.selectedOption === "option6"}
                onChange={this.handleOptionChange}
                className="character-choice"
              />
              Bowser
            </label>
            <label>
              <input
                type="radio"
                name="characters"
                value="option7"
                checked={this.state.selectedOption === "option7"}
                onChange={this.handleOptionChange}
                className="character-choice"
              />
              Donkey Kong Jr.
            </label>
            <label>
              <input
                type="radio"
                name="characters"
                value="option8"
                checked={this.state.selectedOption === "option8"}
                onChange={this.handleOptionChange}
                className="character-choice"
              />
              Koopa Troopa
            </label>
          </form>
        </Container>
        <h3>2. Which item is your favorite to use?</h3>
        <Container rounded>Item info here</Container>
        <h2>What your choices say about you as a person:</h2>
        <Container rounded>Profile here</Container>
      </div>
    );
  }
}

export default App;
