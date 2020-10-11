async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
}

function handleError(error) {
  console.log("There was an error");
  console.log(error);
}

export function getWeatherByLocation(loc) {
  console.log("Making call");
  if (loc) {
    return fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
        loc +
        ",IE&units=metric&appid=32725a57ac8a030e20b3d3742826b971"
    )
      .then(handleResponse)
      .catch(handleError);
  }
}
