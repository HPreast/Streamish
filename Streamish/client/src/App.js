import React, { useState, useEffect } from 'react';
import "./App.css";
import VideoList from "./components/VideoList";
import { getAllVideos } from './modules/videoManager';

function App() {
  return (
    <div className="App">
      <VideoList />
    </div>
  );
}

export default App;

