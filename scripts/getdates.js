const year = document.querySelector("#current-year");
const today = new Date();

year.innerHTML = today.getFullYear();

document.getElementById("lastModified").innerHTML = document.lastModified;