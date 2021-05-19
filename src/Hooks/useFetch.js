import { useContext , useEffect, useState } from 'react'
import AppContext from '../context/AppContext'

function useFetch(url) {
	const { state } = useContext(AppContext)
	const [ response, setResponse ] = useState([])

	useEffect(()=>{
		fetch('https://accounts.spotify.com/api/token',{
			method: 'POST',
			body: 'grant_type=client_credentials',
			headers: {
				'Content-Type' : 'application/x-www-form-urlencoded',
					'Authorization' : 'Basic ' + btoa(state.accessApi.clientId + ':' + state.accessApi.clientPrivate)
			}
		})
			.then(data => data.json())
			.then(tokenResponse => {
				fetch(url, {
					method: 'GET',
					headers: { 'Authorization' : 'Bearer ' + tokenResponse.access_token}
				})
					.then(searchResponse => searchResponse.json())
					.then(search => setResponse(search))
			})
	}, [url, state])
	return response
}

export default useFetch