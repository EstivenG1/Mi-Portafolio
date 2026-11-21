const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
menuToggle?.addEventListener("click",()=>{const open=navLinks.classList.toggle("is-open");menuToggle.setAttribute("aria-expanded",String(open));menuToggle.setAttribute("aria-label",open?"Cerrar menú":"Abrir menú");});
navLinks?.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{navLinks.classList.remove("is-open");menuToggle?.setAttribute("aria-expanded","false");}));

const previews={
  conversor:{title:"ConversorG",content:'<img class="preview-project-image" src="assets/conversorg.png" alt="Captura de ConversorG">'},
  myd:{title:"Manage Your Day · MYD",content:'<img class="preview-project-image" src="assets/myd.png" alt="Captura de MYD">'},
  bidnow:{title:"BidNow",content:'<img class="preview-project-image" src="assets/bidnow.png" alt="Captura de BidNow">'},
  collections:{title:"m-collections",content:'<img class="preview-project-image" src="assets/m-collections.png" alt="Captura de M Collections">'}
};
const modal=document.getElementById("previewModal");
const previewTitle=document.getElementById("previewTitle");
const previewBody=document.getElementById("previewBody");
function closePreview(){modal.classList.remove("is-open");modal.setAttribute("aria-hidden","true");document.body.style.overflow="";}
document.querySelectorAll("[data-preview]").forEach(button=>button.addEventListener("click",()=>{const preview=previews[button.dataset.preview];if(!preview)return;previewTitle.textContent=preview.title;previewBody.innerHTML=preview.content;modal.classList.add("is-open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";}));
document.querySelectorAll("[data-close-preview]").forEach(button=>button.addEventListener("click",closePreview));
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&modal.classList.contains("is-open"))closePreview();});
