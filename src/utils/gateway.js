const baseURL = "https://api.iev.aero/api/flights/11-01-2022";

const getFlights = () => fetch(baseURL).then(res => {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error()
  }
});

export default getFlights;