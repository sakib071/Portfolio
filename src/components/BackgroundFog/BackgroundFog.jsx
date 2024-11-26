import { useEffect, useRef } from "react";
import * as THREE from "three";

const BackgroundFog = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Copy mountRef.current to a local variable
        const currentMount = mountRef.current;

        // Set up scene, camera, and renderer
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0xaaaaaa, 0.002); // Fog color and density

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); // Transparent background

        // Append renderer to DOM
        currentMount.appendChild(renderer.domElement);

        // Resize handler
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        // Create particles for fog effect
        const particles = new THREE.BufferGeometry();
        const particleCount = 5000;
        const particlePositions = [];

        for (let i = 0; i < particleCount; i++) {
            const x = (Math.random() - 0.5) * 50;
            const y = (Math.random() - 0.5) * 50;
            const z = (Math.random() - 0.5) * 50;
            particlePositions.push(x, y, z);
        }

        particles.setAttribute("position", new THREE.Float32BufferAttribute(particlePositions, 3));
        const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1, transparent: true });
        const particleSystem = new THREE.Points(particles, particleMaterial);
        scene.add(particleSystem);

        // Animation loop
        const animate = () => {
            particleSystem.rotation.y += 0.001; // Rotate particles for a fog-like motion
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        // Clean up on unmount
        return () => {
            currentMount.removeChild(renderer.domElement);
            renderer.dispose();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <div ref={mountRef} className="absolute inset-0 -z-10"></div>; // -z-10 to ensure it's in the background
};


export default BackgroundFog;