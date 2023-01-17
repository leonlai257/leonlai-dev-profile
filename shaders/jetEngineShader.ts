import glslNoise from './glslNoise';

const jetEngineVertex = `
  varying vec2 vUv;
  varying vec3 vPosition;

  void main() {
      vUv = uv;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const jetEngineFragment = `
  precision mediump float;

  uniform vec3 uColor;
  uniform float uTime;
  uniform sampler2D uTexture;
  uniform float uTextureTiling;
  uniform float uThrust;

  varying vec2 vUv;
  varying vec3 vPosition;

  ${glslNoise}

  void main() {
      vec3 noisy = snoiseVec3(vec3(vPosition * 10. * uTime));
      
      vec2 offset = vec2(uTime * 0.3, uTime);

      vec4 texture = texture2D(uTexture, vUv * vec2(uTextureTiling, uTextureTiling * 0.2) - offset);
      vec3 gradient = vec3((uThrust-vUv.y) * vec3(1.0, 1.0, 1.0));
      vec3 mixCol = mix(texture.xyz, gradient, 0.5);

      vec4 fragColor = vec4(mixCol * uColor, texture.a);

      if (fragColor.a - 0.5 <= 0.0)
          {
              discard;
          };

      gl_FragColor = fragColor;
  }
`;

export { jetEngineVertex, jetEngineFragment };
