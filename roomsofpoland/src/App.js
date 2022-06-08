import './style/main.scss';
import Home from "./components/Home";
import Main from "./components/Main";
import MyGallery from "./components/Gallery";
import Blurb from "./components/Blurb";
function App() {
  return (
      <>
        <Home/>
        <Main/>
          <MyGallery/>
          <Blurb/>
      </>
  )
}

export default App;
