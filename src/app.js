/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import ReactDOM from "react-dom/client";
import FirstFold from "./components/FirstFold";
import Mission from "./components/Mission";
import Challenge from "./components/Challenge";
import Benefits from "./components/Benefits";
import Memberships from "./components/Memberships";
import Media from "./components/Media/Media";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <FirstFold />
      <Mission />
      <Challenge />
      <Benefits />
      <Memberships />
      <Media />
      <GetInTouch />
      <Footer />
    </div>
  );
}
// create root element
const root = ReactDOM.createRoot(document.getElementById("root"));
// render app
root.render(<App />);
export default App;
