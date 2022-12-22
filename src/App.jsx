import React, { useState } from 'react';
import './App.css';
import RocketLauncher from './RocketLauncher';

function App() {
  let [launch, setLaunch] = useState(true)
  let [rocketName, setRocketName] = useState('Apollo')

  const handleChange = e => {
    setRocketName(e.target.value)
  }

  return (
    <main>
      <h1>Learning Cleanup!</h1>
      <button onClick={() => setLaunch(!launch)}>
        { launch ? 'Abort Launch' : 'Start Launch'}
      </button>
        { launch ? < RocketLauncher /> : null}
        <input type='text' onChange={handleChange}></input>
    </main>
  );
}

export default App;