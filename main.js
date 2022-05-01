console.log("Hemlo");

let weight = document.querySelector("#weight"),
  gm = document.querySelector("#grams"),
  mg = document.querySelector("#milligrams"),
  ton = document.querySelector("#tonnes"),
  lb = document.querySelector("#pounds"),
  oz = document.querySelector("#ounces"),
  convert = document.querySelector("#convert");

convert.addEventListener("click", () => {
  let kg = weight.value;
  console.log(kg);

  if (kg === "") {
    alert("Please enter a value");
  } else {
    gm.innerHTML = `${kg * 1000} gm`;
    mg.innerHTML = `${kg * 1000000} mg`;
    ton.innerHTML = `${kg / 1000} Ton`;
    lb.innerHTML = `${kg * 2.205} lb`;
    oz.innerHTML = `${kg * 35.274} oz`;
  }
});
