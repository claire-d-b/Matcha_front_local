'use client';


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/page';
import Profile from './profile/f/page';


const _ = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="*" element={<NotFound />} /> Catch-all for 404 */}
      </Routes>
    </Router>
  );
};

export default _

