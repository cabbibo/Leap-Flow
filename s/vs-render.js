uniform sampler2D t_pos;
uniform sampler2D t_oPos;
uniform sampler2D t_ooPos;
uniform float size;

/*uniform float particleSize;
uniform float size;
uniform float noiseSize;
uniform float noisePower;
uniform float time;
uniform float timeSpeed;
uniform float timePower;
uniform float audioSizePower;
uniform float dpr;
uniform sampler2D audio;

*/


varying vec2 vUv;
varying vec3 vPos;
varying vec3 vVel;
varying float life;
/*varying vec4 vAudio;
varying vec4 vPosition;
varying float vNoise;
uniform sampler2D audio;*/

void main() {

    vec2 uv = position.xy + vec2( 0.5 / size, 0.5 / size );
    vUv = uv;
    vec4 pos = texture2D( t_pos , uv );
    life = pos.w;

    vec4 oPos = texture2D( t_oPos , uv );
    vec3 dif = pos.xyz - oPos.xyz;
    vPos = pos.xyz;
    vVel = dif;


    vec4 mvPos = modelViewMatrix * vec4( pos.xyz , 1.0 );
    gl_PointSize = min( 10.0, 10.0 * 1000. / length( mvPos ));
    gl_Position = projectionMatrix * mvPos;
}


