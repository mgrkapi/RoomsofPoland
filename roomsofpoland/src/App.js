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
function App() {
  return (
      <HashRouter>
          <Routes>
              <Route index element={<Homepage />} />
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/about" element={<AboutUsMain/>}/>
          </Routes>
      </HashRouter>
  )
}

export default App;
