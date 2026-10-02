const menu=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#navigation');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));navigation.classList.toggle('is-open',open)});
navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');navigation.classList.remove('is-open')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&navigation.classList.contains('is-open')){menu.setAttribute('aria-expanded','false');navigation.classList.remove('is-open');menu.focus()}});
if(document.querySelector('#publication-list')){
let category='all';
const papers=[...document.querySelectorAll('.publication')];
const search=document.querySelector('#publication-search');
function filterPapers(){const query=search.value.trim().toLowerCase();let count=0;papers.forEach(p=>{const show=(category==='all'||p.dataset.category===category)&&p.textContent.toLowerCase().includes(query);p.hidden=!show;if(show)count++});document.querySelector('.results-count').textContent=`${count} ${count===1?'entry':'entries'}`;document.querySelector('.empty-state').hidden=count!==0}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{category=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));filterPapers()}));search.addEventListener('input',filterPapers);filterPapers();
}
// Keep links to the original single-page sections working.
const legacyPages={research:'research.html',publications:'publications.html',teaching:'teaching.html',readings:'suggested-readings.html',contacts:'contact.html'};
function redirectLegacySection(){
 const filename=location.pathname.split('/').pop();
 const target=legacyPages[location.hash.slice(1)];
 if((filename===''||filename==='index.html')&&target)location.replace(target);
}
redirectLegacySection();
window.addEventListener('hashchange',redirectLegacySection);
