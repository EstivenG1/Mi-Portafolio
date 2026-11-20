const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
menuToggle?.addEventListener("click",()=>{const open=navLinks.classList.toggle("is-open");menuToggle.setAttribute("aria-expanded",String(open));menuToggle.setAttribute("aria-label",open?"Cerrar menú":"Abrir menú");});
navLinks?.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{navLinks.classList.remove("is-open");menuToggle?.setAttribute("aria-expanded","false");}));

const previews={
  conversor:{title:"ConversorG",content:'<div class="preview-concept"><div><div class="concept-mark">CG.</div><h3>Documentos, sin complicaciones.</h3><p>Suite de herramientas para convertir, unir, dividir y optimizar documentos desde tu equipo. Esta es una representación visual; visita el repositorio para conocer el proyecto.</p><p style="margin-top:18px"><a href="https://github.com/EstivenG1/ConversorPdf" target="_blank" rel="noopener noreferrer">Explorar código en GitHub ↗</a></p></div></div>'},
  myd:{title:"Manage Your Day · MYD",content:'<iframe src="https://estiveng1.github.io/ManajeYourDay/" title="Vista previa de Manage Your Day" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>'},
  bidnow:{title:"BidNow",content:'<div class="preview-concept"><div><div class="concept-mark">BidNow.</div><h3>Entra. Explora. Ofrece.</h3><p>Plataforma colaborativa de subastas. Esta vista es una representación conceptual; el proyecto utiliza páginas PHP que no se ejecutan directamente desde GitHub Pages.</p><p style="margin-top:18px"><a href="https://github.com/EstivenG1/BidnowGG" target="_blank" rel="noopener noreferrer">Explorar código en GitHub ↗</a></p></div></div>'},
  collections:{title:"m-collections",content:'<div class="preview-concept"><div><div class="concept-mark">M COLLECTIONS</div><h3>Hogar & cuidado.</h3><p>Catálogo digital de maquillaje, lociones, velas aromáticas, cobijas y cortinas, con acceso a pedidos por WhatsApp. Esta es una representación visual del proyecto.</p><p style="margin-top:18px"><a href="https://github.com/EstivenG1/m-collections" target="_blank" rel="noopener noreferrer">Explorar código en GitHub ↗</a></p></div></div>'}
};
const modal=document.getElementById("previewModal");
const previewTitle=document.getElementById("previewTitle");
const previewBody=document.getElementById("previewBody");
function closePreview(){modal.classList.remove("is-open");modal.setAttribute("aria-hidden","true");document.body.style.overflow="";}
document.querySelectorAll("[data-preview]").forEach(button=>button.addEventListener("click",()=>{const preview=previews[button.dataset.preview];if(!preview)return;previewTitle.textContent=preview.title;previewBody.innerHTML=preview.content;modal.classList.add("is-open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";}));
document.querySelectorAll("[data-close-preview]").forEach(button=>button.addEventListener("click",closePreview));
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&modal.classList.contains("is-open"))closePreview();});
