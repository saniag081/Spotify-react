import './Search.sass'
import useFetch from '../../Hooks/useFetch'

export default function Search() {
	const data = useFetch('https://api.spotify.com/v1/artists/')
	// console.log(state)
	return (
		<div>
			<input type="text" />
		</div>
	)
}