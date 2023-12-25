import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";

import Island from "../models/Island.jsx";
import Sky from "../models/Sky.jsx";
import Bird from "../models/Bird.jsx";
import Plane from "../models/Plane.jsx";
import InfoPopup from "./InfoPopup.jsx";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandBasedOnScreenWidth = () => {
    let islandScale = window.innerWidth < 768 ? [0.9, 0.9, 0.9] : [1, 1, 1];
    let islandPosition = [0, -6.5, -43];
    let islandRotation = [0.1, 4.7, 0];

    return [islandScale, islandPosition, islandRotation];
  };

  const adjustPlaneBasedOnScreenWidth = () => {
    let planeScale = window.innerWidth < 768 ? [1.5, 1.5, 1.5] : [3, 3, 3];
    let planePosition = window.innerWidth < 768 ? [0, -1.5, 0] : [0, -4, -4];

    return [planeScale, planePosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandBasedOnScreenWidth();
  const [planeScale, planePosition] = adjustPlaneBasedOnScreenWidth();
  return (
    <section className="h-screen w-full relative">

        <div className="flex absolute top-28 left-0 right-0 justify-center items-center z-10">
            <InfoPopup currentStage={currentStage} />
        </div>

      <Canvas
        className="h-screen w-full relative"
        camera={{ near: 0.1, far: 1000 }}
      >
        <directionalLight position={[1, 1, 1]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" />

        <Bird />
        <Plane
            isRotating={isRotating}
            position={planePosition}
            scale={planeScale}
            rotation={[0, 20, 0]}
        />
        <Sky isRotating={isRotating} />
        <Island
          scale={islandScale}
          position={islandPosition}
          rotation={islandRotation}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
        />
      </Canvas>
    </section>
  );
};

export default Home;
