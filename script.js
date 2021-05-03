console.log('JS file connected!');

// 6e36cdc576966b7b423bd4e21d54c38c

// api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}

const apikey = '6e36cdc576966b7b423bd4e21d54c38c'

let cityName = 'greensboro'

// todo: get api url for current weather

const currentWeatherURL = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`

console.log(currentWeatherURL);

// todo: get api url for 5-day forecast

