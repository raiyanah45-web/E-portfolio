(()=>{
const D=Object.assign({}, window.PORTFOLIO_DATA||{}, JSON.parse(localStorage.getItem('raiyanPortfolioDraft')||'{}'));
const setText=(sel,v)=>document.querySelectorAll(sel).forEach(e=>{if(v!=null)e.textContent=v;});
Object.keys(D).forEach(k=>document.querySelectorAll('[data-field="'+k+'"]').forEach(e=>e.textContent=D[k]));
const portrait=document.querySelector('.portrait-frame img');if(portrait&&D.photo)portrait.src=D.photo;
const hh=document.querySelector('.hero h1');if(hh&&D.fullName){const parts=D.fullName.trim().split(/\s+/);const last=parts.pop()||'';hh.replaceChildren(document.createTextNode(parts.join(' ')+' '));const sp=document.createElement('span');sp.textContent=last+'.';hh.append(sp);}
setText('.brand', D.fullName||'Raiyan Ahmed');
const prTitle=document.querySelector('.project-content h3');if(prTitle)prTitle.textContent=D.projectTitle;
const title=document.querySelector('main.interior h1');if(title)title.textContent=D.projectTitle;
const c=document.querySelector('#contact .contact-list a:first-child strong');if(c)c.textContent=D.email;
const em=document.querySelectorAll('a[href^="mailto:"]');em.forEach(a=>{a.href='mailto:'+D.email;if(a.textContent.includes('@'))a.textContent=D.email;});
const linkPairs=[['github','github.com'],['linkedin','linkedin.com']];linkPairs.forEach(([key,host])=>document.querySelectorAll('a[href*="'+host+'"]').forEach(a=>{a.href=D[key];}));
const cg=document.querySelector('.stats-grid .stat strong');if(cg&&D.cgpa)cg.innerHTML=D.cgpa+'<span>/4.00</span>';
const video=document.getElementById('introVideo'),ph=document.getElementById('videoPlaceholder');
if(video&&D.video){video.src=D.video;video.hidden=false;if(ph)ph.hidden=true;video.load();}
const gallery=document.querySelectorAll('.gallery-grid img');gallery.forEach((img,i)=>{if(D['gallery'+(i+1)])img.src=D['gallery'+(i+1)];});
})();
