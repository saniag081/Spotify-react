import Categorie from '../Categorie/index'
import './ListCategories.scss'

export default function ListCategories({ categories = [] }) {
	return (
		<div className="listCategories">
			{categories.map((categorie) => (
				<Categorie categorie={categorie} key={categorie.id} />
			))}
		</div>
	)
}