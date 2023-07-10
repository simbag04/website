import Header from "./Header";
import Main from "./Main";
import '../styles/App.css'
import '../styles/Colors.css'
import { useState } from "react";

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);

  const [aboutStart, setAboutStart] = useState(0);
  const [projectsStart, setProjectsStart] = useState(0);
  const [contactStart, setContactStart] = useState(0);

  return (
    <div className="App">
      <Header headerHeight={headerHeight}
              setHeaderHeight={setHeaderHeight} 
              aboutStart={aboutStart}
              projectsStart={projectsStart}
              contactStart={contactStart}
      ></Header>
      <Main headerHeight={headerHeight}
            setAboutStart={setAboutStart}
            setProjectsStart={setProjectsStart}
            setContactStart={setContactStart}
      ></Main>
    </div>
  );
}

export default App;
