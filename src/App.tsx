import "./App.css";
import "./Form.css";
import "./Nav.css";

import Nav from "./components/Nav";
import Form from "./components/Form";
import MapContainer from "./components/MapContainer";

function App() {
  return (
    <>
      <Nav />
      <Form />
      <MapContainer />
    </>
  );
}

export default App;
