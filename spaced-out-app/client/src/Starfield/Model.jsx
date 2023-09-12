import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} position={[0, 0, -0.783]} rotation={[-Math.PI, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')