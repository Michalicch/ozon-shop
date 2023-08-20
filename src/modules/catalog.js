import getData from "./getData"
import renderGoods from "./renderGoods"
import { categoryFilter } from "./filters"
import { clearInput } from "./helpers"

const catalog = () => {
	const btnCatalog = document.querySelector('.catalog-button > button')
	const catalogModal = document.querySelector('.catalog')
	const catalogModalItems = document.querySelectorAll('.catalog li')


	//Костыль вместо использовыания добавления/удаления активного класса (classList.toggle)
	let isOpen = false
	btnCatalog.addEventListener('click', () => {
		isOpen = !isOpen
		if (isOpen) {
			catalogModal.style.display = 'block'
		} else {
			catalogModal.style.display = ''
		}
	})

	catalogModalItems.forEach((item) => {
		

		item.addEventListener('click', () => {
			clearInput()
			const text = item.textContent

			getData().then((data) => {
				renderGoods(categoryFilter(data, text));
			})
		})
	})


}

export default catalog