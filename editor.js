(()=>{
'use strict';
const base=window.PORTFOLIO_DATA||{};
let data=Object.assign({},base, JSON.parse(localStorage.getItem('raiyanPortfolioDraft')||'{}'));
const $=id=>document.getElementById(id);
const fieldNames={fullName:'Full name',email:'Email',github:'GitHub profile URL',linkedin:'LinkedIn profile URL',cgpa:'CGPA',semester:'Current semester',projectTitle:'Featured project title',heroIntro:'Homepage introduction',aboutIntro:'About me',careerGoal:'Career goal',projectSummary:'Project summary',projectRole:'Project contribution',contactIntro:'Contact description',achievementText:'Certification / achievements',resumeSummary:'Resume professional summary',case_project_overview:'Project overview',case_problem_and_goal:'Project problem and goal',case_architecture_and_technologies:'Architecture and technology',case_my_role_and_responsibilities:'My specific role',case_development_and_decisions:'Project decisions and challenges',case_testing_and_results:'Testing and results'};
const educationKeys=['hscInstitution','hscQualification','hscGroup','hscYear','hscGpa','sscInstitution','sscQualification','sscGroup','sscYear','sscGpa'];
const resumeKeys=['coursework','skillsProgramming','skillsFramework','skillsDatabases','skillsTools','otherProjectTitle','otherProjectDescription','certification','languages'];
const shortKeys=['fullName','email','github','linkedin','cgpa','semester','projectTitle','hscInstitution','hscQualification','hscGroup','hscYear','hscGpa','sscInstitution','sscQualification','sscGroup','sscYear','sscGpa','skillsProgramming','skillsFramework','skillsDatabases','skillsTools','otherProjectTitle','certification','languages'];
Object.assign(fieldNames,{
 hscInstitution:'HSC institution',hscQualification:'HSC certificate name',hscGroup:'HSC group',hscYear:'HSC passing year',hscGpa:'HSC GPA',
 sscInstitution:'SSC institution',sscQualification:'SSC certificate name',sscGroup:'SSC group',sscYear:'SSC passing year',sscGpa:'SSC GPA',
 coursework:'Relevant coursework',skillsProgramming:'Programming languages',skillsFramework:'Frameworks',skillsDatabases:'Databases',skillsTools:'Developer tools',otherProjectTitle:'Second project title',otherProjectDescription:'Second project description',certification:'Certification',languages:'Languages'
});
const makeField=(key,container)=>{
 const label=document.createElement('label');label.className='editor-field'+(shortKeys.includes(key)?'':' wide');label.textContent=fieldNames[key];
 const el=document.createElement(shortKeys.includes(key)?'input':'textarea');el.value=data[key]||'';el.dataset.key=key;el.addEventListener('input',()=>{data[key]=el.value;});label.appendChild(el);container.appendChild(label);
};
Object.keys(fieldNames).forEach(k=>{
 const area=educationKeys.includes(k)?'educationFields':resumeKeys.includes(k)?'resumeFields':shortKeys.includes(k)?'personalFields':'contentFields';
 makeField(k,$(area));
});
$('photoPreview').src=data.photo||base.photo;
const fileAsData=async(file,maxDimension=1400)=>{
 if(!file || !file.type.startsWith('image/'))throw new Error('Select a valid image.');
 const uri=await new Promise((resolve,reject)=>{const reader=new FileReader;reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(file);});
 const im=new Image;await new Promise((resolve,reject)=>{im.onload=resolve;im.onerror=reject;im.src=uri});
 const size=Math.min(1,maxDimension/Math.max(im.width,im.height));const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(im.width*size));canvas.height=Math.max(1,Math.round(im.height*size));canvas.getContext('2d').drawImage(im,0,0,canvas.width,canvas.height);return canvas.toDataURL('image/jpeg',0.83);
};
$('photoInput').addEventListener('change',async e=>{try {data.photo=await fileAsData(e.target.files[0]);$('photoPreview').src=data.photo;status('Photo updated — export to publish.');}catch(err){status(err.message);}});
for(let i=1;i<=5;i++){
 const src=data['gallery'+i]||base['gallery'+i];const wrap=document.createElement('div');const img=document.createElement('img');img.src=src;img.alt='Project screenshot '+i;wrap.append(img);$('imagePreviewGrid').append(wrap);
 const label=document.createElement('label');label.className='editor-field';label.textContent='Screenshot '+i;const inp=document.createElement('input');inp.type='file';inp.accept='image/*';inp.addEventListener('change',async e=>{try{data['gallery'+i]=await fileAsData(e.target.files[0]);img.src=data['gallery'+i];status('Screenshot '+i+' updated.');}catch(err){status(err.message);}});label.append(inp);$('galleryInputs').append(label);
}
$('videoPath').value=data.video||'';$('videoPath').addEventListener('input',e=>data.video=e.target.value);
let videoFile=null;$('videoFile').addEventListener('change',e=>{videoFile=e.target.files[0];if(!videoFile)return;const v=$('videoPreview');v.src=URL.createObjectURL(videoFile);v.hidden=false;$('saveVideoFile').disabled=false;$('videoPath').value='assets/introduction.mp4';data.video='assets/introduction.mp4';status('Video selected. Download a copy, then place it inside assets.');});
$('saveVideoFile').addEventListener('click',()=>{if(!videoFile)return;const a=document.createElement('a');a.href=URL.createObjectURL(videoFile);a.download='introduction.'+(videoFile.name.split('.').pop()||'mp4');a.click();setTimeout(()=>URL.revokeObjectURL(a.href),5000);});
function status(s){$('status').textContent=s;}
function save(){try{localStorage.setItem('raiyanPortfolioDraft',JSON.stringify(data));status('Saved in this browser. Preview your site, then export.');return true;}catch(err){status('Storage is full. Please export your data now.');return false;}}
$('save').addEventListener('click',save);
$('download').addEventListener('click',()=>{save();const text='window.PORTFOLIO_DATA = '+JSON.stringify(data,null,2)+';\n';const blob=new Blob([text],{type:'text/javascript'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='portfolio-data.js';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),5000);status('Downloaded portfolio-data.js. Replace the old file with this one.');});
})();
