import React, { useRef } from "react";
import { useGLTF, Clone , MeshDistortMaterial} from "@react-three/drei";
import artifactUrl from './assets/artifact.glb'

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(artifactUrl);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base.geometry}
        material={nodes.Base.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.inner_ring.geometry}
        material={nodes.inner_ring.material}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.base_ring.geometry}
        material={nodes.base_ring.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.endcap.geometry}
        material={nodes.endcap.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.endcap001.geometry}
        material={nodes.endcap001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.connectors.geometry}
        material={nodes.connectors.material}
      />
      <Clone object={nodes.Inner_Sphere}
        inject = {<MeshDistortMaterial color="blue" metalness={1} roughness={0} distort={.1}/>}
      />c
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.inner_ring001.geometry}
        material={nodes.inner_ring001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.inner_ring002.geometry}
        material={nodes.inner_ring002.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.inner_ring003.geometry}
        material={nodes.inner_ring003.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.inner_ring004.geometry}
        material={nodes.inner_ring004.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.spin_ring.geometry}
        material={nodes.spin_ring.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.inner_ring007.geometry}
        material={nodes.inner_ring007.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pyramid.geometry}
        material={nodes.pyramid.material}
      />
    </group>
  );
}

useGLTF.preload(artifactUrl);