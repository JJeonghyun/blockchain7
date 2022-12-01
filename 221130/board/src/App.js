import "./App.css";
import RegistContainer from "./containers/RegistContainer";
import LogInContainer from "./containers/LogInContainer";
import BoardContainer from "./containers/BoardContainer";

function App() {
  return (
    <div>
      <RegistContainer />
      <LogInContainer />
      <BoardContainer />
    </div>
  );
}

export default App;
