"use client";
/* eslint-disable react-compiler/react-compiler */

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree, ThreeEvent } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import type { Group } from "three";
import * as THREE from "three";

/* ── Spark data ── */
interface Spark {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  life: number;
}

const sparksStore: { current: Spark[] } = { current: [] };
const flashStore: { trigger: (p: THREE.Vector3) => void } = { trigger: () => {} };

function spawnSparks(point: THREE.Vector3) {
  const sparks: Spark[] = [];
  for (let i = 0; i < 30; i++) {
    const dir = new THREE.Vector3(
      (Math.random() - 0.5) * 2,
      Math.random() * 1.5 + 0.3,
      (Math.random() - 0.5) * 2
    ).normalize();
    sparks.push({
      position: point.clone(),
      velocity: dir.multiplyScalar(3 + Math.random() * 5),
      life: 0.2 + Math.random() * 0.35,
    });
  }
  sparksStore.current = sparks;
}

/* ── Tiny spark particles ── */
function SparksController() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const MAX = 30;

  const material = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color(5, 4, 3),
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    []
  );

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const sparks = sparksStore.current;
    for (let i = 0; i < MAX; i++) {
      const s = sparks[i];
      if (s && s.life > 0) {
        s.life -= delta * 3.5;
        s.position.add(s.velocity.clone().multiplyScalar(delta));
        s.velocity.y -= delta * 8;
        dummy.position.copy(s.position);
        const sc = Math.max(s.life, 0) * 0.012;
        dummy.scale.set(sc, sc, sc);
      } else {
        dummy.scale.set(0, 0, 0);
      }
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, material, MAX]}>
      <sphereGeometry args={[1, 4, 4]} />
    </instancedMesh>
  );
}

/* ── Impact flash light ── */
function ImpactFlashController() {
  const lightRef = useRef<THREE.PointLight>(null);
  const intensity = useRef(0);

  flashStore.trigger = (p: THREE.Vector3) => {
    if (lightRef.current) {
      lightRef.current.position.copy(p).add(new THREE.Vector3(0, 0, 0.5));
      intensity.current = 10;
    }
  };

  useFrame((_, delta) => {
    if (!lightRef.current) return;
    intensity.current *= 1 - delta * 10;
    if (intensity.current < 0.01) intensity.current = 0;
    lightRef.current.intensity = intensity.current;
  });

  return (
    <pointLight ref={lightRef} color="#ff3318" distance={6} decay={2} intensity={0} />
  );
}

/* ── Lightning / thunder effect ── */
interface LightningBolt {
  points: Float32Array;
  life: number;
}

const lightningStore: { current: LightningBolt[] } = { current: [] };

function generateBoltPoints(origin: THREE.Vector3, segments: number): Float32Array {
  const pts = new Float32Array((segments + 1) * 3);
  const dir = new THREE.Vector3(
    (Math.random() - 0.5) * 2,
    Math.random() * 1.5 + 0.5,
    (Math.random() - 0.5) * 2
  ).normalize();
  const length = 0.8 + Math.random() * 1.2;

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const jitter = i === 0 || i === segments ? 0 : (Math.random() - 0.5) * 0.3;
    const jitterY = i === 0 || i === segments ? 0 : (Math.random() - 0.5) * 0.3;
    pts[i * 3] = origin.x + dir.x * t * length + jitter;
    pts[i * 3 + 1] = origin.y + dir.y * t * length + jitterY;
    pts[i * 3 + 2] = origin.z + dir.z * t * length + (Math.random() - 0.5) * 0.15;
  }
  return pts;
}

function spawnLightning(point: THREE.Vector3) {
  const bolts: LightningBolt[] = [];
  const count = 3 + Math.floor(Math.random() * 3);
  for (let i = 0; i < count; i++) {
    bolts.push({
      points: generateBoltPoints(point, 6 + Math.floor(Math.random() * 4)),
      life: 0.15 + Math.random() * 0.2,
    });
  }
  lightningStore.current = bolts;
}

function LightningController() {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.Line[]>([]);
  const MAX_BOLTS = 8;

  const material = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: new THREE.Color(2, 0, 0),
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    []
  );

  /* Build line objects once */
  useMemo(() => {
    linesRef.current = [];
    for (let i = 0; i < MAX_BOLTS; i++) {
      const geom = new THREE.BufferGeometry();
      geom.setAttribute("position", new THREE.Float32BufferAttribute(new Float32Array(33), 3));
      const line = new THREE.Line(geom, material.clone());
      line.visible = false;
      line.frustumCulled = false;
      linesRef.current.push(line);
    }
  }, [material]);

  /* Add lines to group when mounted */
  useFrame(() => {
    if (groupRef.current && groupRef.current.children.length === 0) {
      linesRef.current.forEach((l) => groupRef.current!.add(l));
    }
  });

  useFrame((_, delta) => {
    const bolts = lightningStore.current;
    for (let i = 0; i < MAX_BOLTS; i++) {
      const line = linesRef.current[i];
      if (!line) continue;
      const bolt = bolts[i];
      if (bolt && bolt.life > 0) {
        bolt.life -= delta * 4;
        const geom = line.geometry as THREE.BufferGeometry;
        geom.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(bolt.points, 3)
        );
        geom.attributes.position.needsUpdate = true;
        const mat = line.material as THREE.LineBasicMaterial;
        mat.color.setRGB(2, 0, 0);
        mat.opacity = Math.max(bolt.life / 0.35, 0);
        line.visible = true;
      } else {
        line.visible = false;
      }
    }
  });

  return <group ref={groupRef} />;
}

/* ── Crystal model ── */
const BASE_SCALE = 2;
const MAX_SCALE = 2.2;
const SCALE_PER_HIT = 0.02;

function Crystal() {
  const ref = useRef<Group>(null);
  const { scene: originalScene } = useGLTF("/crystal_stone_rock.glb");
  const scene = useMemo(() => originalScene.clone(true), [originalScene]);
  const velocity = useRef(0);
  const shake = useRef(0);
  const hasClicked = useRef(false);
  const targetScale = useRef(BASE_SCALE);
  const currentScale = useRef(BASE_SCALE);
  const hoverTarget = useRef(new THREE.Vector2(0, 0));
  const hoverCurrent = useRef(new THREE.Vector2(0, 0));
  const isHovering = useRef(false);
  const { gl } = useThree();

  useFrame((_, delta) => {
    if (!ref.current) return;

    /* Rotation */
    velocity.current *= 1 - delta * 4;
    if (Math.abs(velocity.current) < 0.001) velocity.current = 0;
    if (velocity.current !== 0) {
      ref.current.rotation.y += delta * velocity.current;
    }

    /* Hover tilt — lean toward pointer */
    const lerpSpeed = delta * 4;
    if (isHovering.current) {
      hoverCurrent.current.x = THREE.MathUtils.lerp(hoverCurrent.current.x, hoverTarget.current.x, lerpSpeed);
      hoverCurrent.current.y = THREE.MathUtils.lerp(hoverCurrent.current.y, hoverTarget.current.y, lerpSpeed);
    } else {
      hoverCurrent.current.x = THREE.MathUtils.lerp(hoverCurrent.current.x, 0, lerpSpeed);
      hoverCurrent.current.y = THREE.MathUtils.lerp(hoverCurrent.current.y, 0, lerpSpeed);
    }
    ref.current.rotation.x = hoverCurrent.current.y * 0.15;
    ref.current.rotation.z = -hoverCurrent.current.x * 0.1;

    /* Shake */
    if (shake.current > 0) {
      shake.current *= 1 - delta * 10;
      if (shake.current < 0.001) shake.current = 0;
      ref.current.position.x = (Math.random() - 0.5) * shake.current * 0.12;
      ref.current.position.z = (Math.random() - 0.5) * shake.current * 0.08;
    } else {
      ref.current.position.x = 0;
      ref.current.position.z = 0;
    }

    /* Scale — only lerp after first click */
    if (hasClicked.current) {
      currentScale.current = THREE.MathUtils.lerp(currentScale.current, targetScale.current, delta * 6);
      ref.current.scale.setScalar(currentScale.current);
    }
  });

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    /* e.point is in world space — normalize relative to model center */
    hoverTarget.current.set(
      THREE.MathUtils.clamp(e.point.x, -1, 1),
      THREE.MathUtils.clamp(e.point.y, -1, 1)
    );
  };

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    hasClicked.current = true;
    velocity.current = 3;
    shake.current = 1;

    /* Grow with each hit, capped at MAX */
    targetScale.current = Math.min(targetScale.current + SCALE_PER_HIT, MAX_SCALE);

    const point = e.point.clone();
    spawnSparks(point);
    spawnLightning(point);
    flashStore.trigger(point);
  };

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={BASE_SCALE}
      position={[0, -0.2, 0]}
      onPointerOver={() => { gl.domElement.style.cursor = "pointer"; isHovering.current = true; }}
      onPointerOut={() => { gl.domElement.style.cursor = "default"; isHovering.current = false; }}
      onPointerMove={handlePointerMove}
      onClick={handleClick}
    />
  );
}

useGLTF.preload("/crystal_stone_rock.glb");

/* ── Main export ── */
export default function CrystalModel() {
  return (
    <div className="crystal-canvas">
      <Canvas
        camera={{ position: [0, 0.5, 5], fov: 35 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
        }}
        dpr={[1, 2.5]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-4, 3, -3]} intensity={0.6} color="#dc3c3c" />
        <pointLight position={[0, -4, 4]} intensity={0.8} color="#c9e265" />
        <pointLight position={[3, 2, -2]} intensity={0.3} color="#8b9cf7" />
        <Suspense fallback={null}>
          <Crystal />
          <SparksController />
          <ImpactFlashController />
          <LightningController />
        </Suspense>
        <Suspense fallback={null}>
          <Environment preset="city" environmentIntensity={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}
