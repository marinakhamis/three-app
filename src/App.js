import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import './App.css';
import Model from './Marina_model_stand_draco';

function App() {
  return (
    <div className="App">

      <Canvas

        camera={{ zoom: 2 }}
      >
        <mesh position={[0.000, -4.5, -0.9]} >
          {/* Makes you move the model using the mouse */}
          <OrbitControls

            enableZoom={false}
            enableRotate={true}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          // minAzimuthAngle={-0.5}
          // maxAzimuthAngle={0.5}
          />
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[-2, 5, 5]}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024} />

          <spotLight
            position={[10, 15, 10]}
            angle={0.3}
            color="blue"
          />
          <spotLight
            position={[-10, 20, -10]}
            angle={0.3}
            color="purple"
          />
          <Suspense fallback={null}>

            <Model />



          </Suspense>

        </mesh>

      </Canvas>
    </div>
  );
}

export default App;
