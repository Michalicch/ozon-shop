import getData from "./getData"
import renderGoods from "./renderGoods"
import { searchFilter } from "./filters"
import { debounce } from "./helpers"
import { priceFilter } from "./filters"

const search = () => {
	const searchInput = document.querySelector('.search-wrapper_input')
	const minInp = document.getElementById('min')
	const maxInp = document.getElementById('max')
	const checkSale = document.getElementById('discount-checkbox')
	const checkMark = document.querySelector('.filter-check_checkmark')

	const debounceSearch = debounce((event)=>{
		getData().then((data) => {
			renderGoods(searchFilter(data, event.target.value));
		})
	}, 2000)	
//, sale = false
	const debouncePrice = debounce((min = '', max = '', sale = false)=>{
		getData().then((data => {
			renderGoods(priceFilter(data, min, max, sale));
		}))
	})	
	
	searchInput.addEventListener('input', debounceSearch)	

	minInp.addEventListener('input', (event) =>{
		debouncePrice(minInp.value, maxInp.value, checkSale.value)
	})
	maxInp.addEventListener('input', (event) =>{
		debouncePrice(minInp.value, maxInp.value, checkSale.value)
	})

	checkSale.addEventListener('change', ()=>{		
		checkMark.classList.toggle('checked')		
		debouncePrice(minInp.value, maxInp.value, checkSale.checked)
	})


}

export default search