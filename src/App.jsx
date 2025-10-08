import { Component } from "react";
import "./App.css";
import Galleria from "./Components/Galleria";
import MyFooter from "./Components/MyFooter";
import MyNavbar from "./Components/MyNavbar";
import Welcome from "./Components/Welcome";
import Profile from "./Profile";

// HO UTILIZZATO SWIPER COME CAROSELLO QUINDI IMPORTARSI I FILE npm i swiper
// utilizzare i bottoni in alto per mutare la pagina

class App extends Component {
  state = {
    page: "home",
  };

  render() {
    return (
      <>
        <div style={{ position: "fixed", zIndex: "1000", right: "35%" }} className="d-flex gap-2">
          <button className="btn bg-dark text-white-50 rounded-3" onClick={() => this.setState({ page: "home" })}>
            Home
          </button>
          <button className="btn bg-dark text-white-50 rounded-3" onClick={() => this.setState({ page: "account" })}>
            Account
          </button>
          <button className="btn bg-dark text-white-50 rounded-3" onClick={() => this.setState({ page: "setting" })}>
            Setting
          </button>
        </div>

        <MyNavbar />
        {this.state.page === "home" ? (
          <>
            <Welcome />
            <Galleria />
          </>
        ) : null}

        {this.state.page === "account" ? <Profile title="Edit Profile" nameProfile="Strive Student" /> : null}

        <MyFooter />
      </>
    );
  }
}

export default App;
