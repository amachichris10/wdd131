const label = document.getElementById("wind-chill")

const temperature = 9
const windSpeed = 6


function calculateWindChill(TEMPERATURE, WINDSPEED) {
    return 13.12 + 0.6215 * TEMPERATURE - 11.37 * (WINDSPEED ^ 0.16) + 0.3965 * TEMPERATURE * (WINDSPEED ^ 0.16)
}

if (temperature <= 10 && windSpeed > 4.8) {
    label.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`
} else {
    label.textContent = "N/A";
}