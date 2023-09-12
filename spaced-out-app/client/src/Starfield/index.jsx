import React, { useState, useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import Model from './Model';

function Starfield ({generateQuote}) {
  /*
      <QuoteMaker
      generateQuote={generateQuote}
    />
  */
  return (
    <div id="canvas-container">
      <Model />
      <Canvas>
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
        <ambientLight args={[0xff0000]} intensity={0.1} />
        <directionalLight position={[0, 0, 5]} intensity={0.5} />
      </Canvas>
    </div>
  );
};

export default Starfield;