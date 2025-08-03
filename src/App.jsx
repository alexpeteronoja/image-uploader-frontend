import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SavedImage from './pages/SavedImage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved-image/:fileName" element={<SavedImage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
