import "./App.css";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";

import NameList from "./components/NameList";

function App() {
  return (
    <div className="App">
      <NameList />

      {/* <UserGreeting /> */}

      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Message /> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="superman">
        <button>Action</button>{" "}
      </Greet>
      <Greet name="Diana" heroName="Butterfly" /> */}
      {/* <Welcome></Welcome>
      <Hello></Hello> */}
    </div>
  );
}

export default App;
