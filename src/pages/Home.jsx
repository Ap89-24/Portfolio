import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState , useEffect , useRef } from 'react'
import Loader from '../components/Loader.jsx';
import Island from '../models/Island.jsx';
import Sky from '../models/Sky.jsx';
import Bird from '../models/Bird.jsx';
import Plane from '../models/Plane.jsx';
import HomeInfo from '../components/HomeInfo';
import sakura from '../assets/sakura.mp3';
import soundoff from '../assets/icons/soundoff.png'
import soundon from '../assets/icons/soundon.png'

const Home = () => {

  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating , setIsRotating] = useState(false);
    const [currentstage , setCurrentStage] = useState(1);
    const [isPlayingMusic , setIsPlayingMusic] = useState(false);

    useEffect(() => {
      if (isPlayingMusic) {
        audioRef.current.play();
      }

     else {
        audioRef.current.pause()
      }
    },[isPlayingMusic])

  const adjustIslandforScreenSize =  () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
        screenScale = [0.9, 0.9, 0.9];
    }
    else{
        screenScale = [1, 1, 1];
    }

    return [screenScale,screenPosition,rotation]
    }

    const adjustPlaneforScreenSize =  () => {
      let screenScale  , screenPosition
  
      if (window.innerWidth < 768) {
          screenScale = [1.5, 1.5, 1.5];
          screenPosition = [0, -1.5, 0];
      }
      else{
          screenScale = [3, 3, 3];
          screenPosition = [0, -4, -4];
      }
  
      return [screenScale,screenPosition]
      }

    const [IslandScale,IslandPosition,IslandRotation] = adjustIslandforScreenSize();
    const [PlaneScale,PlanePosition] = adjustPlaneforScreenSize();

  return (
   <section className="w-full h-screen relative">
   <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
   {currentstage && <HomeInfo  currentstage={currentstage} />}
   </div>

  <Canvas className={`w-full h-screen bg-transparent z-0 ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{near:0.1 , far:1000}}>
         <Suspense fallback={<Loader />}>
         <directionalLight position={[1, 1, 1]} intensity={2} />
         <ambientLight intensity={0.5} />
         <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
         <Bird />
         <Sky isRotating={isRotating} />
         <Island position={IslandPosition} scale={IslandScale} rotation={IslandRotation} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage} currentstage={currentstage} />
         <Plane isRotating={isRotating} position={PlanePosition} scale={PlaneScale} rotation={[0, 20, 0]} />
  
     </Suspense>
    </Canvas>  

    <div className="absolute bottom-2 left-2">
      <img src={isPlayingMusic ? soundoff : soundon} 
      alt='sound'
      className="w-10 h-10 cursor-pointer object-contain"
      onClick={() => setIsPlayingMusic(!isPlayingMusic)}
      />
      </div> 
   </section>
  )
}

export default Home
