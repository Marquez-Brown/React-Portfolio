import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from "./Components/Project/Portfolio";
import About from "./Components/Project/About";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
          <Portfolio /> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
