import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Feature from "./components/Feature";
import { dataMenu1, dataMenu2 } from "./db/DataMenu";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your Pizza" menu={dataMenu1} />
      <Products heading="Choose your Sweet" menu={dataMenu2} />
      <Feature />
    </Router>
  );
}

export default App;
