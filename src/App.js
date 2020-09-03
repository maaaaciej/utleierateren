import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/header.component";
import Footer from "./components/Footer/footer.component";
import Feed from "./pages/Feed/feed.component";
import About from "./pages/About/about.component";
import UploadReview from "./pages/UploadReview/uploadreview..component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route exact path="/about" component={About} />
        <Route exact path="/upload" component={UploadReview} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
