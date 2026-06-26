import { useEffect, useRef } from "react";

/**
 * Lightweight Three.js scene — rotating wireframe sphere + drifting particles.
 * Client-only via dynamic import. Disabled on small screens / reduced motion.
 */
export function BackgroundFX() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 768px)").matches;
    if (reduce || small) return;

    let raf = 0;
    let cleanup = () => {};

    (async () => {
      const THREE = await import("three");
      const el = containerRef.current;
      if (!el) return;

      const scene = new THREE.Scene();
      const w = el.clientWidth;
      const h = el.clientHeight;
      const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
      camera.position.z = 6;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(w, h);
      el.appendChild(renderer.domElement);

      // Wireframe sphere
      const sphereGeo = new THREE.IcosahedronGeometry(2.2, 1);
      const sphereMat = new THREE.MeshBasicMaterial({
        color: 0xffd400,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      });
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      scene.add(sphere);

      // Inner solid faint sphere
      const inner = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.4, 0),
        new THREE.MeshBasicMaterial({ color: 0x1a1a1a, transparent: true, opacity: 0.6 }),
      );
      scene.add(inner);

      // Particles
      const count = 350;
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 14;
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const pMat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.025,
        transparent: true,
        opacity: 0.45,
      });
      const points = new THREE.Points(pGeo, pMat);
      scene.add(points);

      let mx = 0;
      let my = 0;
      const onMouse = (e: MouseEvent) => {
        mx = (e.clientX / window.innerWidth) * 2 - 1;
        my = (e.clientY / window.innerHeight) * 2 - 1;
      };
      window.addEventListener("mousemove", onMouse);

      const onResize = () => {
        if (!el) return;
        const nw = el.clientWidth;
        const nh = el.clientHeight;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
      };
      window.addEventListener("resize", onResize);

      const animate = () => {
        raf = requestAnimationFrame(animate);
        sphere.rotation.x += 0.0015;
        sphere.rotation.y += 0.002;
        inner.rotation.y -= 0.001;
        points.rotation.y += 0.0006;
        camera.position.x += (mx * 0.6 - camera.position.x) * 0.03;
        camera.position.y += (-my * 0.4 - camera.position.y) * 0.03;
        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
      };
      animate();

      cleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("mousemove", onMouse);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        sphereGeo.dispose();
        sphereMat.dispose();
        pGeo.dispose();
        pMat.dispose();
        if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
      };
    })();

    return () => cleanup();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Concrete gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.2_0_0),oklch(0.1_0_0)_60%)]" />
      {/* Grid */}
      <div className="grid-bg absolute inset-0 opacity-40" />
      {/* Three.js mount */}
      <div ref={containerRef} className="absolute inset-0 opacity-70" />
      {/* Scan line */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-hazard/40 to-transparent scan-line" />
      {/* Hazard radial wash */}
      <div className="absolute -right-40 top-1/3 h-[150] w-[150] rounded-full bg-(--gradient-radial-hazard)] blur-2xl" />
      {/* Noise */}
      <div className="absolute inset-0 noise" />
    </div>
  );
}
