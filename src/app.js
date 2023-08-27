/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import ReactDOM from "react-dom/client";
import FirstFold from "./components/FirstFold";
import Mission from "./components/Mission";
import Challenge from "./components/Challenge";
import Benefits from "./components/Benefits";

function App() {
  return (
    <div className="App">
      <FirstFold />
      <Mission />
      <Challenge />
      <Benefits />
    </div>
  );
}
// create root element
const root = ReactDOM.createRoot(document.getElementById("root"));
// render app
root.render(<App />);
export default App;
