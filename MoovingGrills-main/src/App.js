import { Switch, Route } from "react-router-dom";

import Home2 from "./Components/Home/HomeCat";
import { USP } from "./Components/Home/USP";
import { HomePic } from "./Components/HomeCarousel/HomePic";

import Navbar1 from "./Components/Navbar/Navbar1";
import { Navbar2 } from "./Components/Navbar/Navbar2";
import Navbar3 from "./Components/Navbar/Navbar3";
import Menubar from "./Components/menubar/Menubar";
import Contact from "./Components/Home/Contact";
import { About } from "./Components/Home/About";
import { Feedback } from "./Components/Home/Feedback";
import CheckoutPage from "./Components/Checkout/checkout.component";
import { Footer } from "./Components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />
      <Switch>
        <Route exact path="/">
          <HomePic />
          <USP />
          <About />
          <Home2 />
          <Contact />
          <Feedback />
        </Route>
        <Route path="/menubar">
          <Menubar />
        </Route>
        <Route path="/view-items">
          <CheckoutPage />
        </Route>
        <Route path="*">
          <h2>Error 404: Page not found</h2>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
