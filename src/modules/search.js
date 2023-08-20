import getData from "./getData"
import renderGoods from "./renderGoods"
import { searchFilter } from "./filters"

const search = () => {
	const searchInput = document.querySelector('.search-wrapper_input')

	searchInput.addEventListener('input', (event) => {
		const value = event.target.value

		getData().then((data) => {
			renderGoods(searchFilter(data, value));
		})
	})

	// const debouceSearch = debounce((event) => {
	// 	getData().then((data) => {
	// 		renderGoods(searchFilter(data, event.target.value));
	// 	})
	// }, 2000)
	// searchInput.addEventListener('input', debouceSearch)
}

export default search