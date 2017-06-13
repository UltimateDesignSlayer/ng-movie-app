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

const getItemCreditsData = (app, id, type, callback) => {
  fetch(
    'https://api.themoviedb.org/3/' + type + '/' + id + '/credits?api_key=' + app.apiKey,
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

const getPersonMovieData = (app, id, callback) => {
  fetch(
    'https://api.themoviedb.org/3/person/' + id + '/movie_credits?api_key=' + app.apiKey,
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

const getPersonTvData = (app, id, callback) => {
  fetch(
    'https://api.themoviedb.org/3/person/' + id + '/tv_credits?api_key=' + app.apiKey,
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

const getPersonSimilarData = (app, id, callback) => {
  fetch(
    'https://api.themoviedb.org/3/person/' + id + '/tv_credits?api_key=' + app.apiKey,
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

export default {getSearchResults, getItemData, getItemCreditsData, getPersonMovieData, getPersonTvData};
