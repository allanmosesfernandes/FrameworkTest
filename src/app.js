/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import FirstFold from "./components/FirstFold";

function App() {
  return (
    <div className="App">
      <FirstFold />
    </div>
  );
}
// create root element
const root = ReactDOM.createRoot(document.getElementById("root"));
// render app
root.render(<App />);
export default App;
