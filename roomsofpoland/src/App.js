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
import ToSee from './attractions';
import OpinionsFAQpage from './opinionsFAQpage';
import ContactPage from './contact';

function App() {
  return (
      <HashRouter>
          <Routes>
              <Route index element={<Homepage />} />
              <Route path="/main" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/rooms" element={<RoomsPage />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/attractions" element={<ToSee />} />
              <Route path="/opinionsFAQpage" element={<OpinionsFAQpage />} />
              <Route path="/contact" element={<ContactPage />} />
          </Routes>
      </HashRouter>
  )
}



export default App;
