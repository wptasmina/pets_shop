// Detalis link button poppup
const loadDetalis = async (petId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/pet/${petId}`
  );
  const data = await res.json();
  displayDetalis(data.petData);
};

// display Detalis button poppup
const displayDetalis = (petData) => {
  const detailsContainer = document.getElementById("model-content");
  detailsContainer.innerHTML = `
  <img class="w-full rounded-xl" src=${petData.image}/>
    <div class="flex flex-col">
     <h2 class="text-descText font-extrabold text-lg tracking-wider pt-3">
     ${petData.breed == undefined ? "Not Avolabel" : petData.breed}
       </h2>
    <div class="flex justify-between flex-wrap pb-4">
      <div>
      <p class="text-gray-500 text-md font-bold">
        <i class='bx bxs-widget text-gray-500 mr-1'></i>
        Breed: ${petData.pet_name}
      </p>
      <p class="text-gray-500 text-md font-bold">
        <i class='bx bx-plug text-gray-500 mr-1'></i>
        Gender: ${
          petData.gender == undefined ? "Not Avolabel" : petData.gender
        }</p>
      <p class="text-gray-500 text-md font-bold">
        <i class='bx bx-plug text-gray-500 mr-1'></i>
        Vaccinated status: ${
          petData.vaccinated_status == undefined
            ? "Not Avolabel"
            : petData.vaccinated_status
        }</p>
      </div>
      <div>
      <p class="text-gray-500 text-md font-bold">
       <i class='bx bx-calendar-event text-gray-500 mr-1'></i>
        Birth: ${
          petData.date_of_birth == null ? "Not Avolabel" : petData.date_of_birth
        }
      </p>
      <p class="text-gray-500 text-md font-bold">
        <i class='bx bx-dollar-circle text-gray-500 mr-1'></i> 
        Price : ${petData.price == null ? "Not Avolabel" : `${petData.price}$`}
      </p>
      </div>
    </div>
          <hr/>
<div class="space-y-2 py-4">
  <h6 class="text-descText text-lg font-extrabold">Details Information</h6>
  <p class="text-slate-500 text-md font-medium">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
  </p>
  <li class="text-slate-500 text-md font-medium">The point of using is that it has a more-or-less normal distribution of letters, as opposed to using.</li>
</div>
  `;
  document.getElementById("showModalData").click();
};

//create a All 4 buttons link
const loadAllBtn = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/categories`
  );
  const data = await res.json();
  displayAllBtn(data.categories);
};

//4 Button Move function Link
const loadCategoryPets = async (category) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/category/${category}`
  );
  const data = await res.json();
  displayAllPost(data.data);
};
loadCategoryPets();

//All display Button //4 buttons
const displayAllBtn = (categories) => {
  const categoriesContainer = document.getElementById("categories_container");

    categories.forEach((items) => {
      const div = document.createElement("div");
      div.innerHTML = `
<button onclick="loadCategoryPets('${items.category}')" 
class="inline-flex justify-center items-center gap-3 text-md font-bold text-black border-[1px] border-border_rig focus:outline-none focus:ring focus:ring-btn_bg focus:rounded-full focus:bg-act_bg shadow-sm rounded-lg lg:px-10 px-6 py-2">
  <img class="w-8" src="${items.category_icon}" />
   ${items.category}
</button>
`;
      categoriesContainer.appendChild(div);
    });
};
loadAllBtn();

//All posts loaded link
const loadAllPost = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`);
  const data = await res.json();
  displayAllPost(data.pets);
};

//spinner
function spinner (){
    const spinners = document.getElementById("spinners");

    setTimeout(() => {
      if (spinners) {
        spinners.remove("hidden");
      } else {
        spinners.classList.add("block");
      }
      loadAllPost();
    }, 2000);
    // loadAllPost();
}
spinner();

//All posts loaded Display
const displayAllPost = (pets) => {
  const pestsContainer = document.getElementById("pests-container"); 
  pestsContainer.innerHTML = "";

  if (pets.length == 0) {
    pestsContainer.classList.remove("grid");
    pestsContainer.innerHTML = `
        <div class="lg:min-h-[400px] min-h-[200px] w-full flex flex-col justify-center items-center">
           <img class="w-36 h-30" src="./images/error.png" alt="icon">
            <h2 class="text-3xl text-center text-btn_bg font-bold pt-4">
              Oops!! Sorry, There Search is no content here 😥
            </h2>
        </div>
        `;
    return;
  } else {
    pestsContainer.classList.add("grid");
  }

pets.forEach((item) => {
      const div = document.createElement("div");
      const petId = item.petId;
      div.innerHTML = `
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
pestsContainer.append(div);
  });
};

//sideber-img function
const sideberImg = (image) => {
  const sideberImage = document.getElementById("sideber-img");
  const div = document.createElement("div");
  div.innerHTML = `
    <img class="w-30 border rounded-xl shadow p-2" src="${image}" />
  `;
  sideberImage.append(div);
};
loadAllPost();