function updateBarcelonaTime() {
  let barcelonaElement = document.querySelector("#barcelona");
  let barcelonaDateElement = barcelonaElement.querySelector(".date");
  let barcelonaTimeElement = barcelonaElement.querySelector(".time");
  let barcelonaTime = moment().tz("Europe/Barcelona");

  barcelonaDateElement.innerHTML = moment().format("MMMM Do YYYY");
  barcelonaTimeElement.innerHTML = barcelonaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
setInterval(updateBarcelonaTime, 1000);

function updateDublinTime() {
  let dublinElement = document.querySelector("#dublin");
  let dublinDateElement = dublinElement.querySelector(".date");
  let dublinTimeElement = dublinElement.querySelector(".time");
  let dublinTime = moment().tz("Europe/Dublin");

  dublinDateElement.innerHTML = moment().format("MMMM Do YYYY");
  dublinTimeElement.innerHTML = dublinTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
setInterval(updateDublinTime, 1000);


function updateNewyorkTime() {
  let newyorkElement = document.querySelector("#newyork");
  let newyorkDateElement = newyorkElement.querySelector(".date");
  let newyorkTimeElement = newyorkElement.querySelector(".time");
  let newyorkTime = moment().tz("America/New_York");

  newyorkDateElement.innerHTML = moment().format("MMMM Do YYYY");
  newyorkTimeElement.innerHTML = newyorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
setInterval(updateNewyorkTime, 1000);
