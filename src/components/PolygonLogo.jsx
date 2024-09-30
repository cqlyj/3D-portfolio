import { Float, useGLTF } from "@react-three/drei";

const PolygonLogo = (props) => {
  const { nodes, materials } = useGLTF("/models/polygon.glb");
  return (
    <Float floatIntensity={1}>
      <group {...props} dispose={null} scale={1.8}>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.MT_Polygon}
          rotation={[Math.PI, Math.PI, 0]}
          position={[-2, -0.5, 0]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("/models/polygon.glb");

export default PolygonLogo;
