import React from 'react';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Project from './components/Project';
import Head from 'next/head'; // For setting page metadata

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my personal portfolio." />
      </Head>
      
      {/* Header Section */}
      <header className="header-section">
        <h1>Welcome to My Portfolio</h1>
      </header>

      {/* Sections with imported components */}
      <About />
      <Education />
      <Skills />
      <Project />

      {/* Footer Section */}
      <footer className="footer-section">
        <p>Made by Sidra Naz | 2024</p>
      </footer>
    </div>
  );
};

export default Home;
