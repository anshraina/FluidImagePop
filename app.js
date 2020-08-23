const modal = document.querySelector(".modal");
const previews  = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const imgText = document.querySelector(".caption");


previews.forEach(preview =>{
    preview.addEventListener('click', ()=>{
        modal.classList.add("open");
        original.classList.add("open");

        const originalSrc = preview.getAttribute("data-original");
        original.src = originalSrc;
        const altText = preview.alt;
        imgText.textContent = altText;
    })
});

modal.addEventListener("click", (e)=>{
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open");
        original.classList.remove("open");
       
    }

})