// Detalis link button poppup
const loadAdopt = async (petId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/pet/${petId}`
  );
  const data = await res.json();
  displayAdopt(data.petData);
};

// display Adopt button poppup
const displayAdopt = (petData) => {
  const adoptContainer = document.getElementById("adoptBtn");
  adoptContainer.innerHTML = `
  <div class="flex flex-col items-center h-60">
  <img class="w-10 items-center" src="./images/congres.png">
    <h2 class="text-descText font-extrabold text-4xl tracking-wider pt-3">
        Congrates
    </h2>
    <p class="font-medium text-lg tracking-wider pt-3">
        Pets Adoption Shop Start Open
    </p>
    </div>
    <p id="countdown" class="text-4xl text-center font-bold"></p>
  `;
  document.getElementById("claseBtn").classList.add("hidden");
  document.getElementById("customs").classList.remove("btn");

  setTimeout(() => {
    document.getElementById("customs").close();
  }, 3000);
  document.getElementById("showAdeptbtn").click();

  loadCount();
};

function loadCount() {
  const countdownElement = document.getElementById("countdown");
  let seconds = 3;

  countdownElement.innerHTML = ` 
      
      <span class="text-7xl font-bold">${seconds}</span>
      `;
   const interval = setInterval(() => {
    seconds--;
    if (seconds > 0) {
      countdownElement.innerHTML = ` 
      
      <span class="text-7xl font-bold">${seconds}</span>
      `;
    } else {
      clearInterval(interval);
      countdownElement.onpointercancel = "";
      countdownElement.remove();
    }
  }, 1000);
}
