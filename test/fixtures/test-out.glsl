#define PI 3.14
//this is a comment
precision mediump float;
uniform vec2 iResolution;

float scalar = .5;

void mainImage(in vec2 fragCoord, out vec4 fragColor) {
  vec2 uv = fragCoord.xy / iResolution.xy;
  fragColor = vec4(uv, 0.5);
}

void main() {
  float s = scalar + .5;
  mainImage(gl_FragCoord.xy*scalar, gl_FragColor);
}
