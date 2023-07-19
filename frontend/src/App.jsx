import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from 'pages/Home';
import Projects from 'pages/Projects';
import Community from 'pages/Community';
import Profile from 'pages/Profile';
import './components/NavBar.css'; // Import a CSS file for styling

function App() {

  const [activeItem, setActiveItem] = useState<string>('home');

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <Router>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link
              to="/"
              className={`navbar-link ${activeItem === 'home' ? 'active' : ''}`}
              onClick={() => handleItemClick('home')}
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/projects"
              className={`navbar-link ${activeItem === 'projects' ? 'active' : ''}`}
              onClick={() => handleItemClick('projects')}
            >
              Projects
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/community"
              className={`navbar-link ${activeItem === 'community' ? 'active' : ''}`}
              onClick={() => handleItemClick('community')}
            >
              Community
            </Link>
          </li>
          <li className="navbar-item" style={{ marginLeft: '100px', marginRight: '25px'}}>
            <Link
              to="/profile"
              className={`navbar-link ${activeItem === 'profile' ? 'active' : ''}`}
              onClick={() => handleItemClick('profile')}
            >
              Profile
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/projects" Component={Projects} />
        <Route path="/community" Component={Community} />
        <Route path="/profile" Component={Profile} />
      </Routes>

    </Router>
  );
}

// import NavBar from 'components/NavBar.jsx';

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//     </div>
//   );
// }

// export default App;
