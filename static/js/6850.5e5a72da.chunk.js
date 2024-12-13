"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[6850],{18300:(e,t,i)=>{i.d(t,{L:()=>m,b:()=>f});var n=i(29134),r=i(7025),s=i(13611),a=i(6644),l=i(8084),o=i(82999),c=i(58406),h=i(98634),d=i(8654),u=i(64201),p=i(4760);function f(e){const t=new u.kG;t.include(l.j,e);const{vertex:i,fragment:r}=t;i.uniforms.add(new d.g("modelView",((e,t)=>{let{camera:i}=t;return(0,n.Iu)(_,i.viewMatrix,e.origin)})),new d.g("proj",((e,t)=>{let{camera:i}=t;return i.projectionMatrix})),new c.p("glowWidth",((e,t)=>{let{camera:i}=t;return e.glowWidth*i.pixelRatio})),new o.A("pixelToNDC",((e,t)=>{let{camera:i}=t;return(0,s.t8)(g,2/i.fullViewport[2],2/i.fullViewport[3])}))),t.attributes.add(p.T.START,"vec3"),t.attributes.add(p.T.END,"vec3"),e.spherical&&(t.attributes.add(p.T.START_UP,"vec3"),t.attributes.add(p.T.END_UP,"vec3")),t.attributes.add(p.T.EXTRUDE,"vec2"),t.varyings.add("uv","vec2"),t.varyings.add("vViewStart","vec3"),t.varyings.add("vViewEnd","vec3"),t.varyings.add("vViewSegmentNormal","vec3"),t.varyings.add("vViewStartNormal","vec3"),t.varyings.add("vViewEndNormal","vec3");const a=!e.spherical;return i.main.add(h.H`
    vec3 pos = mix(start, end, extrude.x);

    vec4 viewPos = modelView * vec4(pos, 1);
    vec4 projPos = proj * viewPos;
    vec2 ndcPos = projPos.xy / projPos.w;

    // in planar we hardcode the up vectors to be Z-up */
    ${(0,h.If)(a,h.H`vec3 startUp = vec3(0, 0, 1);`)}
    ${(0,h.If)(a,h.H`vec3 endUp = vec3(0, 0, 1);`)}

    // up vector corresponding to the location of the vertex, selecting either startUp or endUp */
    vec3 up = extrude.y * mix(startUp, endUp, extrude.x);
    vec3 viewUp = (modelView * vec4(up, 0)).xyz;

    vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
    vec2 projUp = normalize(projPosUp.xy / projPosUp.w - ndcPos);

    // extrude ndcPos along projUp to the edge of the screen
    vec2 lxy = abs(sign(projUp) - ndcPos);
    ndcPos += length(lxy) * projUp;

    vViewStart = (modelView * vec4(start, 1)).xyz;
    vViewEnd = (modelView * vec4(end, 1)).xyz;

    vec3 viewStartEndDir = vViewEnd - vViewStart;

    vec3 viewStartUp = (modelView * vec4(startUp, 0)).xyz;

    // the normal of the plane that aligns with the segment and the up vector
    vViewSegmentNormal = normalize(cross(viewStartUp, viewStartEndDir));

    // the normal orthogonal to the segment normal and the start up vector
    vViewStartNormal = -normalize(cross(vViewSegmentNormal, viewStartUp));

    // the normal orthogonal to the segment normal and the end up vector
    vec3 viewEndUp = (modelView * vec4(endUp, 0)).xyz;
    vViewEndNormal = normalize(cross(vViewSegmentNormal, viewEndUp));

    // Add enough padding in the X screen space direction for "glow"
    float xPaddingPixels = sign(dot(vViewSegmentNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
    ndcPos.x += xPaddingPixels * pixelToNDC.x;

    // uv is used to read back depth to reconstruct the position at the fragment
    uv = ndcPos * 0.5 + 0.5;

    gl_Position = vec4(ndcPos, 0, 1);
  `),r.uniforms.add(new c.p("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),r.code.add(h.H`float planeDistance(vec3 planeNormal, vec3 planeOrigin, vec3 pos) {
return dot(planeNormal, pos - planeOrigin);
}
float segmentDistancePixels(vec3 segmentNormal, vec3 startNormal, vec3 endNormal, vec3 pos, vec3 start, vec3 end) {
float distSegmentPlane = planeDistance(segmentNormal, start, pos);
float distStartPlane = planeDistance(startNormal, start, pos);
float distEndPlane = planeDistance(endNormal, end, pos);
float dist = max(max(distStartPlane, distEndPlane), abs(distSegmentPlane));
float width = fwidth(distSegmentPlane);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}`),r.main.add(h.H`fragColor = vec4(0.0);
vec3 dEndStart = vViewEnd - vViewStart;
if (dot(dEndStart, dEndStart) < 1e-5) {
return;
}
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
return;
}
float distance = segmentDistancePixels(
vViewSegmentNormal,
vViewStartNormal,
vViewEndNormal,
pos,
vViewStart,
vViewEnd
);
vec4 color = laserlineProfile(distance);
float alpha = (1.0 - smoothstep(0.995 - angleCutoffAdjust, 0.999 - angleCutoffAdjust, abs(dot(normal, vViewSegmentNormal))));
fragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);`),t}const g=(0,a.Ue)(),_=(0,r.Ue)(),m=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}))},83671:(e,t,i)=>{i.d(t,{L:()=>U,b:()=>w,d:()=>x});var n=i(16889),r=i(13611),s=i(6644),a=i(32035),l=i(12400),o=i(19093),c=i(86361),h=i(85981),d=i(55652),u=i(83479),p=i(8084),f=i(24967),g=i(82999),_=i(49450),m=i(95276),v=i(58406),P=i(98634),b=i(64201);const x=(0,n.Vl)(6);function w(e){const t=new b.kG;t.include(f.k),t.include(p.j,e);const i=t.fragment;if(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)if(i.uniforms.add(new v.p("maxPixelDistance",((t,i)=>e.heightManifoldEnabled?2*i.camera.computeScreenPixelSizeAt(t.heightManifoldTarget):2*i.camera.computeScreenPixelSizeAt(t.lineVerticalPlaneSegment.origin)))),i.code.add(P.H`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.spherical){const e=(e,t,i)=>(0,a.t)(e,t.heightManifoldTarget,i.camera.viewMatrix),t=(e,t)=>(0,a.t)(e,[0,0,0],t.camera.viewMatrix);i.uniforms.add(new m.N("heightManifoldOrigin",((i,n)=>(e(V,i,n),t(C,n),(0,a.d)(C,C,V),(0,a.n)(y,C),y[3]=(0,a.l)(C),y))),new _.J("globalOrigin",((e,i)=>t(V,i))),new v.p("cosSphericalAngleThreshold",((e,t)=>1-Math.max(2,(0,a.j)(t.camera.eye,e.heightManifoldTarget)*t.camera.perRenderPixelRatio)/(0,a.l)(e.heightManifoldTarget)))),i.code.add(P.H`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else i.code.add(P.H`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(e.pointDistanceEnabled&&(i.uniforms.add(new v.p("maxPixelDistance",((e,t)=>2*t.camera.computeScreenPixelSizeAt(e.pointDistanceTarget)))),i.code.add(P.H`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),e.intersectsLineEnabled&&(i.uniforms.add(new v.p("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),i.code.add(P.H`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&i.code.add(P.H`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),i.main.add(P.H`vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
fragColor = vec4(0.0);
return;
}
vec4 color = vec4(0.0);`),e.heightManifoldEnabled){i.uniforms.add(new g.A("angleCutoff",(e=>E(e))),new m.N("heightPlane",((e,t)=>D(e.heightManifoldTarget,e.renderCoordsHelper.worldUpAtPosition(e.heightManifoldTarget,V),t.camera.viewMatrix))));const t=e.spherical?P.H`normalize(globalOrigin - pos)`:P.H`heightPlane.xyz`;i.main.add(P.H`
      vec2 angleCutoffAdjusted = angleCutoff - angleCutoffAdjust;
      // Fade out laserlines on flat surfaces
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoffAdjusted.x, angleCutoffAdjusted.y, abs(dot(normal, ${t})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);`)}return e.pointDistanceEnabled&&(i.uniforms.add(new g.A("angleCutoff",(e=>E(e))),new m.N("pointDistanceSphere",((e,t)=>function(e,t){return(0,a.t)((0,u.a)(M),e.pointDistanceOrigin,t.camera.viewMatrix),M[3]=(0,a.j)(e.pointDistanceOrigin,e.pointDistanceTarget),M}(e,t)))),i.main.add(P.H`float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);`)),e.lineVerticalPlaneEnabled&&(i.uniforms.add(new g.A("angleCutoff",(e=>E(e))),new m.N("lineVerticalPlane",((e,t)=>function(e,t){const i=(0,h.KU)(e.lineVerticalPlaneSegment,.5,V),n=e.renderCoordsHelper.worldUpAtPosition(i,L),r=(0,a.n)(C,e.lineVerticalPlaneSegment.vector),s=(0,a.e)(V,n,r);return(0,a.n)(s,s),D(e.lineVerticalPlaneSegment.origin,s,t.camera.viewMatrix)}(e,t))),new _.J("lineVerticalStart",((e,t)=>function(e,t){const i=(0,a.c)(V,e.lineVerticalPlaneSegment.origin);return e.renderCoordsHelper.setAltitude(i,0),(0,a.t)(i,i,t.camera.viewMatrix)}(e,t))),new _.J("lineVerticalEnd",((e,t)=>function(e,t){const i=(0,a.g)(V,e.lineVerticalPlaneSegment.origin,e.lineVerticalPlaneSegment.vector);return e.renderCoordsHelper.setAltitude(i,0),(0,a.t)(i,i,t.camera.viewMatrix)}(e,t)))),i.main.add(P.H`if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}`)),e.intersectsLineEnabled&&(i.uniforms.add(new g.A("angleCutoff",(e=>E(e))),new _.J("intersectsLineStart",((e,t)=>(0,a.t)(V,e.lineStartWorld,t.camera.viewMatrix))),new _.J("intersectsLineEnd",((e,t)=>(0,a.t)(V,e.lineEndWorld,t.camera.viewMatrix))),new _.J("intersectsLineDirection",((e,t)=>((0,a.c)(y,e.intersectsLineSegment.vector),y[3]=0,(0,a.n)(V,(0,o.t)(y,y,t.camera.viewMatrix))))),new v.p("intersectsLineRadius",(e=>e.intersectsLineRadius))),i.main.add(P.H`if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}`)),i.main.add(P.H`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);`),t}function E(e){return(0,r.t8)(S,Math.cos(e.angleCutoff),Math.cos(Math.max(0,e.angleCutoff-(0,n.Vl)(2))))}function D(e,t,i){return(0,a.t)(A,e,i),(0,a.c)(y,t),y[3]=0,(0,o.t)(y,y,i),(0,d.Yq)(A,y,T)}const S=(0,s.Ue)(),V=(0,l.Ue)(),y=(0,c.Ue)(),L=(0,l.Ue)(),C=(0,l.Ue)(),A=(0,l.Ue)(),T=(0,d.Ue)(),M=(0,u.c)(),U=Object.freeze(Object.defineProperty({__proto__:null,build:w,defaultAngleCutoff:x},Symbol.toStringTag,{value:"Module"}))},96026:(e,t,i)=>{i.d(t,{W:()=>$});i(93169);var n=i(32035),r=i(12400),s=i(85981),a=i(86244),l=i(27366),o=i(92026),c=i(49861),h=(i(32718),i(84936),i(69912)),d=i(70444),u=i(95773),p=i(40885),f=i(50951),g=i(85192),_=i(31239),m=i(54971),v=i(86372),P=i(50256),b=i(55158),x=i(82144),w=i(78914),E=i(16889),D=i(98634),S=i(83671);class V extends D.K{constructor(){super(...arguments),this.innerColor=(0,r.al)(1,1,1),this.innerWidth=1,this.glowColor=(0,r.al)(1,.5,0),this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=.75,this.globalAlphaContrastBoost=2,this.angleCutoff=(0,E.Vl)(6),this.pointDistanceOrigin=(0,r.Ue)(),this.pointDistanceTarget=(0,r.Ue)(),this.lineVerticalPlaneSegment=(0,s.Ue)(),this.intersectsLineSegment=(0,s.Ue)(),this.intersectsLineRadius=3,this.heightManifoldTarget=(0,r.Ue)(),this.lineStartWorld=(0,r.Ue)(),this.lineEndWorld=(0,r.Ue)()}}class y extends w.A{constructor(e,t,n){super(e,t,new x.J(S.L,(()=>i.e(5693).then(i.bind(i,45693)))),n)}}var L=i(4760),C=i(18300);class A extends V{constructor(){super(...arguments),this.origin=(0,r.Ue)()}}class T extends w.A{constructor(e,t,n){super(e,t,new x.J(C.L,(()=>i.e(7515).then(i.bind(i,97515)))),n,M)}}const M=new Map([[L.T.START,0],[L.T.END,1],[L.T.EXTRUDE,2],[L.T.START_UP,3],[L.T.END_UP,4]]);var U=i(80658),R=i(44070),I=i(8548);class z{constructor(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=(0,r.Ue)(),this._dirty=!1,this._count=0,this._vao=null}set vertices(e){const t=(0,v.bg)(3*e.length);let i=0;for(const n of e)t[i++]=n[0],t[i++]=n[1],t[i++]=n[2];this.buffers=[t]}set buffers(e){if(this._buffers=e,this._buffers.length>0){const e=this._buffers[0],t=3*Math.floor(e.length/3/2);(0,n.i)(this._origin,e[t],e[t+1],e[t+2])}else(0,n.i)(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(e){const t=this._ensureVAO(e);null!=t&&(e.bindVAO(t),e.drawArrays(I.MX.TRIANGLES,0,this._count))}dispose(){null!=this._vao&&this._vao.dispose()}get _layout(){return this._renderCoordsHelper.viewingMode===f.JY.Global?N:j}_ensureVAO(e){return null==this._buffers?null:(this._vao??=this._createVAO(e,this._buffers),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(e,t){const i=this._createDataBuffer(t);return this._dirty=!1,new U.U(e,M,new Map([["data",(0,P.K)(this._layout)]]),new Map([["data",R.f.createVertex(e,I.l1.STATIC_DRAW,i)]]))}_ensureVertexData(e,t){if(!this._dirty)return;const i=this._createDataBuffer(t);e.vertexBuffers.get("data")?.setData(i),this._dirty=!1}_createDataBuffer(e){const t=e.reduce(((e,t)=>e+H(t)),0);this._count=t;const i=this._layout.createBuffer(t),r=this._origin;let s=0,a=0;const l="startUp"in i?this._setUpVectors.bind(this,i):void 0;for(const o of e){for(let e=0;e<o.length;e+=3){const t=(0,n.i)(q,o[e],o[e+1],o[e+2]);0===e?a=this._renderCoordsHelper.getAltitude(t):this._renderCoordsHelper.setAltitude(t,a);const c=s+2*e;l?.(e,c,o,t);const h=(0,n.d)(q,t,r);if(e<o.length-3){for(let e=0;e<6;e++)i.start.setVec(c+e,h);i.extrude.setValues(c,0,-1),i.extrude.setValues(c+1,1,-1),i.extrude.setValues(c+2,1,1),i.extrude.setValues(c+3,0,-1),i.extrude.setValues(c+4,1,1),i.extrude.setValues(c+5,0,1)}if(e>0)for(let e=-6;e<0;e++)i.end.setVec(c+e,h)}s+=H(o)}return i.buffer}_setUpVectors(e,t,i,n,r){const s=this._renderCoordsHelper.worldUpAtPosition(r,O);if(t<n.length-3)for(let a=0;a<6;a++)e.startUp.setVec(i+a,s);if(t>0)for(let a=-6;a<0;a++)e.endUp.setVec(i+a,s)}}function H(e){return 2*(e.length/3-1)*3}const O=(0,r.Ue)(),q=(0,r.Ue)(),N=(0,b.U$)().vec3f(L.T.START).vec3f(L.T.END).vec2f(L.T.EXTRUDE).vec3f(L.T.START_UP).vec3f(L.T.END_UP),j=(0,b.U$)().vec3f(L.T.START).vec3f(L.T.END).vec2f(L.T.EXTRUDE);var W=i(5775);class G extends W.m{constructor(){super(...arguments),this.contrastControlEnabled=!1,this.spherical=!1}}(0,l._)([(0,W.o)()],G.prototype,"contrastControlEnabled",void 0),(0,l._)([(0,W.o)()],G.prototype,"spherical",void 0);class X extends G{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1}}(0,l._)([(0,W.o)()],X.prototype,"heightManifoldEnabled",void 0),(0,l._)([(0,W.o)()],X.prototype,"pointDistanceEnabled",void 0),(0,l._)([(0,W.o)()],X.prototype,"lineVerticalPlaneEnabled",void 0),(0,l._)([(0,W.o)()],X.prototype,"intersectsLineEnabled",void 0);var B=i(68401),J=i(22909),F=i(141);let k=class extends _.Z{constructor(e){super(e),this.produces=g.CM.LASERLINES,this.consumes={required:[g.CM.LASERLINES,"normals"]},this.requireGeometryDepth=!0,this._configuration=new X,this._pathTechniqueConfiguration=new G,this._heightManifoldEnabled=!1,this._pointDistanceEnabled=!1,this._lineVerticalPlaneEnabled=!1,this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._pathVerticalPlaneEnabled=!1,this._passParameters=new A;const t=e.view._stage.renderView.techniques,i=new G;i.contrastControlEnabled=e.contrastControlEnabled,t.precompile(T,i)}initialize(){this._passParameters.renderCoordsHelper=this.view.renderCoordsHelper,this._pathTechniqueConfiguration.spherical=this.view.state.viewingMode===f.JY.Global,this._pathTechniqueConfiguration.contrastControlEnabled=this.contrastControlEnabled,this._techniques.precompile(T,this._pathTechniqueConfiguration),this._blit=new m.N(this._techniques,F.J.PremultipliedAlpha)}destroy(){this._pathVerticalPlaneData=(0,o.M2)(this._pathVerticalPlaneData),this._blit=null}get _techniques(){return this.view._stage.renderView.techniques}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(e){this._heightManifoldEnabled!==e&&(this._heightManifoldEnabled=e,this.requestRender(B.Xx.UPDATE))}get heightManifoldTarget(){return this._passParameters.heightManifoldTarget}set heightManifoldTarget(e){(0,n.c)(this._passParameters.heightManifoldTarget,e),this.requestRender(B.Xx.UPDATE)}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(e){e!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=e,this.requestRender(B.Xx.UPDATE))}get pointDistanceTarget(){return this._passParameters.pointDistanceTarget}set pointDistanceTarget(e){(0,n.c)(this._passParameters.pointDistanceTarget,e),this.requestRender(B.Xx.UPDATE)}get pointDistanceOrigin(){return this._passParameters.pointDistanceOrigin}set pointDistanceOrigin(e){(0,n.c)(this._passParameters.pointDistanceOrigin,e),this.requestRender(B.Xx.UPDATE)}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(e){e!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=e,this.requestRender(B.Xx.UPDATE))}get lineVerticalPlaneSegment(){return this._passParameters.lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){(0,s.JG)(e,this._passParameters.lineVerticalPlaneSegment),this.requestRender(B.Xx.UPDATE)}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(e){e!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=e,this.requestRender(B.Xx.UPDATE))}get intersectsLineSegment(){return this._passParameters.intersectsLineSegment}set intersectsLineSegment(e){(0,s.JG)(e,this._passParameters.intersectsLineSegment),this.requestRender(B.Xx.UPDATE)}get intersectsLineRadius(){return this._passParameters.intersectsLineRadius}set intersectsLineRadius(e){e!==this._passParameters.intersectsLineRadius&&(this._passParameters.intersectsLineRadius=e,this.requestRender(B.Xx.UPDATE))}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){e!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=e,this.requestRender(B.Xx.UPDATE))}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(e){e!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=e,null!=this._pathVerticalPlaneData&&this.requestRender(B.Xx.UPDATE))}set pathVerticalPlaneVertices(e){null==this._pathVerticalPlaneData&&(this._pathVerticalPlaneData=new z(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.vertices=e,this.pathVerticalPlaneEnabled&&this.requestRender(B.Xx.UPDATE)}set pathVerticalPlaneBuffers(e){null==this._pathVerticalPlaneData&&(this._pathVerticalPlaneData=new z(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.buffers=e,this.pathVerticalPlaneEnabled&&this.requestRender(B.Xx.UPDATE)}setParameters(e){(0,J.LO)(this._passParameters,e)&&this.requestRender(B.Xx.UPDATE)}precompile(){this._acquireTechnique().release()}render(e){const t=e.find((e=>{let{name:t}=e;return t===g.CM.LASERLINES}));if(!this.bindParameters.decorations||null==this._blit)return t;const i=this.renderingContext,n=e.find((e=>{let{name:t}=e;return"normals"===t}));this._passParameters.normals=n?.getTexture();const r=()=>{(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(),this.pathVerticalPlaneEnabled&&this._renderPath()};if(!this.contrastControlEnabled)return i.bindFramebuffer(t.fbo),r(),t;this._passParameters.colors=t.getTexture();const s=this.fboCache.acquire(t.fbo.width,t.fbo.height,"laser lines");return i.bindFramebuffer(s.fbo),i.setClearColor(0,0,0,0),i.clear(I.Hf.COLOR|I.Hf.DEPTH),r(),i.unbindTexture(t.getTexture()),this._blit.blend(i,s,t,this.bindParameters)||this.requestRender(B.Xx.UPDATE),s.release(),t}_acquireTechnique(){return this._configuration.heightManifoldEnabled=this.heightManifoldEnabled,this._configuration.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._configuration.pointDistanceEnabled=this.pointDistanceEnabled,this._configuration.intersectsLineEnabled=this.intersectsLineEnabled,this._configuration.contrastControlEnabled=this.contrastControlEnabled,this._configuration.spherical=this.view.state.viewingMode===f.JY.Global,this._techniques.acquire(y,this._configuration)}_renderUnified(){if(!this._updatePassParameters())return;const e=this._acquireTechnique();if(e.compiled){const t=this.renderingContext;t.bindTechnique(e,this.bindParameters,this._passParameters),t.screen.draw()}else this.requestRender(B.Xx.UPDATE);e.release()}_renderPath(){if(null==this._pathVerticalPlaneData)return;const e=this._techniques.acquire(T,this._pathTechniqueConfiguration);if(e.compiled){const t=this.renderingContext;this._passParameters.origin=this._pathVerticalPlaneData.origin,t.bindTechnique(e,this.bindParameters,this._passParameters),this._pathVerticalPlaneData.draw(t)}else this.requestRender(B.Xx.UPDATE);e.release()}_updatePassParameters(){if(!this._intersectsLineEnabled)return!0;const e=this.bindParameters.camera,t=this._passParameters;if(this._intersectsLineInfinite){if((0,d.iL)((0,p.re)(t.intersectsLineSegment.origin,t.intersectsLineSegment.vector),Z),Z.c0=-Number.MAX_VALUE,!(0,u.zq)(e.frustum,Z))return!1;(0,d.Ws)(Z,t.lineStartWorld),(0,d.S$)(Z,t.lineEndWorld)}else(0,n.c)(t.lineStartWorld,t.intersectsLineSegment.origin),(0,n.g)(t.lineEndWorld,t.intersectsLineSegment.origin,t.intersectsLineSegment.vector);return!0}get test(){}};(0,l._)([(0,c.Cb)({constructOnly:!0})],k.prototype,"contrastControlEnabled",void 0),(0,l._)([(0,c.Cb)({constructOnly:!0})],k.prototype,"isDecoration",void 0),(0,l._)([(0,c.Cb)()],k.prototype,"produces",void 0),(0,l._)([(0,c.Cb)()],k.prototype,"consumes",void 0),k=(0,l._)([(0,h.j)("esri.views.3d.webgl-engine.effects.laserlines.LaserLineRenderer")],k);const Z=(0,d.Ue)();class $ extends a.l{constructor(e){super(e),this._angleCutoff=S.d,this._style={},this._heightManifoldTarget=(0,r.Ue)(),this._heightManifoldEnabled=!1,this._intersectsLine=(0,s.Ue)(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProperties(e)}get testData(){}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this._syncAngleCutoff())}get style(){return this._style}set style(e){this._style=e,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(e){null!=e?((0,n.c)(this._heightManifoldTarget,e),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(e){if(null==e)return void(this.intersectsLine=null);const t=this.view.renderCoordsHelper.worldUpAtPosition(e,Y);this.intersectsLine=(0,s.al)(e,t),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(e){null!=e?((0,s.JG)(e,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){this._lineVerticalPlaneSegment=null!=e?(0,s.JG)(e):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(e){this._pointDistanceLine=null!=e?{origin:(0,r.d9)(e.origin),target:e.target?(0,r.d9)(e.target):null}:null,this._syncPointDistance(),this._syncRenderer()}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||null!=this._pointDistanceLine||null!=this._pathVerticalPlaneBuffers)?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){null==this._renderer&&(this._renderer=new k({view:this.view,contrastControlEnabled:!0,isDecoration:this.isDecoration}),this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff())}_syncStyle(){null!=this._renderer&&(this._renderer.setParameters(this._style),null!=this._style.intersectsLineRadius&&(this._renderer.intersectsLineRadius=this._style.intersectsLineRadius))}_syncAngleCutoff(){null!=this._renderer&&this._renderer.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){null!=this._renderer&&(this._renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this._renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){null!=this._renderer&&(this._renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this._renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){null!=this._renderer&&(this._renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){null!=this._renderer&&(this._renderer.pathVerticalPlaneEnabled=null!=this._pathVerticalPlaneBuffers&&this.visible,null!=this._pathVerticalPlaneBuffers&&(this._renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){null!=this._renderer&&(this._renderer.lineVerticalPlaneEnabled=null!=this._lineVerticalPlaneSegment&&this.visible,null!=this._lineVerticalPlaneSegment&&(this._renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){if(null==this._renderer)return;const e=this._pointDistanceLine,t=null!=e;this._renderer.pointDistanceEnabled=t&&null!=e.target&&this.visible,t&&(this._renderer.pointDistanceOrigin=e.origin,null!=e.target&&(this._renderer.pointDistanceTarget=e.target))}_disposeRenderer(){null!=this._renderer&&this.view._stage&&(this._renderer.destroy(),this._renderer=null)}}const Y=(0,r.Ue)()},66730:(e,t,i)=>{i.d(t,{L:()=>P});var n=i(16889),r=i(32035),s=i(12400),a=i(19093),l=i(86361),o=i(5986),c=i(41414),h=i(51378),d=i(50951),u=i(52168),p=i(69691),f=i(78935),g=i(67794),_=i(70619),m=i(4760),v=i(21400);class P extends u._{constructor(e){super(e),this._material=null,this._texture=null,this._geometry=null,this._size=3,this._color=(0,l.al)(1,0,1,1),this._pixelSnappingEnabled=!0,this._primitive="square",this._outlineSize=1,this._outlineColor=(0,l.al)(1,1,1,1),this._elevationInfo=null,this.applyProperties(e)}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get size(){return this._size}set size(e){if(e!==this._size){const t=this._preferredTextureSize;this._size=e,t<this._preferredTextureSize?this.recreate():this._updateSizeAttribute()}}get color(){return this._color}set color(e){(0,a.a)(e,this._color)||((0,a.c)(this._color,e),this._updateMaterial())}get pixelSnappingEnabled(){return this._pixelSnappingEnabled}set pixelSnappingEnabled(e){this._pixelSnappingEnabled!==e&&(this._pixelSnappingEnabled=e,this._updateMaterial())}get primitive(){return this._primitive}set primitive(e){this._primitive!==e&&(this._primitive=e,this.recreate())}get outlineSize(){return this._outlineSize}set outlineSize(e){e!==this._outlineSize&&(this._outlineSize=e,this._updateMaterial())}get outlineColor(){return this._outlineColor}set outlineColor(e){(0,a.a)(e,this._outlineColor)||((0,a.c)(this._outlineColor,e),this._updateMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this.recreateGeometry()}_updateMaterial(){this._material?.setParameters(this._materialParameters)}_updateSizeAttribute(){const e=this.object;if(null==e)return;const t=e.geometries[0];if(null==t)return;const i=t.getMutableAttribute(m.T.SIZE).data,n=this._geometrySize;i[0]=n,i[1]=n,e.geometryVertexAttributeUpdated(e.geometries[0],m.T.SIZE)}get _materialParameters(){return{color:this._color,textureIsSignedDistanceField:!0,sampleSignedDistanceFieldTexelCenter:(0,g.Rg)(this._primitive),distanceFieldBoundingBox:x,occlusionTest:!1,outlineColor:this._outlineColor,outlineSize:this._outlineSize,textureId:this._texture?.id,polygonOffset:!1,shaderPolygonOffset:0,drawInSecondSlot:!0,depthEnabled:!1,pixelSnappingEnabled:this.pixelSnappingEnabled,isDecoration:this.isDecoration}}get _geometrySize(){return this._size/b}createExternalResources(){this._texture=(0,g.cU)(this._primitive,this._preferredTextureSize),this._material=new v.A(this._materialParameters,this.view.state.viewingMode===d.JY.Global);const e=this.view._stage;this._texture.load(e.renderView.renderingContext),e.add(this._texture)}destroyExternalResources(){this._texture&&(this.view._stage.remove(this._texture),this._texture.dispose(),this._texture=null),this._material=null}createGeometries(e){const t=this._createRenderGeometry();null!=t&&e.addGeometry(t)}forEachExternalMaterial(e){this._material&&e(this._material)}get _preferredTextureSize(){return(0,n.uZ)(2*this._geometrySize,16,128)}calculateMapBounds(e){const t=this.object?.geometries[0];if(!t)return!1;const i=t.attributes.get(m.T.POSITION).data;return(0,o.S)(i,this.view.renderCoordsHelper.spatialReference,w,this.view.spatialReference),(0,c.G1)(e,w),!0}_createRenderGeometry(){const{geometry:e,_material:t}=this;if(null==e||null==t)return null;const{renderCoordsHelper:i,elevationProvider:n}=this.view,s=(0,p.w7)(e,n,f.o.fromElevationInfo(this.elevationInfo),i),a=(0,r.i)(h.WM.get(),e.x,e.y,s),l=h.WM.get();(0,o.S)(a,e.spatialReference,l,i.spatialReference);const c=this._geometrySize;return(0,_.dV)(t,null,l,null,null,[c,c],[0,0,0,1])}}const b=g.hy,x=[b/2,b/2,1-b/2,1-b/2],w=(0,s.Ue)()},8084:(e,t,i)=>{i.d(t,{j:()=>c});var n=i(54943),r=i(96415),s=i(49450),a=i(58406),l=i(98634),o=i(19253);function c(e,t){const i=e.fragment;i.include(n.K),e.include(r.GZ),i.uniforms.add(new a.p("globalAlpha",(e=>e.globalAlpha)),new s.J("glowColor",(e=>e.glowColor)),new a.p("glowWidth",((e,t)=>e.glowWidth*t.camera.pixelRatio)),new a.p("glowFalloff",(e=>e.glowFalloff)),new s.J("innerColor",(e=>e.innerColor)),new a.p("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio)),new o.A("depthMap",((e,t)=>t.depth?.attachment)),new o.A("normalMap",(e=>e.normals))),i.code.add(l.H`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),i.code.add(l.H`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),i.code.add(l.H`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),i.code.add(l.H`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float angleCutoffAdjust, out float depthDiscontinuityAlpha) {
float depth = depthFromTexture(depthMap, uv);
if (depth == 1.0) {
return false;
}
float linearDepth = linearizeDepth(depth);
pos = reconstructPosition(gl_FragCoord.xy, linearDepth);
float minStep = 6e-8;
float depthStep = clamp(depth + minStep, 0.0, 1.0);
float linearDepthStep = linearizeDepth(depthStep);
float depthError = abs(linearDepthStep - linearDepth);
if (depthError > 0.2) {
normal = texture(normalMap, uv).xyz * 2.0 - 1.0;
angleCutoffAdjust = 0.004;
} else {
normal = normalize(cross(dFdx(pos), dFdy(pos)));
angleCutoffAdjust = 0.0;
}
float ddepth = fwidth(linearDepth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / linearDepth);
return true;
}`),t.contrastControlEnabled?(i.uniforms.add(new o.A("frameColor",((e,t)=>e.colors)),new a.p("globalAlphaContrastBoost",(e=>null!=e.globalAlphaContrastBoost?e.globalAlphaContrastBoost:1))),i.code.add(l.H`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):i.code.add(l.H`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}}}]);
//# sourceMappingURL=6850.5e5a72da.chunk.js.map