import * as React from "react";
import { Container } from "nes-react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Mario for the win!</h1>
      <Container>This is a container!</Container>
      <p>
        One of my role models,
        <a
          href="https://twitter.com/chloecondon/status/1108738908999700480"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chloe Condon,
        </a>
        said "In my opinion, your chosen Mario Kart player says WAY more than a
        zodiac sign does." I would have to agree. That tweet spawned a few
        projects, and they're great, but they focus on newer iterations of Mario
        Kart. At the risk of sounding like my father, back in my day, we didn't
        have that many options. That's what led me to make this.
      </p>
    </div>
  );
}

export default App;
