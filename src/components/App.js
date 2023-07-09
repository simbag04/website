import Header from "./Header";
import Main from "./Main";
import '../styles/App.css'
import { useState } from "react";

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  return (
    <div className="App">
      <Header setHeaderHeight={setHeaderHeight}></Header>
      <Main headerHeight={headerHeight}></Main>
    </div>
  );
}

export default App;
