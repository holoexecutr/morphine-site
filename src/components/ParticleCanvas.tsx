import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number; // base horizontal velocity
  vy: number; // base vertical velocity
  radius: number;
  alpha: number;
  baseAlpha: number;
}

export default function ParticleCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    const particleCount = 42; // Sparse elegant fine grain density (low amount, not many)

    // Initialize flakes clustered directly around the top-left light source
    const initParticles = (w: number, h: number) => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        // Crisp, fine grain size (0.3px to 1.4px) mimicking starry dust in space
        const radius = Math.random() < 0.85 
          ? Math.random() * 0.5 + 0.3 
          : Math.random() * 0.6 + 0.8;
        const baseAlpha = Math.random() * 0.35 + 0.15; // Soft ambient transparencies (15% to 50%)
        
        let x = 0;
        let y = 0;
        
        // Cluster 55% of the particles near the top-left light corner (0, 0)
        // Keep 45% scattered naturally across the entire screen including dark areas
        if (Math.random() < 0.55) {
          const maxRadius = Math.max(w, h) * 0.45;
          const r = Math.pow(Math.random(), 1.4) * maxRadius;
          const angle = Math.random() * (Math.PI / 2); // 0 to 90 degrees quadrant
          x = r * Math.cos(angle);
          y = r * Math.sin(angle);
        } else {
          x = Math.random() * w;
          y = Math.random() * h;
        }

        particles.push({
          x,
          y,
          vx: (Math.random() - 0.4) * 0.10, // Subtle horizontal sway with a gentle drift towards the right
          vy: Math.random() * 0.15 + 0.07,  // Elegant, realistic downward drifting
          radius,
          alpha: baseAlpha,
          baseAlpha,
        });
      }
    };

    // Responsive coordinate & size handling
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        canvas.width = width;
        canvas.height = height;
        initParticles(width, height);
      }
    });

    resizeObserver.observe(container);

    // Render loop helper
    const draw = (w: number, h: number) => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Slower ambient updates without any cursor displacement math
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen boundaries seamlessly and reset back
        if (p.y > h + 15 || p.x > w + 15 || p.x < -15) {
          // If particle goes off, respawn it.
          // 55% chance to respawn near top-left light to maintain balanced density there
          if (Math.random() < 0.55) {
            const maxRadius = Math.max(w, h) * 0.45;
            const r = Math.pow(Math.random(), 1.4) * maxRadius;
            const angle = Math.random() * (Math.PI / 2);
            p.x = r * Math.cos(angle);
            p.y = r * Math.sin(angle);
          } else {
            // General top-edge spawning (can fall anywhere in the dark areas)
            p.y = -10;
            p.x = Math.random() * w;
          }
        }

        // Beautiful dust dynamics catching light:
        // Boost brightness slightly when inside the top-left spotlight beam, but retain clear ambient visibility on dark sides
        const distFromGlow = Math.sqrt(p.x * p.x + p.y * p.y);
        const fadeRadius = Math.max(w, h) * 0.55;
        let activeAlpha = p.baseAlpha;

        if (distFromGlow < fadeRadius) {
          // Subtle alpha boost capped at 0.75 near top-left (0,0)
          const intensity = 1.0 - (distFromGlow / fadeRadius);
          activeAlpha = Math.min(0.75, p.baseAlpha * (1.0 + intensity * 0.45));
        } else {
          // Base levels preserved on the dark sides so they look like twinkling stars!
          activeAlpha = p.baseAlpha;
        }

        // Render individual dust flake with elegant brand purple-white
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(195, 184, 255, ${activeAlpha})`;

        // Crisp premium glow on larger specs
        if (p.radius > 1.2 && activeAlpha > 0.2) {
          ctx.shadowBlur = 4;
          ctx.shadowColor = "rgba(165, 154, 255, 0.6)";
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0; // Performance reset
      }
    };

    const tick = () => {
      draw(canvas.width, canvas.height);
      animationId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        id="particle-canvas"
        className="block w-full h-full opacity-65"
      />
    </div>
  );
}

