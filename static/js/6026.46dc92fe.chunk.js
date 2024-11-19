"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[6026],{18300:(e,t,i)=>{i.d(t,{L:()=>P,b:()=>f});var n=i(29134),s=i(7025),a=i(13611),r=i(6644),l=i(8084),o=i(82999),c=i(58406),h=i(98634),d=i(8654),p=i(64201),u=i(4760);function f(e){const t=new p.kG;t.include(l.j,e);const{vertex:i,fragment:s}=t;return i.uniforms.add(new d.g("modelView",((e,t)=>{let{camera:i}=t;return(0,n.Iu)(_,i.viewMatrix,e.origin)})),new d.g("proj",((e,t)=>{let{camera:i}=t;return i.projectionMatrix})),new c.p("glowWidth",((e,t)=>{let{camera:i}=t;return e.glowWidth*i.pixelRatio})),new o.A("pixelToNDC",((e,t)=>{let{camera:i}=t;return(0,a.t8)(g,2/i.fullViewport[2],2/i.fullViewport[3])}))),t.attributes.add(u.T.START,"vec3"),t.attributes.add(u.T.END,"vec3"),t.attributes.add(u.T.UP,"vec3"),t.attributes.add(u.T.EXTRUDE,"vec2"),t.varyings.add("uv","vec2"),t.varyings.add("vViewStart","vec3"),t.varyings.add("vViewEnd","vec3"),t.varyings.add("vViewPlane","vec4"),i.code.add(h.H`void main() {
vec3 pos = mix(start, end, extrude.x);
vec4 viewPos = modelView * vec4(pos, 1);
vec4 projPos = proj * viewPos;
vec2 ndcPos = projPos.xy / projPos.w;
vec3 viewUp = (modelView * vec4(extrude.y * up, 0)).xyz;
vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);
vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
ndcPos += length(lxy) * projExtrudeDir;
vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
vec3 viewPlaneNormal = (modelView * vec4(worldPlaneNormal, 0)).xyz;
vViewStart = (modelView * vec4(start, 1)).xyz;
vViewEnd = (modelView * vec4(end, 1)).xyz;
vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));
float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
ndcPos.x += xPaddingPixels * pixelToNDC.x;
uv = ndcPos * 0.5 + 0.5;
gl_Position = vec4(ndcPos, 0, 1);
}`),s.uniforms.add(new c.p("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),s.code.add(h.H`float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
vec3 origin = mix(start, end, 0.5);
vec3 basis = end - origin;
vec3 posAtOrigin = pos - origin;
float x = dot(normalize(basis), posAtOrigin);
float y = dot(plane.xyz, posAtOrigin);
float dx = max(abs(x) - length(basis), 0.0);
float dy = y;
float dist = length(vec2(dx, dy));
float width = fwidth(y);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}
void main() {
vec3 dEndStart = vViewEnd - vViewStart;
if (dot(dEndStart, dEndStart) < 1e-5) {
discard;
}
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
discard;
}
float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);
vec4 color = laserlineProfile(distance);
float alpha = (1.0 - smoothstep(0.995 - angleCutoffAdjust, 0.999 - angleCutoffAdjust, abs(dot(normal, vViewPlane.xyz))));
fragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
}`),t}const g=(0,r.Ue)(),_=(0,s.Ue)(),P=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}))},83671:(e,t,i)=>{i.d(t,{L:()=>T,b:()=>D,d:()=>w});var n=i(16889),s=i(13611),a=i(6644),r=i(32035),l=i(12400),o=i(19093),c=i(86361),h=i(85981),d=i(55652),p=i(23470),u=i(8084),f=i(24967),g=i(82999),_=i(49450),P=i(95276),m=i(58406),b=i(98634),v=i(64201);const w=(0,n.Vl)(6);function D(e){const t=new v.kG;t.include(f.k),t.include(u.j,e);const i=t.fragment;if(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)if(i.uniforms.add(new m.p("maxPixelDistance",((t,i)=>e.heightManifoldEnabled?2*i.camera.computeScreenPixelSizeAt(t.heightManifoldTarget):2*i.camera.computeScreenPixelSizeAt(t.lineVerticalPlaneSegment.origin)))),i.code.add(b.H`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.spherical){const e=(e,t,i)=>(0,r.h)(e,t.heightManifoldTarget,i.camera.viewMatrix),t=(e,t)=>(0,r.h)(e,[0,0,0],t.camera.viewMatrix);i.uniforms.add(new P.N("heightManifoldOrigin",((i,n)=>(e(L,i,n),t(S,n),(0,r.f)(S,S,L),(0,r.n)(y,S),y[3]=(0,r.l)(S),y))),new _.J("globalOrigin",((e,i)=>t(L,i))),new m.p("cosSphericalAngleThreshold",((e,t)=>1-Math.max(2,(0,r.p)(t.camera.eye,e.heightManifoldTarget)*t.camera.perRenderPixelRatio)/(0,r.l)(e.heightManifoldTarget)))),i.code.add(b.H`float globeDistancePixels(float posInGlobalOriginLength) {
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
}`)}else i.code.add(b.H`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(e.pointDistanceEnabled&&(i.uniforms.add(new m.p("maxPixelDistance",((e,t)=>2*t.camera.computeScreenPixelSizeAt(e.pointDistanceTarget)))),i.code.add(b.H`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),e.intersectsLineEnabled&&(i.uniforms.add(new m.p("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),i.code.add(b.H`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&i.code.add(b.H`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),i.code.add(b.H`void main() {
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`),e.heightManifoldEnabled){i.uniforms.add(new g.A("angleCutoff",(e=>x(e))),new P.N("heightPlane",((e,t)=>V(e.heightManifoldTarget,e.renderCoordsHelper.worldUpAtPosition(e.heightManifoldTarget,L),t.camera.viewMatrix))));const t=e.spherical?b.H`normalize(globalOrigin - pos)`:b.H`heightPlane.xyz`;i.code.add(b.H`
    {
      vec2 angleCutoffAdjusted = angleCutoff - angleCutoffAdjust;

      // Fade out laserlines on flat surfaces
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoffAdjusted.x, angleCutoffAdjusted.y, abs(dot(normal, ${t})));

      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);
    }
    `)}return e.pointDistanceEnabled&&(i.uniforms.add(new g.A("angleCutoff",(e=>x(e))),new P.N("pointDistanceSphere",((e,t)=>function(e,t){return(0,r.h)((0,p.g)(R),e.pointDistanceOrigin,t.camera.viewMatrix),R[3]=(0,r.p)(e.pointDistanceOrigin,e.pointDistanceTarget),R}(e,t)))),i.code.add(b.H`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`)),e.lineVerticalPlaneEnabled&&(i.uniforms.add(new g.A("angleCutoff",(e=>x(e))),new P.N("lineVerticalPlane",((e,t)=>function(e,t){const i=(0,h.KU)(e.lineVerticalPlaneSegment,.5,L),n=e.renderCoordsHelper.worldUpAtPosition(i,C),s=(0,r.n)(S,e.lineVerticalPlaneSegment.vector),a=(0,r.b)(L,n,s);return(0,r.n)(a,a),V(e.lineVerticalPlaneSegment.origin,a,t.camera.viewMatrix)}(e,t))),new _.J("lineVerticalStart",((e,t)=>function(e,t){const i=(0,r.c)(L,e.lineVerticalPlaneSegment.origin);return e.renderCoordsHelper.setAltitude(i,0),(0,r.h)(i,i,t.camera.viewMatrix)}(e,t))),new _.J("lineVerticalEnd",((e,t)=>function(e,t){const i=(0,r.g)(L,e.lineVerticalPlaneSegment.origin,e.lineVerticalPlaneSegment.vector);return e.renderCoordsHelper.setAltitude(i,0),(0,r.h)(i,i,t.camera.viewMatrix)}(e,t)))),i.code.add(b.H`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`)),e.intersectsLineEnabled&&(i.uniforms.add(new g.A("angleCutoff",(e=>x(e))),new _.J("intersectsLineStart",((e,t)=>(0,r.h)(L,e.lineStartWorld,t.camera.viewMatrix))),new _.J("intersectsLineEnd",((e,t)=>(0,r.h)(L,e.lineEndWorld,t.camera.viewMatrix))),new _.J("intersectsLineDirection",((e,t)=>((0,r.c)(y,e.intersectsLineSegment.vector),y[3]=0,(0,r.n)(L,(0,o.t)(y,y,t.camera.viewMatrix))))),new m.p("intersectsLineRadius",(e=>e.intersectsLineRadius))),i.code.add(b.H`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`)),i.code.add(b.H`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`),t}function x(e){return(0,s.t8)(E,Math.cos(e.angleCutoff),Math.cos(Math.max(0,e.angleCutoff-(0,n.Vl)(2))))}function V(e,t,i){return(0,r.h)(A,e,i),(0,r.c)(y,t),y[3]=0,(0,o.t)(y,y,i),(0,d.Yq)(A,y,M)}const E=(0,a.Ue)(),L=(0,l.Ue)(),y=(0,c.Ue)(),C=(0,l.Ue)(),S=(0,l.Ue)(),A=(0,l.Ue)(),M=(0,d.Ue)(),R=(0,p.c)(),T=Object.freeze(Object.defineProperty({__proto__:null,build:D,defaultAngleCutoff:w},Symbol.toStringTag,{value:"Module"}))},96026:(e,t,i)=>{i.d(t,{W:()=>K});i(93169);var n=i(32035),s=i(12400),a=i(85981),r=i(86244),l=i(27366),o=i(92026),c=i(49861),h=(i(32718),i(84936),i(69912)),d=i(70444),p=i(95773),u=i(40885),f=i(50951),g=i(70374),_=i(86372),P=i(50256),m=i(55158),b=i(82144),v=i(31132),w=i(27627),D=i(4760),x=i(18300),V=i(8548),E=i(36207);class L extends v.A{initializeProgram(e){return new w.$(e.rctx,L.shader.get().build(this.configuration),y)}initializePipeline(){return(0,E.sm)({blending:(0,E.if)(V.zi.ONE,V.zi.ONE_MINUS_SRC_ALPHA),colorWrite:E.BK})}}L.shader=new b.J(x.L,(()=>i.e(7515).then(i.bind(i,97515))));const y=new Map([[D.T.START,0],[D.T.END,1],[D.T.UP,2],[D.T.EXTRUDE,3]]);var C=i(80658),S=i(44070);class A{constructor(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=(0,s.Ue)(),this._dirty=!1,this._count=0,this._vao=null}set vertices(e){const t=(0,_.bg)(3*e.length);let i=0;for(const n of e)t[i++]=n[0],t[i++]=n[1],t[i++]=n[2];this.buffers=[t]}set buffers(e){if(this._buffers=e,this._buffers.length>0){const e=this._buffers[0],t=3*Math.floor(e.length/3/2);(0,n.s)(this._origin,e[t],e[t+1],e[t+2])}else(0,n.s)(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(e){const t=this._ensureVAO(e);null!=t&&(e.bindVAO(t),e.drawArrays(V.MX.TRIANGLES,0,this._count))}dispose(){null!=this._vao&&this._vao.dispose()}_ensureVAO(e){return null==this._buffers?null:(null==this._vao&&(this._vao=this._createVAO(e,this._buffers)),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(e,t){const i=this._createDataBuffer(t);return this._dirty=!1,new C.U(e,y,{data:(0,P.K)(O)},{data:S.f.createVertex(e,V.l1.STATIC_DRAW,i)})}_ensureVertexData(e,t){if(!this._dirty)return;const i=this._createDataBuffer(t);e.vertexBuffers.data?.setData(i),this._dirty=!1}_createDataBuffer(e){const t=e.reduce(((e,t)=>e+M(t)),0);this._count=t;const i=O.createBuffer(t),s=this._origin;let a=0,r=0;for(const l of e){for(let e=0;e<l.length;e+=3){const t=(0,n.s)(T,l[e],l[e+1],l[e+2]);0===e?r=this._renderCoordsHelper.getAltitude(t):this._renderCoordsHelper.setAltitude(t,r);const o=this._renderCoordsHelper.worldUpAtPosition(t,R),c=a+2*e,h=(0,n.f)(T,t,s);if(e<l.length-3){i.up.setVec(c,o),i.up.setVec(c+3,o),i.up.setVec(c+5,o);for(let e=0;e<6;e++)i.start.setVec(c+e,h);i.extrude.setValues(c,0,-1),i.extrude.setValues(c+1,1,-1),i.extrude.setValues(c+2,1,1),i.extrude.setValues(c+3,0,-1),i.extrude.setValues(c+4,1,1),i.extrude.setValues(c+5,0,1)}if(e>0){i.up.setVec(c-2,o),i.up.setVec(c-4,o),i.up.setVec(c-5,o);for(let e=-6;e<0;e++)i.end.setVec(c+e,h)}}a+=M(l)}return i.buffer}}function M(e){return 2*(e.length/3-1)*3}const R=(0,s.Ue)(),T=(0,s.Ue)(),O=(0,m.U$)().vec3f(D.T.START).vec3f(D.T.END).vec3f(D.T.UP).vec2f(D.T.EXTRUDE);var q=i(33559);class U extends q.m{constructor(){super(...arguments),this.contrastControlEnabled=!1}}(0,l._)([(0,q.o)()],U.prototype,"contrastControlEnabled",void 0);var H=i(16889),I=i(98634),z=i(7566),j=i(83671);class N extends I.K{constructor(){super(...arguments),this.innerColor=(0,s.al)(1,1,1),this.innerWidth=1,this.glowColor=(0,s.al)(1,.5,0),this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=.75,this.globalAlphaContrastBoost=2,this.angleCutoff=(0,H.Vl)(6),this.pointDistanceOrigin=(0,s.Ue)(),this.pointDistanceTarget=(0,s.Ue)(),this.lineVerticalPlaneSegment=(0,a.Ue)(),this.intersectsLineSegment=(0,a.Ue)(),this.intersectsLineRadius=3,this.heightManifoldTarget=(0,s.Ue)(),this.lineStartWorld=(0,s.Ue)(),this.lineEndWorld=(0,s.Ue)()}}class W extends v.A{initializeProgram(e){return new w.$(e.rctx,W.shader.get().build(this.configuration),z.i)}initializePipeline(){return(0,E.sm)({blending:(0,E.if)(V.zi.ONE,V.zi.ONE_MINUS_SRC_ALPHA),colorWrite:E.BK})}}W.shader=new b.J(j.L,(()=>i.e(5693).then(i.bind(i,45693))));class B extends U{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1,this.spherical=!1}}(0,l._)([(0,q.o)()],B.prototype,"heightManifoldEnabled",void 0),(0,l._)([(0,q.o)()],B.prototype,"pointDistanceEnabled",void 0),(0,l._)([(0,q.o)()],B.prototype,"lineVerticalPlaneEnabled",void 0),(0,l._)([(0,q.o)()],B.prototype,"intersectsLineEnabled",void 0),(0,l._)([(0,q.o)()],B.prototype,"spherical",void 0);var G=i(93822),J=i(22909);let F=class extends g.He{constructor(e){super(e),this._technique=null,this._heightManifoldEnabled=!1,this._pointDistanceEnabled=!1,this._lineVerticalPlaneEnabled=!1,this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._pathVerticalPlaneEnabled=!1,this._pathVerticalPlaneData=null,this._pathTechnique=null,this._passParameters=new N,this.produces=new Map([[G.r.LASERLINES,()=>!this.contrastControlEnabled],[G.r.LASERLINES_CONTRAST_CONTROL,()=>this.contrastControlEnabled]])}initialize(){this._passParameters.renderCoordsHelper=this.renderCoordsHelper}consumes(){return g.of}get isDecoration(){return this._isDecoration}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(e){this._heightManifoldEnabled!==e&&(this._heightManifoldEnabled=e,this._requestRender())}get heightManifoldTarget(){return this._passParameters.heightManifoldTarget}set heightManifoldTarget(e){(0,n.c)(this._passParameters.heightManifoldTarget,e),this._requestRender()}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(e){e!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=e,this._requestRender())}get pointDistanceTarget(){return this._passParameters.pointDistanceTarget}set pointDistanceTarget(e){(0,n.c)(this._passParameters.pointDistanceTarget,e),this._requestRender()}get pointDistanceOrigin(){return this._passParameters.pointDistanceOrigin}set pointDistanceOrigin(e){(0,n.c)(this._passParameters.pointDistanceOrigin,e),this._requestRender()}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(e){e!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=e,this._requestRender())}get lineVerticalPlaneSegment(){return this._passParameters.lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){(0,a.JG)(e,this._passParameters.lineVerticalPlaneSegment),this._requestRender()}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(e){e!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=e,this._requestRender())}get intersectsLineSegment(){return this._passParameters.intersectsLineSegment}set intersectsLineSegment(e){(0,a.JG)(e,this._passParameters.intersectsLineSegment),this._requestRender()}get intersectsLineRadius(){return this._passParameters.intersectsLineRadius}set intersectsLineRadius(e){e!==this._passParameters.intersectsLineRadius&&(this._passParameters.intersectsLineRadius=e,this._requestRender())}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){e!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=e,this._requestRender())}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(e){e!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=e,null!=this._pathVerticalPlaneData&&this._requestRender())}set pathVerticalPlaneVertices(e){null==this._pathVerticalPlaneData&&(this._pathVerticalPlaneData=new A(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.vertices=e,this.pathVerticalPlaneEnabled&&this._requestRender()}set pathVerticalPlaneBuffers(e){null==this._pathVerticalPlaneData&&(this._pathVerticalPlaneData=new A(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.buffers=e,this.pathVerticalPlaneEnabled&&this._requestRender()}setParameters(e){(0,J.LO)(this._passParameters,e)&&this._requestRender()}initializeRenderContext(e){this._context=e,this._techniques=e.techniques,this._techniqueConfig=new B;const t=new U;t.contrastControlEnabled=this.contrastControlEnabled,this._pathTechnique=this._techniques.acquire(L,t)}uninitializeRenderContext(){this._technique=(0,o.RY)(this._technique),this._pathVerticalPlaneData=(0,o.M2)(this._pathVerticalPlaneData),this._pathTechnique=(0,o.RY)(this._pathTechnique)}prepareTechnique(){return this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled?(this._techniqueConfig.heightManifoldEnabled=this.heightManifoldEnabled,this._techniqueConfig.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._techniqueConfig.pointDistanceEnabled=this.pointDistanceEnabled,this._techniqueConfig.intersectsLineEnabled=this.intersectsLineEnabled,this._techniqueConfig.contrastControlEnabled=this.contrastControlEnabled,this._techniqueConfig.spherical=this.viewingMode===f.JY.Global,this._technique=this._techniques.releaseAndAcquire(W,this._techniqueConfig,this._technique),this._technique):this._pathTechnique}renderNode(e,t,i){const n=i?.get("normals")?.getTexture();n&&(this._passParameters.normals=n,(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(e,t),this.pathVerticalPlaneEnabled&&this._renderPath(e))}_renderUnified(e,t){const i=e.rctx;this._updatePassParameters(e),i.bindTechnique(t,e.bindParameters,this._passParameters),i.screen.draw()}_renderPath(e){if(null==this._pathVerticalPlaneData||null==this._pathTechnique)return;const t=e.rctx,i=this._pathTechnique;t.bindTechnique(i,e.bindParameters,{...this._passParameters,origin:this._pathVerticalPlaneData.origin}),this._pathVerticalPlaneData.draw(e.rctx)}_updatePassParameters(e){if(!this._intersectsLineEnabled)return;const t=e.bindParameters.camera;if(this._intersectsLineInfinite){if((0,d.iL)((0,u.re)(this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector),k),k.c0=-Number.MAX_VALUE,!(0,p.zq)(t.frustum,k))return;(0,d.Ws)(k,this._passParameters.lineStartWorld),(0,d.S$)(k,this._passParameters.lineEndWorld)}else(0,n.c)(this._passParameters.lineStartWorld,this._passParameters.intersectsLineSegment.origin),(0,n.g)(this._passParameters.lineEndWorld,this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector)}_requestRender(){this._context&&this._context.requestRender()}get test(){}};(0,l._)([(0,c.Cb)({constructOnly:!0})],F.prototype,"viewingMode",void 0),(0,l._)([(0,c.Cb)({constructOnly:!0})],F.prototype,"contrastControlEnabled",void 0),(0,l._)([(0,c.Cb)({constructOnly:!0})],F.prototype,"_isDecoration",void 0),(0,l._)([(0,c.Cb)({constructOnly:!0})],F.prototype,"renderCoordsHelper",void 0),F=(0,l._)([(0,h.j)("esri.views.3d.webgl-engine.effects.laserlines.LaserLineRenderer")],F);const k=(0,d.Ue)();class K extends r.l{constructor(e){super(e),this._angleCutoff=j.d,this._style={},this._heightManifoldTarget=(0,s.Ue)(),this._heightManifoldEnabled=!1,this._intersectsLine=(0,a.Ue)(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProperties(e)}get testData(){}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this._syncAngleCutoff())}get style(){return this._style}set style(e){this._style=e,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(e){null!=e?((0,n.c)(this._heightManifoldTarget,e),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(e){if(null==e)return void(this.intersectsLine=null);const t=this.view.renderCoordsHelper.worldUpAtPosition(e,X);this.intersectsLine=(0,a.al)(e,t),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(e){null!=e?((0,a.JG)(e,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){this._lineVerticalPlaneSegment=null!=e?(0,a.JG)(e):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(e){this._pointDistanceLine=null!=e?{origin:(0,s.d9)(e.origin),target:e.target?(0,s.d9)(e.target):null}:null,this._syncPointDistance(),this._syncRenderer()}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||null!=this._pointDistanceLine||null!=this._pathVerticalPlaneBuffers)?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){null==this._renderer&&(this._renderer=new F({renderCoordsHelper:this.view.renderCoordsHelper,contrastControlEnabled:!0,_isDecoration:this.isDecoration,viewingMode:this.view.state.viewingMode}),this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff(),this.view._stage&&this.view._stage.addRenderPlugin(this._renderer))}_syncStyle(){null!=this._renderer&&(this._renderer.setParameters(this._style),null!=this._style.intersectsLineRadius&&(this._renderer.intersectsLineRadius=this._style.intersectsLineRadius))}_syncAngleCutoff(){null!=this._renderer&&this._renderer.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){null!=this._renderer&&(this._renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this._renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){null!=this._renderer&&(this._renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this._renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){null!=this._renderer&&(this._renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){null!=this._renderer&&(this._renderer.pathVerticalPlaneEnabled=null!=this._pathVerticalPlaneBuffers&&this.visible,null!=this._pathVerticalPlaneBuffers&&(this._renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){null!=this._renderer&&(this._renderer.lineVerticalPlaneEnabled=null!=this._lineVerticalPlaneSegment&&this.visible,null!=this._lineVerticalPlaneSegment&&(this._renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){if(null==this._renderer)return;const e=this._pointDistanceLine,t=null!=e;this._renderer.pointDistanceEnabled=t&&null!=e.target&&this.visible,t&&(this._renderer.pointDistanceOrigin=e.origin,null!=e.target&&(this._renderer.pointDistanceTarget=e.target))}_disposeRenderer(){null!=this._renderer&&this.view._stage&&(this.view._stage.removeRenderPlugin(this._renderer),this._renderer=null)}}const X=(0,s.Ue)()},8084:(e,t,i)=>{i.d(t,{j:()=>c});var n=i(54943),s=i(96415),a=i(49450),r=i(58406),l=i(98634),o=i(19253);function c(e,t){const i=e.fragment;i.include(n.K),e.include(s.GZ),i.uniforms.add(new r.p("globalAlpha",(e=>e.globalAlpha)),new a.J("glowColor",(e=>e.glowColor)),new r.p("glowWidth",((e,t)=>e.glowWidth*t.camera.pixelRatio)),new r.p("glowFalloff",(e=>e.glowFalloff)),new a.J("innerColor",(e=>e.innerColor)),new r.p("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio)),new o.A("depthMap",((e,t)=>t.depth?.attachment)),new o.A("normalMap",(e=>e.normals)),new o.A("frameColor",((e,t)=>t.mainColor))),i.code.add(l.H`vec4 blendPremultiplied(vec4 source, vec4 dest) {
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
}`),t.contrastControlEnabled?(i.uniforms.add(new r.p("globalAlphaContrastBoost",(e=>null!=e.globalAlphaContrastBoost?e.globalAlphaContrastBoost:1))),i.code.add(l.H`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):i.code.add(l.H`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}}}]);
//# sourceMappingURL=6026.46dc92fe.chunk.js.map