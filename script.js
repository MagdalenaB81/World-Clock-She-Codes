function updateTime() {

    //barcelona
  let barcelonaElement = document.querySelector("#barcelona");
  if (barcelonaElement) {
    let barcelonaDateElement = barcelonaElement.querySelector(".date");
    let barcelonaTimeElement = barcelonaElement.querySelector(".time");
    let barcelonaTime = moment().tz("Europe/Barcelona");

    barcelonaDateElement.innerHTML = moment().format("MMMM Do YYYY");
    barcelonaTimeElement.innerHTML = barcelonaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

   //dublin
  let dublinElement = document.querySelector("#dublin");
  if (dublinElement) {
    let dublinDateElement = dublinElement.querySelector(".date");
    let dublinTimeElement = dublinElement.querySelector(".time");
    let dublinTime = moment().tz("Europe/Dublin");

    dublinDateElement.innerHTML = moment().format("MMMM Do YYYY");
    dublinTimeElement.innerHTML = dublinTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let newyorkElement = document.querySelector("#newyork");
  if (newyorkElement) {
    let newyorkDateElement = newyorkElement.querySelector(".date");
    let newyorkTimeElement = newyorkElement.querySelector(".time");
    let newyorkTime = moment().tz("America/New_York");

    newyorkDateElement.innerHTML = moment().format("MMMM Do YYYY");
    newyorkTimeElement.innerHTML = newyorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

}


function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
      <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small> ${cityTime.format("A")}</small> </div>
      </div>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);