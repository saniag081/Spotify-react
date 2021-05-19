import { useState } from 'react'

function useInitialState() {
	const [state, setState] = useState({
		accessApi: {
			clientId: 'ec0c3f94e7a442db8534f51705cd5527',
			clientPrivate: '432208078af848a9a2274c65a2228941'
		},
		reponseSearch: [],
		categories: []
	})

	const setResponseSearch = (payload) => {
		setState({
			...state,
			reponseSearch: payload
		})
	}

	const setCategories = (payload) => {
		setState({
			...state,
			categories: payload
		})
	}

	return {
		state,
		setResponseSearch,
		setCategories
	}
}

export default useInitialState;