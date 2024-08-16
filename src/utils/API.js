const lastfmAPI = 'http://ws.audioscrobbler.com/2.0';

export async function getFriends(context) {
	// ooof that path. make that nicer and handle unexpected
	const friendsData = await API(
		{
			'method': 'user.getfriends',
			'user': context.queryKey[1].lastfmUsername.lastfmUsername
		}
	);
	return friendsData;
}

async function API(paramsObj, apiLocation=lastfmAPI) {
	// dev solution. we don't want to expose api key 
	// in the browser in production
	const apiKey = {'api_key': process.env.REACT_APP_LASTFM_API_KEY};
	const format = {'format': 'json'};

  try {
    let response = await fetch(apiLocation
			+ '?'
      + new URLSearchParams({...Object.assign(paramsObj, apiKey, format)}));
      
    const data = await response.json();
    return data;
  }
  catch (error) {
    return error;
  }
}
