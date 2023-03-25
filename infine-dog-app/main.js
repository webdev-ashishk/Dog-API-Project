// fetch("https://dog.ceo/api/breeds/list/all")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

/* NOTE Old way to call api
  1.fetch return Promise
  2.reponse.json() also return promise
  */

//Modern way to calling api using async await
async function start() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  // console.log(data);
  creatBreedList(data.message);
}
start();
/* 
1.object.keys() return array 
2.all array access to method name is map
3.map() runs once for each item in collection or array ;
4.map will return brand new array contain option list
5.join() convert one single line of text

*/
function creatBreedList(breedList) {
  document.getElementById("breed").innerHTML = `
  <select onchange="loadByBreed(this.value)">
  <option>Choose a dog breed</option>
  ${Object.keys(breedList)
    .map(function (breed) {
      return `<option>${breed}</option>`;
    })
    .join("")}
</select>
  `;
}

async function loadByBreed(breed) {
  // alert(breed);
  if (breed != "Choose a dog breed") {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();
    // console.log(data);
    createSlideShow(data.message);
  }
}

function createSlideShow(images) {
  console.log(images);
}
