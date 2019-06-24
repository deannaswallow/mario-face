import * as React from "react";
import { Container, Sprite, Radios } from "nes-react";
import "./App.css";
import characters from "./characters";
import items from "./items";

class App extends React.Component {
  state = {
    characters: characters,
    items: items
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
          <Radios
            options={[
              {
                value: "char1",
                label: "Mario"
              },
              {
                value: "char2",
                label: "Luigi"
              }
            ]}
          />
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
