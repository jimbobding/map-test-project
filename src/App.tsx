import "./App.css";
import "./Form.css";
import "./Nav.css";

import { useState } from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Map from "./components/Map";

function App() {
  const [weight, setWeight] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [name, setName] = useState("");

  return (
    <>
      <Nav />
      <Form setWeight={setWeight} setDropdown={setDropdown} setName={setName} />
      {weight && dropdown && name && (
        <Map weight={weight} dropdown={dropdown} name={name} />
      )}
    </>
  );
}

export default App;
