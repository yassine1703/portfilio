import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";

export const Experience = () => {
  return (
    <>
      <OrbitControls
       
      />
      
      <Avatar position={[0, 0, 0]} />

      <ambientLight intensity={1}/>
    </>
  );
};
