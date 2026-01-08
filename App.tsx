import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Industries } from './pages/Industries';
import { Pricing } from './pages/Pricing';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Residential } from './pages/Residential';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;