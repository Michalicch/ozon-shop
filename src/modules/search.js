import getData from "./getData"
import renderGoods from "./renderGoods"
import { funcFilter } from "./filters"
import { debounce } from "./helpers"

const search = () => {
	const searchInput = document.querySelector('.search-wrapper_input')
	const minInp = document.getElementById('min')
	const maxInp = document.getElementById('max')
	const checkSale = document.getElementById('discount-checkbox')
	const checkMark = document.querySelector('.filter-check_checkmark')

	const debounceFunc = debounce((min = '', max = '', sale = false, searchValue = '') => {
		getData().then((data => {
			renderGoods(funcFilter(data, min, max, sale, searchValue));
		}))
	})

	searchInput.addEventListener('input', () => {
		debounceFunc(minInp.value, maxInp.value, checkSale.value, searchInput.value)
	})
	minInp.addEventListener('input', () => {
		debounceFunc(minInp.value, maxInp.value, checkSale.value, searchInput.value)
	})
	maxInp.addEventListener('input', () => {
		debounceFunc(minInp.value, maxInp.value, checkSale.value, searchInput.value)
	})
	checkSale.addEventListener('change', () => {
		checkMark.classList.toggle('checked')
		debounceFunc(minInp.value, maxInp.value, checkSale.checked, searchInput.value)
	})
}

export default search