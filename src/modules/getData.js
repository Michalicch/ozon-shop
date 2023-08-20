const getData = (str) => {
	return fetch(
		`https://ozon-shop-e9c48-default-rtdb.firebaseio.com/goods.json`
	)
		.then((response) => {
			return response.json()
		})

}

export default getData;