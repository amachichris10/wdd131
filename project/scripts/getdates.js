const year = document.querySelector("#current-year");
const today = new Date();

year.innerHTML = `&copy; ${today.getFullYear()}`;

document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;