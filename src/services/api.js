const key = '5d8168c980af4afa9a5114724252701'

const fetchData = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;
  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();
  
  return data;
  
}

export default fetchData;