import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Pages from "./pages/Pages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Category />
          <Pages/>
      </div>
    </BrowserRouter>
  );
}

export default App;
