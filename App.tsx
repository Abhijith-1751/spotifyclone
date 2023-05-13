import * as React from 'react';
import './style.css';
import Navbar from './compontents/navbar';
import Contentbox from './compontents/contentbox';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Contentbox/>
    </div>
  );
}
