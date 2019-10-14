import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Tours from "./pages/Tours";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  Route,
  Switch
} from "react-router-dom"; /**Switch will render the first route child that matches */

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/tours" component={Tours} />
        <Route exact path="/rooms/:zebra" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
