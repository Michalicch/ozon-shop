export const debounce = (func, ms = 300) => {
	let timer

	/**
	 * func - функция которая будет выполняться отложено, ms - мисекунды в течении которых нужно копить информацию и не выполнять функцию func  
	 * далее возвращаем все параметры которые нам возвращаются (...args) чистим таймер и создаем новый таймер 
	 * пока мы например печатаем символы в строке поиска в течении 300мс у нас не произойдет вызова функции,
	 * так как таймер будет создаваться снова, а прошлый таймер чиститься. 
	 */
	return (...args) => {
		clearTimeout(timer)
		timer = setTimeout(() => { func.apply(this, args) }, ms)
	}
}

//функция очистки инпутов и чекбоксов фильтов и поиска при выборе категории
export const clearInput = () => {
	const minInp = document.getElementById('min')
	const maxInp = document.getElementById('max')
	const checkSale = document.getElementById('discount-checkbox')
	const checkMark = document.querySelector('.filter-check_checkmark')
	const searchInput = document.querySelector('.search-wrapper_input')

	minInp.value = ''
	maxInp.value = ''
	searchInput.value = ''
	checkSale.checked = false
	if (checkMark.classList.contains('checked')) {
		checkMark.classList.remove('checked')
	}
}