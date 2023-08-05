import "./App.css";
import Products from "./components/Products";
// import FormHooks from "./components/FormHooks";
// import SimpleFrom from "./components/SimpleFrom";

import SimpleFromPractice from "./components/SimpleFromPractice";

function App() {
  return (
    <div className="App">
      <div className="container mt-3">{/* <SimpleFromPractice /> */}</div>
      <Products />
      {/* <SimpleFrom /> */}
    </div>
  );
}

export default App;
