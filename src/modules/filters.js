export const searchFilter = (goods, value) => {

	return goods.filter((goodsItem) => {
		return goodsItem.title.toLowerCase().includes(value.toLowerCase())
	})
}

export const categoryFilter = (goods, value) => {

	return goods.filter((goodsItem) => {
		return goodsItem.category === value
	})
}

export const priceFilter = (goods, minValue, maxValue, sale) => {
	const checkSale = document.getElementById('discount-checkbox')
	
	return goods.filter((goodsItem) => {
		const isMin = minValue.trim() ? goodsItem.price >= parseInt(minValue.trim()) : true
		const isMax = maxValue.trim() ? goodsItem.price <= parseInt(maxValue.trim()) : true
		const isSale = sale ? goodsItem.sale : true
		
		return !checkSale.checked ? isMin && isMax : isMin && isMax && isSale		
	})
}