import{S as h,G as l,P as p,W as w,a as u,A as M}from"./GLTFLoader-etmHzyVl.js";import"./tomatoSpin-Dy_7m64S.js";const i=new h,g=new l;let r=[];const x=15;for(let o=0;o<x;o++)g.load("tomato.glb",function(t){const n=t.scene;n.rotation.x+=.5,n.rotation.y+=.5,n.scale.set(.5,.5,.5),r.push(n),i.add(n)});let e=new p(75,window.innerWidth/window.innerHeight,.1,1e3);const d=document.querySelector("#tomato"),s=d.parentElement,a=new w({canvas:d,alpha:!0});a.setClearColor(16777215,0);function f(){const o=s.offsetWidth,t=s.offsetHeight;a.setSize(o,t),e.aspect=o/t,e.updateProjectionMatrix()}f();window.addEventListener("resize",f);e.position.set(0,-.01,3);e.lookAt(i.position);a.render(i,e);const c=new u(16777215,150);c.position.set(10,10,10);const L=new M(16777215,.8);i.add(c,L);function m(){requestAnimationFrame(m);for(let o=0;o<r.length;o++){const t=r[o];t.rotation.y+=.025,t.rotation.x+=.025,t.position.y-=Math.random()*.05,t.position.y<-15&&(t.position.x=Math.random()*10-5,t.position.y=Math.random()*5+15,t.position.z=Math.random()*30-25,t.rotation.x=Math.random()*2*Math.PI)}a.render(i,e)}m();
