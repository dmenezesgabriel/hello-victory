// import logo from "./logo.svg";
import "./App.css";
import {SimpleBar} from "./components/SimpleBar.js";
import {StackedBar} from "./components/StackedBar.js";
import {AnimatedBar} from "./components/AnimatedBar.js";

function App() {
  return (
    <div>
      <div>
        <SimpleBar />
      </div>
      <div>
        <StackedBar />
      </div>
      <div>
        <AnimatedBar />
      </div>
    </div>
  );
}

export default App;
