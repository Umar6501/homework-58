const url = "https://ap-countries-api.vercel.app/all";

//  GET ALL CARS
async function fetchCars() {
  try {
    let res = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    let result = await res.json();
    let data = result.data;

    // console.log(data);
    displayCars(data); ///////////////////////
  } catch (err) {
    console.log(err);
  }
}
fetchCars();

// ADD CAR

///////////////////////////////////////////////////////////////////////////////
function displayCars(cars) {
  let str = "";
  cars.map((country) => {
    str += `
    <div class="car">
    <img src="${country.flags.png}" alt="">
    <h3>${country.name.official}</h3>
    <div class="items">
      <h2>Population:</h2>
      <h4>${country.population}</h4>
    </div>
    <div class="items">
      <h2>Region:</h2>
      <h4>
        ${country.region}
      </h4>
    </div>
    <div class="items">
      <h2>Capital:</h2>
      <h4>
        ${country.capital}
      </h4>
    </div>
  </div>
    `;
  });
  document.querySelector(".cars").innerHTML = str;
  console.log(cars);
}

function goDetails(name) {
  localStorage.setItem("name", JSON.stringify(name));
}
