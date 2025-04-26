'use client';

import { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Create PIXI Application
    const app = new PIXI.Application({
      resizeTo: window,
      backgroundAlpha: 0,
      antialias: true,
    });
    
    // Add canvas to DOM
    canvasRef.current.appendChild(app.view as HTMLCanvasElement);
    
    // Create background mesh
    const createNoiseMesh = () => {
      // Create a simple fragment shader for noise effect
      const fragmentShader = `
        precision mediump float;
        uniform float time;
        uniform vec2 resolution;
        
        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
        }
        
        float noise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);
          
          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));
          
          vec2 u = f * f * (3.0 - 2.0 * f);
          
          return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
        }
        
        void main() {
          vec2 st = gl_FragCoord.xy / resolution.xy;
          st.x *= resolution.x / resolution.y;
          
          vec3 color = vec3(0.0);
          
          // Noise layers with different frequencies and amplitudes
          float n = 0.0;
          n += 0.5 * noise(st * 3.0 + time * 0.1);
          n += 0.25 * noise(st * 6.0 + time * 0.2);
          n += 0.125 * noise(st * 12.0 + time * 0.3);
          n += 0.0625 * noise(st * 24.0 + time * 0.4);
          
          // Create subtle gradient
          color = mix(
            vec3(0.92, 0.92, 0.92), 
            vec3(0.98, 0.98, 0.98), 
            n
          );
          
          gl_FragColor = vec4(color, 0.05);
        }
      `;
      
      // Create shader and apply to mesh
      const uniforms = {
        time: 0,
        resolution: new Float32Array([window.innerWidth, window.innerHeight]),
      };
      
      const shader = PIXI.Shader.from('', fragmentShader, uniforms);
      const geometry = new PIXI.Geometry()
        .addAttribute(
          'position',
          [
            -1, -1, 1, -1, 1, 1, -1, 1,
          ],
          2
        )
        .addAttribute(
          'uv',
          [
            0, 0, 1, 0, 1, 1, 0, 1,
          ],
          2
        )
        .addIndex([0, 1, 2, 0, 2, 3]);
      
      const mesh = new PIXI.Mesh(geometry, shader);
      mesh.position.set(app.screen.width / 2, app.screen.height / 2);
      mesh.scale.set(app.screen.width / 2, app.screen.height / 2);
      
      app.stage.addChild(mesh);
      
      // Update shader time uniform on each frame
      app.ticker.add((delta) => {
        shader.uniforms.time += delta * 0.01;
      });
      
      // Handle window resize
      window.addEventListener('resize', () => {
        shader.uniforms.resolution = new Float32Array([window.innerWidth, window.innerHeight]);
        mesh.position.set(app.screen.width / 2, app.screen.height / 2);
        mesh.scale.set(app.screen.width / 2, app.screen.height / 2);
      });
      
      return mesh;
    };
    
    const noiseMesh = createNoiseMesh();
    
    return () => {
      app.destroy(true, true);
    };
  }, []);

  return <div ref={canvasRef} className="webgl-container"></div>;
}