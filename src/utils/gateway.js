const baseURL = "https://api.iev.aero/api/flights/";

const getFlights = (day) => fetch(baseURL + day).then(res => {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error()
  }
});

export default getFlights;