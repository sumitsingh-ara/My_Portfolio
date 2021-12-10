import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/homePage/HomePage";
import ScrollArrow from "./Scroll.jsx"

export const App =()=> {
  return (
    <div className="App">
      <HomePage />
      <ScrollArrow/>
    </div>
  );
}
export default App;
