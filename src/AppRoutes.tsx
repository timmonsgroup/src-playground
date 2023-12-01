
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';


// Create a generic about component
const About: React.FC = () => {
  return <div>About</div>;
};

// Create a generic not found component
const NotFound: React.FC = () => {
  return <div>Not Found</div>;
};

const AppRoutes: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route element={<NotFound />} />
        </Route>
      </Routes>
  );
};

export default AppRoutes;
