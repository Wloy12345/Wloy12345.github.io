import{S as p,G as l,P as m,W as u,D as w}from"./GLTFLoader-CoyjRiy9.js";const t=new p,h=new l;let n;h.load("pumpkin.glb",function(i){n=i.scene,n.rotation.x+=.5,n.rotation.y+=.5,t.add(n)});let e=new m(75,window.innerWidth/window.innerHeight,.1,1e3);const S=document.querySelectorAll("#pumpkinSpin");S.forEach(i=>{const r=i.parentElement,o=new u({canvas:document.querySelector("#pumpkinSpin"),alpha:!0});o.setClearColor(16777215,0),a(),window.addEventListener("resize",a);function a(){const d=r.offsetWidth*.9,f=r.offsetHeight*.9;o.setSize(d,f),e.aspect=d/f,e.updateProjectionMatrix()}e.position.set(0,0,1.5),e.lookAt(t.position),o.render(t,e);const s=new w(4293974776,3.5);s.position.set(2,3.6,2.6),t.add(s);function c(){requestAnimationFrame(c),n&&(n.rotation.y+=.003),o.render(t,e)}c()});
