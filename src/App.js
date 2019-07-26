import * as React from "react";
import { Container, Sprite, List } from "nes-react";
import "./App.css";
import characters from "./characters";
import items from "./items";
import profiles from "./profiles.json";

class App extends React.Component {
  state = {
    characters: characters,
    items: items,
    selectedCharacter: "Mario",
    selectedItem: "Banana",
    profile: "Make your selection to see your profile!"
  };

  handleCharacterChange = changeEvent => {
    this.setState({
      selectedCharacter: changeEvent.target.value
    });
    const newKey = `${changeEvent.target.value}${this.state.selectedItem}`;
    this.displayProfile(newKey);
  };

  handleItemChange = changeEvent => {
    this.setState({
      selectedItem: changeEvent.target.value
    });
    const newKey = `${this.state.selectedCharacter}${changeEvent.target.value}`;
    this.displayProfile(newKey);
  };

  displayProfile = newKey => {
    for (let key in profiles) {
      if (profiles.hasOwnProperty(key)) {
        if (newKey === key) {
          this.setState({
            profile: profiles[key]
          });
        }
      }
    }
  };

  render() {
    return (
      <div className="App">
        <h1>What Your Mario Kart Play Style Says About You!</h1>
        <Sprite sprite={"mario"} className="sprite" />
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
              <label key={character.name} className="radios">
                <input
                  type="radio"
                  name="characters"
                  value={character.name}
                  onChange={this.handleCharacterChange}
                  className="character-choice"
                />
                <span>{character.name}</span>
                <img src={character.image} alt={character.name} />
              </label>
            ))}
          </form>
        </Container>
        <br />
        <h3>2. Which item is your favorite to use?</h3>
        <Container rounded>
          <form className="item-choice">
            {Object.values(items).map(item => (
              <label key={item.name} className="radios">
                <input
                  type="radio"
                  name="characters"
                  value={item.name}
                  onChange={this.handleItemChange}
                  className="item-choice"
                />
                <span>{item.name}</span>
                <img src={item.image} alt={item.name} />
              </label>
            ))}
          </form>
        </Container>
        <br />
        <h2>What your choices say about you as a person:</h2>
        <Container rounded className="profile">
          <h4>{this.state.profile}</h4>
        </Container>
        <br />
        <Container rounded className="credits">
          <h4>Credits and Inspiration!</h4>
          <List solid>
            <li>
              <a
                href="https://github.com/nostalgic-css/NES.css"
                target="_blank"
                rel="noopener noreferrer"
              >
                NES.css
              </a>
            </li>
            <li>
              <a
                href="https://github.com/bschulte/nes-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                nes-react
              </a>
            </li>
            <li>
              Info from{" "}
              <a
                href="https://mariokart.fandom.com/wiki/Super_Mario_Kart"
                target="_blank"
                rel="noopener noreferrer"
              >
                Super Mario Kart Wiki
              </a>
            </li>
            <li>
              Additional inspiration from{" "}
              <a
                href="https://stephenradachy.github.io/Mario-Kart-Astrology/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stephen Radachy
              </a>
            </li>
            <li>Images used are the property of Nintendo.</li>
          </List>
        </Container>
      </div>
    );
  }
}

export default App;
