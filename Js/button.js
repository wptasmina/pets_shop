// Best deal btn & sort btn 

const bestDealCard = document.getElementById("bestDealCard");
const sortBtn = document.getElementById("sortBtn");

bestDealCard.addEventListener("click", function() {
bestDealCard.classList.add(
  "bg-btn_bg",
  "text-sm",
  "text-white",
  "shadow",
  "rounded-lg",
  "px-6",
  "py-3"
);
sortBtn.classList.remove(
  "bg-btn_bg",
  "text-sm",
  "text-white",
  "font-bold",
  "shadow",
  "rounded-lg",
  "px-6",
  "py-3"
);

loadAllPost();
}); 

//sort button
sortBtn.addEventListener("click", function() {
  sortBtn.classList.add(
    "bg-btn_bg",
    "text-sm",
    "text-white",
    "font-bold",
    "shadow",
    "rounded-lg",
    "px-6",
    "py-3"
  );
 bestDealCard.classList.remove(
   "bg-btn_bg",
   "text-sm",
   "text-white",
   "shadow",
   "rounded-lg",
   "px-6",
   "py-3"
 );
}); 
