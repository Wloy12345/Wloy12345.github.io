import{S as u,G as g,P as x,W as L,a as M,A as y}from"./GLTFLoader-BY_gAPeX.js";const s=new u,b=new g;let d=[];const C=5;for(let e=0;e<C;e++)b.load("tomato.glb",function(t){const o=t.scene;o.rotation.x+=.5,o.rotation.y+=.5,d.push(o),s.add(o)});let a=new x(75,window.innerWidth/window.innerHeight,.1,1e3);const z=document.querySelector("#tomato"),w=z.parentElement,f=new L({canvas:z,alpha:!0});f.setClearColor(16777215,0);function S(){const e=w.offsetWidth,t=w.offsetHeight;f.setSize(e,t),a.aspect=e/t,a.updateProjectionMatrix()}S();window.addEventListener("resize",S);a.position.set(0,-.01,3);a.lookAt(s.position);f.render(s,a);const v=new M(16777215,150);v.position.set(10,10,10);const W=new y(16777215,.8);s.add(v,W);function P(){requestAnimationFrame(P);for(let e=0;e<d.length;e++){const t=d[e];t.rotation.y+=.025,t.rotation.x+=.025,t.position.y-=.035,t.position.y<-10&&(t.position.x=Math.random()*10-5,t.position.y=Math.random()*5+5,t.position.z=Math.random()*10-5,t.rotation.x=Math.random()*2*Math.PI)}f.render(s,a)}P();const r=new u,E=new g;let i;E.load("tomato.glb",function(e){i=e.scene,i.rotation.x+=.5,i.rotation.y+=.5,r.add(i)});let n=new x(75,window.innerWidth/window.innerHeight,.1,1e3);const q=document.querySelectorAll("#tomatoSpin");q.forEach(e=>{const t=e.parentElement,o=new L({canvas:e,alpha:!0});o.setClearColor(16777215,0),c(),window.addEventListener("resize",c);function c(){const l=t.offsetWidth*.9,p=t.offsetHeight*.9;o.setSize(l,p),n.aspect=l/p,n.updateProjectionMatrix()}n.position.set(0,0,1.5),n.lookAt(r.position),o.render(r,n);const m=new M(16777215,150);m.position.set(10,10,10);const A=new y(16777215,.8);r.add(m,A);function h(){requestAnimationFrame(h),i&&(i.rotation.y+=.003),o.render(r,n)}h()});
