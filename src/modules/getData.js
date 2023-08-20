const getData = (str) => {
	return fetch(
		`https://ozon-shop-e9c48-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`
		)
		.then((response) => {
			return response.json()
		})

}

export default getData;