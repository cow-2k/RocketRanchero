import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

function Hello() {
  return (
    <div>
      <div className="header-bar">
            <button className="header-button">Home</button>
            <button className="header-button">About</button>
            <button className="header-button">Contact</button>
            {/* Add more buttons or elements as needed */}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
