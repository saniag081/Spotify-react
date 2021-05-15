import { useContext ,useState, useEffect } from 'react'
import AppContext from '../context/AppContext'

function useFetch(url) {
	const [token, setToken] = useState('')
	const { state } = useContext(AppContext)

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
				setToken(tokenResponse)
				console.log(tokenResponse.access_token)
				fetch(url, {
					method: 'GET',
					headers: { 'Authorization' : token}
				})
					.then(searchResponse => searchResponse.json())
					.then(search => console.log(search))
			})
	},[url, state])
}

export default useFetch