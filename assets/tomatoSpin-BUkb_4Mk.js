import{S as h,G as l,P as w,W as p,a as g,A as u}from"./GLTFLoader-C1BiMlWM.js";const n=new h,L=new l;let t;L.load("tomato.glb",function(o){t=o.scene,t.rotation.x+=.3,t.rotation.z+=.2,n.add(t)});let e=new w(75,window.innerWidth/window.innerHeight,.1,1e3);const F=document.querySelectorAll("#tomatoSpin");F.forEach(o=>{const a=o.parentElement,i=new p({canvas:o,alpha:!0});i.setClearColor(16777215,0),r(),window.addEventListener("resize",r);function r(){const d=a.offsetWidth*.9,f=a.offsetHeight*.9;i.setSize(d,f),e.aspect=d/f,e.updateProjectionMatrix()}e.position.set(0,0,1.5),e.lookAt(n.position),i.render(n,e);const s=new g(16763027,25);s.position.set(1.1,3,2.3);const m=new u(16738665,.3);n.add(s,m);function c(){requestAnimationFrame(c),t&&(t.rotation.y+=.003),i.render(n,e)}c()});
