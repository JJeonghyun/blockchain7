import "./App.css";
import FuncComp from "./components/FuncComp";
import ClassComp from "./components/ClassComp";
import Additional from "./components/Additional";

function App() {
  return (
    <div className="App">
      <ClassComp
        text={"testing ClassComp"}
        func={() => {
          console.log("testing ClassComp");
        }}
      />
      <FuncComp
        text={"testing FuncComp"}
        func={() => {
          console.log("testing FuncComp");
        }}
      />
      <Additional />
    </div>
  );
}

export default App;
