import React from "react";

function Food({ favrite }) {
  return (
    <h1>I love {favrite}</h1>
  );
}

function App() {
  return (
    <div>
      <h1>Hello!!!!!!!!!!</h1>
      <Food favrite="kimchi" />
      <Food favrite="ramen" />
      <Food favrite="cola" />
      <Food favrite="butabara" />
    </div>
  );
}

export default App;
