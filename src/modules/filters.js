export const searchFilter = (goods, value) => {

	return goods.filter((goodsItem) => (goodsItem.title.toLowerCase()).includes(value.toLowerCase()))
}

export const categoryFilter = (goods, value) => {

	return goods.filter((goodsItem) => {
		return goodsItem.category === value
	})
}

export function priceFilter(items, values, sale) {
	return items.filter((item) => {
		if (values.maxPrice != '' && values.minPrice != '') {
			if (sale) {
						return parseInt(item.price) >= parseInt(values.minPrice) && parseInt(item.price) <= parseInt(values.maxPrice) && item.sale == sale;
					}
					else {
						return parseInt(item.price) >= parseInt(values.minPrice) && parseInt(item.price) <= parseInt(values.maxPrice);
					}
		} else if (values.maxPrice == '' && values.minPrice != ''){
			if (sale) {
				return parseInt(item.price) >= parseInt(values.minPrice) && item.sale == sale;
			}
			else {
				return parseInt(item.price) >= parseInt(values.minPrice);
			}

		} else if (values.maxPrice != '' && values.minPrice == ''){
			if (sale) {
				return parseInt(item.price) <= parseInt(values.maxPrice) && item.sale == sale;
			}
			else {
				return parseInt(item.price) <= parseInt(values.maxPrice);
			}

		} else if (values.maxPrice == '' && values.minPrice == '') {
			if (sale) {
						return parseInt(item.price) && item.sale == sale;
					}
					else {
						return parseInt(item.price);
					}
		}
	});
}