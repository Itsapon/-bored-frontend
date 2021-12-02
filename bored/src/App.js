//import tools
import "./App.css";
//import components and pages
import ActivityCard from "./components/ActivityCard";
import ActivityForm from "./components/ActivityForm";

const Test = () => (
  <div>
    <h1>Test</h1>
    <ActivityCard />
    <ActivityForm />
  </div>
);

function App() {
  return (
    <div className="App">
      <Test />
    </div>
  );
}

export default App;
