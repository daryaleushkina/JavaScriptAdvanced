import {Header} from "./components/layot/Header";
import {Footer} from "./components/layot/Footer"
import {Main} from './components/layot/Main'
import React from "react";
function App() {
  return (
    <div className="App">
      <React.Fragment>
          <Header/>
          <Main/>
          <Footer/>
      </React.Fragment>
    </div>
  );
}

export default App;
