// const url = "https://ap-countries-api.vercel.app/all";

//  GET CAR DETAILS
// async function getCarDetails(id) {
//   try {
//     let res = await fetch(`${url}/${id}`, {
//       method: "GET",
//       headers: { "Content-Type": "application/json" },
//     });
//     let result = await res.json();
//     let data = result.data;
//     // let result = await res.json();
//     // console.log(data);
//     displayCarDetails(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// let id = JSON.parse(localStorage.getItem("carId"));
// getCarDetails(id);
// console.log(getCarDetails());

// function displayCarDetails(country) {
//   document.querySelector(".car").innerHTML = `<h2>vvfv ${country.name}</h2>`;
// }
