"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[1410],{83609:(e,t,r)=>{r.d(t,{L:()=>I,b:()=>A});var i=r(2522),a=r(37081),s=r(33280),n=r(48353),o=r(137),c=r(40526),l=r(74876),p=r(116),d=r(78980),h=r(41012),v=r(82999),u=r(95276),m=r(58406),T=r(98634),f=r(8654),S=r(64201),P=r(19253),g=r(4760),O=r(33720),_=r(53178);function A(e){const t=new S.kG,r=e.terrainDepthTest&&e.output===a.H_.Color,A=e.space===O.I9.World;t.include(n.U,e),t.include(c.Q,e);const{vertex:I,fragment:y}=t;return y.include(d.n),(0,h.Sv)(I,e),t.attributes.add(g.T.POSITION,"vec3"),t.attributes.add(g.T.PREVPOSITION,"vec3"),t.attributes.add(g.T.UV0,"vec2"),t.varyings.add("vColor","vec4"),t.varyings.add("vpos","vec3"),t.varyings.add("vUV","vec2"),t.varyings.add("vSize","float"),r&&t.varyings.add("depth","float"),e.hasTip&&t.varyings.add("vLineWidth","float"),I.uniforms.add(new v.A("nearFar",((e,t)=>t.camera.nearFar)),new u.N("viewport",((e,t)=>t.camera.fullViewport))),I.code.add(T.H`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),I.code.add(T.H`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
float interpolation = (-vnp - pos.z) / (prev.z - pos.z);
prev = mix(pos, prev, interpolation);
}
}`),A?(t.attributes.add(g.T.NORMAL,"vec3"),(0,h._8)(I),I.constants.add("tiltThreshold","float",.7),I.code.add(T.H`vec3 perpendicular(vec3 v) {
vec3 n = (viewNormal * vec4(normal.xyz, 1.0)).xyz;
vec3 n2 = cross(v, n);
vec3 forward = vec3(0.0, 0.0, 1.0);
float tiltDot = dot(forward, n);
return abs(tiltDot) < tiltThreshold ? n : n2;
}`)):I.code.add(T.H`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}`),I.code.add(T.H`
      #define vecN ${A?"vec3":"vec2"}

      vecN normalizedSegment(vecN pos, vecN prev) {
        vecN segment = pos - prev;
        float segmentLen = length(segment);

        // normalize or zero if too short
        return (segmentLen > 0.001) ? segment / segmentLen : ${A?"vec3(0.0, 0.0, 0.0)":"vec2(0.0, 0.0)"};
      }

      vecN displace(vecN pos, vecN prev, float displacementLen) {
        vecN segment = normalizedSegment(pos, prev);

        vecN displacementDirU = perpendicular(segment);
        vecN displacementDirV = segment;

        ${e.anchor===O.i5.Tip?"pos -= 0.5 * displacementLen * displacementDirV;":""}

        return pos + displacementLen * (uv0.x * displacementDirU + uv0.y * displacementDirV);
      }
    `),e.space===O.I9.Screen&&(I.uniforms.add(new f.g("inverseProjectionMatrix",((e,t)=>t.camera.inverseProjectionMatrix))),I.code.add(T.H`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`),I.code.add(T.H`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`),I.uniforms.add(new m.p("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),I.code.add(T.H`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${e.hasCap?"\n                if(prev.z > posLeft.z) {\n                  vec2 diff = posLeft.xy - posRight.xy;\n                  planeOrigin.xy += perpendicular(diff) / 2.0;\n                }\n              ":""};

        // Move the plane towards the camera by a margin dependent on the line width (approximated in world space). This tolerance corrects for the
        // non-planarity in most cases, but sharp joins can place the prev vertices at arbitrary positions so markers can still clip.
        float offset = lineWidth * perScreenPixelRatio;
        planeOrigin *= (1.0 - offset);

        // Intersect camera ray with the plane and make sure it is within clip space
        vec3 rayDir = normalize(displacedPos);
        vec3 intersection;
        if (rayIntersectPlane(rayDir, planeOrigin, planeNormal, intersection) && intersection.z < -nearFar[0] && intersection.z > -nearFar[1]) {
          return vec4(intersection.xyz, 1.0);
        }

        // Fallback: use depth of pos or prev, whichever is closer to the camera
        float minDepth = planeOrigin.z > prev.z ? length(planeOrigin) : length(prev);
        displacedPos *= minDepth / length(displacedPos);
        return vec4(displacedPos.xyz, 1.0);
      }
  `)),(0,h.ZI)(I),I.main.add(T.H`
    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      float lineWidth = getLineWidth();
      float screenMarkerSize = getScreenMarkerSize();

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      clip(pos, prev);

      ${A?T.H`${e.hideOnShortSegments?T.H`
                  if (areWorldMarkersHidden(pos, prev)) {
                    // Project out of clip space
                    gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
                    return;
                  }`:""}
            pos.xyz = displace(pos.xyz, prev.xyz, getWorldMarkerSize(pos));
            vec4 displacedPosScreen = projectAndScale(pos);`:T.H`
            vec4 posScreen = projectAndScale(pos);
            vec4 prevScreen = projectAndScale(prev);
            vec4 displacedPosScreen = posScreen;

            displacedPosScreen.xy = displace(posScreen.xy, prevScreen.xy, screenMarkerSize);
            ${e.space===O.I9.Screen?T.H`
                vec2 displacementDirU = perpendicular(normalizedSegment(posScreen.xy, prevScreen.xy));

                // We need three points of the ribbon line in camera space to calculate the plane it lies in
                // Note that we approximate the third point, since we have no information about the join around prev
                vec3 lineRight = inverseProject(posScreen + lineWidth * vec4(displacementDirU.xy, 0.0, 0.0));
                vec3 lineLeft = pos.xyz + (pos.xyz - lineRight);

                pos = toFront(displacedPosScreen, lineLeft, lineRight, prev.xyz, lineWidth);
                displacedPosScreen = projectAndScale(pos);`:""}`}

      ${r?"depth = pos.z;":""}

      // Convert back into NDC
      displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

      // Convert texture coordinate into [0,1]
      vUV = (uv0 + 1.0) / 2.0;
      ${A?"":"vUV *= displacedPosScreen.w;"}
      ${e.hasTip?"vLineWidth = lineWidth;":""}

      vSize = screenMarkerSize;
      vColor = getColor();

      // Use camera space for slicing
      vpos = pos.xyz;

      gl_Position = displacedPosScreen;
    }`),r&&t.include(l.H,e),t.include(s.f5,e),t.include(_.j,e),y.uniforms.add(new u.N("intrinsicColor",(e=>e.color)),new P.A("tex",(e=>e.markerTexture))),y.include(p.Y),y.constants.add("texelSize","float",1/i.OJ),y.code.add(T.H`float markerAlpha(vec2 samplePos) {
samplePos += vec2(0.5, -0.5) * texelSize;
float sdf = rgba2float(texture(tex, samplePos)) - 0.5;
float distance = sdf * vSize;
distance -= 0.5;
return clamp(0.5 - distance, 0.0, 1.0);
}`),e.hasTip&&y.constants.add("relativeMarkerSize","float",i.qO/i.OJ).constants.add("relativeTipLineWidth","float",i.zA).code.add(T.H`
    float tipAlpha(vec2 samplePos) {
      // Convert coordinates s.t. they are in pixels and relative to the tip of an arrow marker
      samplePos -= vec2(0.5, 0.5 + 0.5 * relativeMarkerSize);
      samplePos *= vSize;

      float halfMarkerSize = 0.5 * relativeMarkerSize * vSize;
      float halfTipLineWidth = 0.5 * max(1.0, relativeTipLineWidth * vLineWidth);

      ${A?"halfTipLineWidth *= fwidth(samplePos.y);":""}

      float distance = max(abs(samplePos.x) - halfMarkerSize, abs(samplePos.y) - halfTipLineWidth);
      return clamp(0.5 - distance, 0.0, 1.0);
    }
  `),t.include(o.b,e),y.main.add(T.H`
    discardBySlice(vpos);
    ${r?"terrainDepthTest(depth);":""}

    vec4 finalColor = intrinsicColor * vColor;
    ${A?"vec2 samplePos = vUV;":"vec2 samplePos = vUV * gl_FragCoord.w;"}
    ${e.hasTip?"finalColor.a *= max(markerAlpha(samplePos), tipAlpha(samplePos));":"finalColor.a *= markerAlpha(samplePos);"}
    outputColorHighlightOID(finalColor, vpos);`),t}const I=Object.freeze(Object.defineProperty({__proto__:null,build:A},Symbol.toStringTag,{value:"Module"}))},64642:(e,t,r)=>{r.d(t,{IM:()=>o,W1:()=>n,lV:()=>c,wp:()=>s});var i=r(55158),a=r(4760);const s=(0,i.U$)().vec3f(a.T.POSITION),n=(0,i.U$)().vec3f(a.T.POSITION).vec2f(a.T.UV0),o=(0,i.U$)().vec3f(a.T.POSITION).vec4u8(a.T.COLOR),c=(0,i.U$)().vec3f(a.T.POSITION).vec2f(a.T.UV0).vec4u8(a.T.OBJECTANDLAYERIDCOLOR)},21317:(e,t,r)=>{r.d(t,{X:()=>I});var i=r(32035),a=r(12400),s=r(55158),n=r(37081),o=r(26461),c=r(17363),l=r(56529),p=r(93822),d=r(4760),h=r(65964),v=r(82144),u=r(78914),m=r(78041),T=r(50411),f=r(83609),S=r(33720),P=r(8548),g=r(36207);class O extends u.A{constructor(e,t,i){super(e,t,new v.J(f.L,(()=>r.e(5085).then(r.bind(r,22668)))),i,_)}_makePipelineState(e,t){const{output:r,oitPass:i,space:a,hasOccludees:s}=e;return(0,g.sm)({blending:r===n.H_.Color?(0,m.Wo)(i):null,depthTest:a===S.I9.Draped?null:{func:(0,m.Bh)(i)},depthWrite:(0,m.W$)(e),drawBuffers:r===n.H_.Depth?{buffers:[P.Xg.NONE]}:(0,m.u_)(i,r),colorWrite:g.gf,stencilWrite:s?T.s3:null,stencilTest:s?t?T.eD:T.RY:null,polygonOffset:{factor:0,units:-10}})}initializePipeline(e){return e.occluder?(this._occluderPipelineTransparent=(0,g.sm)({blending:g.Dh,depthTest:T.zV,depthWrite:null,colorWrite:g.gf,stencilWrite:null,stencilTest:T.YD}),this._occluderPipelineOpaque=(0,g.sm)({blending:g.Dh,depthTest:T.zV,depthWrite:null,colorWrite:g.gf,stencilWrite:T.P7,stencilTest:T.ii}),this._occluderPipelineMaskWrite=(0,g.sm)({blending:null,depthTest:T.JN,depthWrite:null,colorWrite:null,stencilWrite:T.s3,stencilTest:T.eD})):this._occluderPipelineTransparent=this._occluderPipelineOpaque=this._occluderPipelineMaskWrite=null,this._occludeePipelineState=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){return e?this._occludeePipelineState:t===p.r.TRANSPARENT_OCCLUDER_MATERIAL?this._occluderPipelineTransparent??super.getPipeline():t===p.r.OCCLUDER_MATERIAL?this._occluderPipelineOpaque??super.getPipeline():this._occluderPipelineMaskWrite??super.getPipeline()}}const _=new Map([[d.T.POSITION,0],[d.T.PREVPOSITION,1],[d.T.UV0,2],[d.T.NORMAL,3],[d.T.COLOR,4],[d.T.COLORFEATUREATTRIBUTE,4],[d.T.SIZE,5],[d.T.SIZEFEATUREATTRIBUTE,5],[d.T.OPACITYFEATUREATTRIBUTE,6]]);var A=r(737);class I extends l.F5{constructor(e){super(e,R),this._configuration=new S.PI,this.vertexAttributeLocations=_,this.produces=new Map([[p.r.OPAQUE_MATERIAL,e=>e===n.H_.Highlight||(0,n.D5)(e)&&this.parameters.renderOccluded===l.yD.OccludeAndTransparentStencil],[p.r.OPAQUE_MATERIAL_WITHOUT_NORMALS,e=>(0,n.BX)(e)],[p.r.OCCLUDER_MATERIAL,e=>(0,n.Xo)(e)&&this.parameters.renderOccluded===l.yD.OccludeAndTransparentStencil],[p.r.TRANSPARENT_OCCLUDER_MATERIAL,e=>(0,n.Xo)(e)&&this.parameters.renderOccluded===l.yD.OccludeAndTransparentStencil],[p.r.TRANSPARENT_MATERIAL,e=>(0,n.D5)(e)&&this.parameters.writeDepth],[p.r.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>(0,n.D5)(e)&&!this.parameters.writeDepth],[p.r.DRAPED_MATERIAL,e=>e===n.H_.Color||e===n.H_.Highlight]]),this._layout=this.createLayout()}getConfiguration(e,t){return this._configuration.output=e,this._configuration.space=t.slot===p.r.DRAPED_MATERIAL?S.I9.Draped:this.parameters.worldSpace?S.I9.World:S.I9.Screen,this._configuration.hideOnShortSegments=this.parameters.hideOnShortSegments,this._configuration.hasCap=this.parameters.cap!==A.R.BUTT,this._configuration.anchor=this.parameters.anchor,this._configuration.hasTip=this.parameters.hasTip,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasOccludees=t.hasOccludees,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.occluder=this.parameters.renderOccluded===l.yD.OccludeAndTransparentStencil,this._configuration.oitPass=t.oitPass,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration}get visible(){return this.parameters.color[3]>=o.e}intersect(){}createLayout(){const e=(0,s.U$)().vec3f(d.T.POSITION).vec3f(d.T.PREVPOSITION).vec2f(d.T.UV0);return this.parameters.worldSpace&&e.vec3f(d.T.NORMAL),this.parameters.vvSize?e.f32(d.T.SIZEFEATUREATTRIBUTE):e.f32(d.T.SIZE),this.parameters.vvColor?e.f32(d.T.COLORFEATUREATTRIBUTE):e.vec4f(d.T.COLOR),this.parameters.vvOpacity&&e.f32(d.T.OPACITYFEATUREATTRIBUTE),e}createBufferWriter(){return new E(this._layout,this.parameters)}createGLMaterial(e){return new y(e)}}class y extends c.Fj{constructor(){super(...arguments),this._markerPrimitive=null}dispose(){super.dispose(),this._markerTextures.release(this._markerPrimitive),this._markerPrimitive=null}beginSlot(e){const t=this._material.parameters.markerPrimitive;return t!==this._markerPrimitive&&(this._material.setParameters({markerTexture:this._markerTextures.swap(t,this._markerPrimitive)}),this._markerPrimitive=t),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(O,e)}}class R extends h.n{constructor(){super(...arguments),this.width=0,this.color=[1,1,1,1],this.markerPrimitive="arrow",this.placement="end",this.cap=A.R.BUTT,this.anchor=S.i5.Center,this.hasTip=!1,this.worldSpace=!1,this.hideOnShortSegments=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.markerTexture=null}}class E{constructor(e,t){this.vertexBufferLayout=e,this._parameters=t}elementCount(){return"begin-end"===this._parameters.placement?12:6}write(e,t,r,a,s,n){const o=r.get(d.T.POSITION).data,c=o.length/3;let l=[1,0,0];const p=r.get(d.T.NORMAL);this._parameters.worldSpace&&null!=p&&(l=p.data);let h=1,v=0;this._parameters.vvSize?v=r.get(d.T.SIZEFEATUREATTRIBUTE).data[0]:r.has(d.T.SIZE)&&(h=r.get(d.T.SIZE).data[0]);let u=[1,1,1,1],m=0;this._parameters.vvColor?m=r.get(d.T.COLORFEATUREATTRIBUTE).data[0]:r.has(d.T.COLOR)&&(u=r.get(d.T.COLOR).data);let T=0;this._parameters.vvOpacity&&(T=r.get(d.T.OPACITYFEATUREATTRIBUTE).data[0]);const f=new Float32Array(s.buffer);let S=n*(this.vertexBufferLayout.stride/4);const P=(e,t,r,i)=>{if(f[S++]=e[0],f[S++]=e[1],f[S++]=e[2],f[S++]=t[0],f[S++]=t[1],f[S++]=t[2],f[S++]=r[0],f[S++]=r[1],this._parameters.worldSpace&&(f[S++]=l[0],f[S++]=l[1],f[S++]=l[2]),this._parameters.vvSize?f[S++]=v:f[S++]=h,this._parameters.vvColor)f[S++]=m;else{const e=Math.min(4*i,u.length-4);f[S++]=u[e],f[S++]=u[e+1],f[S++]=u[e+2],f[S++]=u[e+3]}this._parameters.vvOpacity&&(f[S++]=T)};let g;var O;(O=g||(g={}))[O.ASCENDING=1]="ASCENDING",O[O.DESCENDING=-1]="DESCENDING";const _=(t,r)=>{const a=(0,i.i)(w,o[3*t],o[3*t+1],o[3*t+2]),s=N;let n=t+r;do{(0,i.i)(s,o[3*n],o[3*n+1],o[3*n+2]),n+=r}while((0,i.H)(a,s)&&n>=0&&n<c);e&&((0,i.t)(a,a,e),(0,i.t)(s,s,e)),P(a,s,[-1,-1],t),P(a,s,[1,-1],t),P(a,s,[1,1],t),P(a,s,[-1,-1],t),P(a,s,[1,1],t),P(a,s,[-1,1],t)},A=this._parameters.placement;"begin"!==A&&"begin-end"!==A||_(0,g.ASCENDING),"end"!==A&&"begin-end"!==A||_(c-1,g.DESCENDING)}}const w=(0,a.Ue)(),N=(0,a.Ue)()},11983:(e,t,r)=>{r.d(t,{c:()=>s});var i=r(56529),a=r(42235);class s extends i.F5{intersect(e,t,r,i,s,n){return(0,a.Bw)(e,r,i,s,void 0,n)}}}}]);
//# sourceMappingURL=1410.ae3937d0.chunk.js.map