import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";

import MyFooter from "./Components/MyFooter";
import MyNavbar from "./Components/MyNavbar";
import TvShows from "./Pages/TvShows";
import Home from "./Pages/Home";
import Details from "./Pages/Details";

// HO UTILIZZATO SWIPER COME CAROSELLO QUINDI IMPORTARSI I FILE npm i swiper
// utilizzare i bottoni in alto per mutare la pagina

class App extends Component {
  state = {
    page: "home",
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <div id="app">
            <MyNavbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tvshows" element={<TvShows />} />
              <Route path="/details/:id" element={<Details />} />
            </Routes>

            <MyFooter />
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
