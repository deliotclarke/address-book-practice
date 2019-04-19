console.log("what's your address");
//address book code below
// Some starter code
//container for input
const container = document.querySelector("#addressList")

//save button
document.querySelector("#saveEntry").addEventListener("click", event => {

  const personName = document.querySelector("#fullName").value
  const personAddress = document.querySelector("#address").value

  container.innerHTML += `
        <section>
            <h1>${personName}</h1>
            <div>${personAddress}</div>
        </section>
    `
})

//favorite things code below
const wishlist = document.querySelector("#wishlist");

document.querySelector("#save").addEventListener("click", () => {
  let thing = document.querySelector("#thing");
  let place = document.querySelector("#place");

  if (thing === "" || place === "") {
    alert("You haven't entered anything in one or more of the fields, please try again.");
  } else {
    wishlist.innerHTML += `
      <div>
        <p>I can get ${thing.value} at ${place.value}.</p>
      </div>
  `
  }
  thing.value = " ";
  place.value = " ";
  document.querySelector("#thing").focus();
})

