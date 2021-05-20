import useFetch from '../../Hooks/useFetch'
import ListCategories from '../../components/ListCategories/index'
import './Home.scss'

export default function Home() {
	const { categories } = useFetch('https://api.spotify.com/v1/browse/categories?locale=sv_US')
	console.log(categories?.items)
	return (
		<div>
			<ListCategories categories={categories?.items} />
		</div>
	)
}