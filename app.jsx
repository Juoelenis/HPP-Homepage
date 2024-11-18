import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Welcome to Hpa Progress Plexus</h1>
        <p>An Old Web Revival Project</p>
      </header>

      <section className="intro">
        <div className="intro-text">
          <h2>About the Project</h2>
          <p>
            "Hpa Progress Plexus" is dedicated to resurrecting the vintage web design and user experience,
            celebrating the early days of the internet with a modern twist. Here, we explore the golden
            era of web design, bringing it to life through responsive layouts, minimalistic designs, and 
            interactive retro elements.
          </p>
        </div>

        <div className="intro-image">
          <img src="https://via.placeholder.com/400" alt="Old Web Revival" />
        </div>
      </section>

      <section className="features">
        <h2>Project Features</h2>
        <ul>
          <li>Reviving classic web design trends from the 90s and early 2000s</li>
          <li>Interactive elements like retro animations and sound effects</li>
          <li>Responsive, mobile-first design with a nostalgic touch</li>
          <li>Exploring the evolution of web technologies</li>
        </ul>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Hpa Progress Plexus | A project by Your Name</p>
        <p>
          <a href="https://github.com/yourusername/hpa-progress-plexus" target="_blank" rel="noopener noreferrer">
            View Source Code on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
