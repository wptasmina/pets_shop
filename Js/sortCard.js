const sortCard = async () => {
  const pestsBox = document.getElementById("pests-box");
  const pestsContainer = document.getElementById("pests-container");
  document.getElementById("sideber-img").classList.add("hidden");
  pestsContainer.innerHTML = "";

  pestsContainer.innerHTML = `
<div id="spinner" class="flex justify-center items-center pt-4">
  <span class="loading loading-bars loading-md"></span>
</div>
`;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/pets`
  );
  const data = await res.json();
  const petArray = data.pets;

  pestsContainer.classList.remove("grid");

  // lodding time
  setTimeout(() => {
    const spinner = document.getElementById("spinner");
    if (spinner) {
      spinner.remove();
    }

    document.getElementById("sideber-img").classList.remove("hidden");

    //sortting
    petArray.sort((a, b) => b.price - a.price);
    pestsContainer.classList.add("grid");
    petArray.forEach((item) => {
      const cardContainer = document.createElement("div");
      const petId = item.petId;
      cardContainer.innerHTML = `
  <div class="card card-compact bg-white p-4 border border-border_rig shadow-sm">
  <figure>
    <img src=${item.image}/>
  </figure>
  <div class="flex flex-col space-y-3 pt-2">
     <h2 class="text-descText font-bold text-lg">
     ${item.breed == undefined ? "Not Avolabel" : item.breed}
       </h2>
    <div class="space-y-1">
      <p class="text-gray-500 text-md font-bold">
        <i class='bx bxs-widget text-gray-500 mr-1'></i>
        Breed: ${item.pet_name}
      </p>
      <p class="text-gray-500 text-md font-bold">
          <i class='bx bx-calendar-event text-gray-500 mr-1'></i>
         Birth: ${
           item.date_of_birth == null ? "Not Avolabel" : item.date_of_birth
         }
      </p>
      <p class="text-gray-500 text-md font-bold">
        <i class='bx bx-plug text-gray-500 mr-1'></i>
        Gender: ${item.gender == undefined ? "Not Avolabel" : item.gender}</p>
      <p class="text-gray-500 text-md font-bold">
        <i class='bx bx-dollar-circle text-gray-500 mr-1'></i> 
        Price : ${item.price == null ? "Not Avolabel" : `${item.price}$`}
      </p>
    </div>
    <hr/>
    <div class="flex justify-between">
      <button id="${petId}" onclick="sideberImg('${item.image}')" 
      class="bg-white border shadow rounded-lg px-4 py-2 cursor-pointer">
        <i class='bx bx-like text-2xl text-gray-600 hover:text-btn_bg'></i>
      </button>
      <button id="${petId}" onclick="loadAdopt(${item.petId})" 
      class="bg-white text-btn_bg text-md font-bold border shadow rounded-lg px-4 py-2 cursor-pointer">
          Adopt
      </button>
      <button id="${petId}" onclick="loadDetalis(${item.petId})"
        class="bg-white text-btn_bg text-md font-bold border shadow rounded-lg px-4 py-2 cursor-pointer">
          Details
      </button>
    </div>
  </div>
</div>
`;
      pestsContainer.append(cardContainer);
    });

    pestsContainer.insertBefore(pestsContainer, pestsBox.firstChild);
  }, 2000);
};
