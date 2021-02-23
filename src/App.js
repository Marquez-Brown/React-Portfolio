import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./Components/About/About";


function App() {
  return (
    
      <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
          <About />
          </Route>
           
        </Switch>
        <Footer />
    </Router>
    </>
  );
}

export default App;
