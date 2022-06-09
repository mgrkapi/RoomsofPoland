import './style/main.scss';
import {
    HashRouter,
    Route,
    Routes,
    Router,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import Homepage from './main'
import About from './about'

function App() {
  return (
      <HashRouter>
          <Routes>
              <Route index element={<Homepage />} />
              <Route path="/about" element={<About />} />
              {/*<Route path="/about" element={<Aboutus/>}/>*/}
          </Routes>
      </HashRouter>
  )
}



export default App;
