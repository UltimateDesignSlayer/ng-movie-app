const getSearchResults = (app, query, callback) => {
  fetch(
    'https://api.themoviedb.org/3/search/multi?api_key=' + app.apiKey + '&query=' + query,
    {method: 'GET'}
  )
  .then((response) => {
  	response.json().then((data) => {
      callback(data);
      return data;
    })
    .catch((err) => {
    	return err;
    });
  });
}

const getItemData = (app, id, type, callback) => {
  fetch(
    'https://api.themoviedb.org/3/' + type + '/' + id + '?api_key=' + app.apiKey,
    {method: 'GET'}
  )
  .then((response) => {
  	response.json().then((data) => {
      callback(data);
      return data;
    })
    .catch((err) => {
    	return err;
    });
  });
}

export default {getSearchResults, getItemData};
