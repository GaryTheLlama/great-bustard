import React from 'react';
import './App.css';

import { Card } from './Card'

function App() {
  return (
    <div className="App">
      <Card
        text="Look at this awesome test tweet 🦅 Truly an incredible feat of programming prowess. Even this eagle is impressed."
        profileImageUrl="https://pbs.twimg.com/profile_images/1141214576391815168/ggqS3ggC_200x200.jpg"
        name="Gary Phillips"
        username="@garythellama"
      />
    </div>
  );
}

export default App;
