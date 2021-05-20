import './Categorie.scss'

export default function Categories({ categorie }) {
	// debugger
	return (
		<div className="categorie">
			<img src={categorie.icons[0].url} alt="" />
			<p>{categorie.name}</p>
		</div>
	)
}