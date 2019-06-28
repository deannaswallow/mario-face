import * as React from "react";
import { Container, Sprite } from "nes-react";
import "./App.css";
import characters from "./characters";
import items from "./items";

class App extends React.Component {
  state = {
    characters: characters,
    items: items,
    selectedOption: "Mario"
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
          As was discussed{" "}
          <a
            href="https://twitter.com/chloecondon/status/1108738908999700480"
            target="_blank"
            rel="noopener noreferrer"
          >
            here,
          </a>
          the character you choose when playing Mario Kart says a lot about who
          you are at heart. I would argue that your favorite item also says a
          lot (I'm looking at you, banana peel throwers!). So what does your
          favorite character and item in Mario Kart say about you? Answer the
          questions below to find out!
        </p>
        <h3>1. Which character is your favorite to use?</h3>
        <Container rounded>
          <form className="character-choice">
            {Object.values(characters).map(character => (
              <label key={character.name}>
                <input
                  type="radio"
                  name="characters"
                  value={character.name}
                  // checked={false}
                  onChange={this.handleOptionChange}
                  className="character-choice"
                />
                {character.name}
                <img src={character.image} alt={character.name} />
              </label>
            ))}
          </form>
        </Container>
        <h3>2. Which item is your favorite to use?</h3>
        <Container rounded>Item info here</Container>
        <h2>What your choices say about you as a person:</h2>
        <Container rounded>
          {this.state.selectedOption === "Yoshi" ? "Yay" : "Nope"}
        </Container>
      </div>
    );
  }
}

export default App;
