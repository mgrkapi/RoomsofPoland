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
import RoomsPage from './rooms';
import Reservation from './reservation';

function App() {
  return (
      <HashRouter>
          <Routes>
              <Route index element={<Homepage />} />
              <Route path="/main" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/rooms" element={<RoomsPage />} />
              <Route path="/reservation" element={<Reservation />} />
              {/*<Route path="/about" element={<Aboutus/>}/>*/}
          </Routes>
      </HashRouter>
  )
}



export default App;
