const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://webknox-recipes.p.rapidapi.com/recipes/quickAnswer',
  params: {
    q: 'How much vitamin c is in 2 apples?'
  },
  headers: {
    'X-RapidAPI-Key': '8de239966cmsh1c720071999ae1cp16e63ajsn8e04a6d04c7d',
    'X-RapidAPI-Host': 'webknox-recipes.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}