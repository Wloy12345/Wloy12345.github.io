import{S as m,G as h,P as l,W as u,a as w,A as M}from"./GLTFLoader-Caux1mpJ.js";import"./pumpkinSpin-B6F3cZt-.js";const i=new m,g=new h;let r=[];const x=15;for(let e=0;e<x;e++)g.load("pumpkin.glb",function(t){const o=t.scene;o.rotation.x+=.5,o.rotation.y+=.5,o.scale.set(.5,.5,.5),r.push(o),i.add(o)});let n=new l(75,window.innerWidth/window.innerHeight,.1,1e3);const d=document.querySelector("#pumpkin"),s=d.parentElement,a=new u({canvas:d,alpha:!0});a.setClearColor(16777215,0);function p(){const e=s.offsetWidth,t=s.offsetHeight;a.setSize(e,t),n.aspect=e/t,n.updateProjectionMatrix()}p();window.addEventListener("resize",p);n.position.set(0,-.01,3);n.lookAt(i.position);a.render(i,n);const f=new w(16777215,150);f.position.set(10,10,10);const L=new M(16777215,.8);i.add(f,L);function c(){requestAnimationFrame(c);for(let e=0;e<r.length;e++){const t=r[e];t.rotation.y+=.025,t.rotation.x+=.025,t.position.y-=Math.random()*.05,t.position.y<-15&&(t.position.x=Math.random()*10-5,t.position.y=Math.random()*5+15,t.position.z=Math.random()*30-25,t.rotation.x=Math.random()*2*Math.PI)}a.render(i,n)}c();
