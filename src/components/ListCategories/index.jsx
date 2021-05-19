import Categorie from '../Categorie/index'

export default function ListCategories({ categories = [] }) {
	return (
		<div>
			{categories.map((categorie) => (
				<Categorie categorie={categorie} key={categorie.id} />
			))}
		</div>
	)
}