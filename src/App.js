import { Fragment } from "react";
import Header from "./components/Header";
import About from "./components/main/About";
import Main from "./components/main/Main";
import Support from "./components/main/Support";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <main>
        <About />
        <Main />
        <Support />
      </main>
    </Fragment>
  );
}

export default App;
