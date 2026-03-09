"use client";
/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const AntigravityInner = ({
  count = 400,
  magnetRadius = 50,
  ringRadius = 15,
  waveSpeed = 0.3,
  waveAmplitude = 1.5,
  particleSize = 0.8,
  lerpSpeed = 0.03,
  autoAnimate = true,
  particleVariance = 1,
  rotationSpeed = 0.1,
  depthFactor = 1,
  pulseSpeed = 2,
  particleShape = 'capsule',
  fieldStrength = 5
}) => {
  const meshRef = useRef(null);
  const { viewport } = useThree();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const lastMousePos = useRef({ x: 0, y: 0 });
  const lastMouseMoveTime = useRef(0);
  const virtualMouse = useRef({ x: 0, y: 0 });

  // Colores de la paleta
  const colors = useMemo(() => [
    new THREE.Color('#083040'), // azul oscuro
    new THREE.Color('#4CB5F5'), // azul clarito
    new THREE.Color('#FFD700'), // amarillo
    new THREE.Color('#093040'),
    new THREE.Color('#16BCCB'),
  ], []);

  const particles = useMemo(() => {
    const temp = [];
    const width = viewport.width || 100;
    const height = viewport.height || 100;

    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const speed = 0.005 + Math.random() / 400;
      const x = (Math.random() - 0.5) * width;
      const y = (Math.random() - 0.5) * height;
      const z = (Math.random() - 0.5) * 10;
      const randomRadiusOffset = (Math.random() - 0.5) * 2;
      const colorIndex = Math.floor(Math.random() * colors.length);

      temp.push({
        t, speed,
        mx: x, my: y, mz: z,
        cx: x, cy: y, cz: z,
        randomRadiusOffset,
        colorIndex,
      });
    }
    return temp;
  }, [count, viewport.width, viewport.height, colors]);

  // Color buffer para instanced mesh
  const colorArray = useMemo(() => {
    const arr = new Float32Array(count * 3);
    particles.forEach((p, i) => {
      colors[p.colorIndex].toArray(arr, i * 3);
    });
    return arr;
  }, [particles, colors, count]);

  useFrame(state => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const { viewport: v, pointer: m } = state;
    const time = state.clock.getElapsedTime();

    const mouseDist = Math.sqrt(
      Math.pow(m.x - lastMousePos.current.x, 2) +
      Math.pow(m.y - lastMousePos.current.y, 2)
    );

    if (mouseDist > 0.001) {
      lastMouseMoveTime.current = Date.now();
      lastMousePos.current = { x: m.x, y: m.y };
    }

    // Auto animación suave en ondas
    let destX = (m.x * v.width) / 2;
    let destY = (m.y * v.height) / 2;

    if (autoAnimate && Date.now() - lastMouseMoveTime.current > 1500) {
      destX = Math.sin(time * 0.3) * (v.width / 5) + Math.cos(time * 0.15) * (v.width / 8);
      destY = Math.cos(time * 0.3) * (v.height / 5) + Math.sin(time * 0.2) * (v.height / 8);
    }

    const smoothFactor = 0.04;
    virtualMouse.current.x += (destX - virtualMouse.current.x) * smoothFactor;
    virtualMouse.current.y += (destY - virtualMouse.current.y) * smoothFactor;

    const targetX = virtualMouse.current.x;
    const targetY = virtualMouse.current.y;
    const globalRotation = time * rotationSpeed;

    particles.forEach((particle, i) => {
      let { t, speed, mx, my, mz, cz, randomRadiusOffset } = particle;
      t = particle.t += speed / 2;

      const projectionFactor = 1 - cz / 50;
      const projectedTargetX = targetX * projectionFactor;
      const projectedTargetY = targetY * projectionFactor;

      const dx = mx - projectedTargetX;
      const dy = my - projectedTargetY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let targetPos = { x: mx, y: my, z: mz * depthFactor };

      if (dist < magnetRadius) {
        const angle = Math.atan2(dy, dx) + globalRotation;
        const wave = Math.sin(t * waveSpeed + angle) * (0.5 * waveAmplitude);
        const deviation = randomRadiusOffset * (5 / (fieldStrength + 0.1));
        const currentRingRadius = ringRadius + wave + deviation;

        targetPos.x = projectedTargetX + currentRingRadius * Math.cos(angle);
        targetPos.y = projectedTargetY + currentRingRadius * Math.sin(angle);
        targetPos.z = mz * depthFactor + Math.sin(t) * waveAmplitude * depthFactor;
      }

      particle.cx += (targetPos.x - particle.cx) * lerpSpeed;
      particle.cy += (targetPos.y - particle.cy) * lerpSpeed;
      particle.cz += (targetPos.z - particle.cz) * lerpSpeed;

      dummy.position.set(particle.cx, particle.cy, particle.cz);
      dummy.lookAt(projectedTargetX, projectedTargetY, particle.cz);
      dummy.rotateX(Math.PI / 2);

      const currentDistToMouse = Math.sqrt(
        Math.pow(particle.cx - projectedTargetX, 2) +
        Math.pow(particle.cy - projectedTargetY, 2)
      );

      const distFromRing = Math.abs(currentDistToMouse - ringRadius);
      let scaleFactor = 1 - distFromRing / 10;
      scaleFactor = Math.max(0, Math.min(1, scaleFactor));

      const finalScale = scaleFactor * (0.8 + Math.sin(t * pulseSpeed) * 0.2 * particleVariance) * particleSize;
      dummy.scale.set(finalScale, finalScale, finalScale);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });

    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <capsuleGeometry args={[0.08, 0.25, 4, 8]} />
      <meshBasicMaterial vertexColors />
      <instancedBufferAttribute
        attach="geometry-attributes-color"
        args={[colorArray, 3]}
      />
    </instancedMesh>
  );
};

const AntigravityCanvas = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 50], fov: 35 }}>
        <AntigravityInner />
      </Canvas>
    </div>
  );
};

export default AntigravityCanvas;