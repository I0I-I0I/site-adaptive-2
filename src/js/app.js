// Banner
const banner = document.querySelector(".banner")
const bannerButtonClose = document.getElementById("banner-button-close")

if (banner) {
	bannerButtonClose.addEventListener("click", () => {
		banner.style.display = "none"
	})
}

// Burger
const menu = document.getElementById("menu")
const burger = document.getElementById("burger")
const links = document.querySelectorAll(".menu__link")
const menuList = document.querySelector(".menu__list")

burger.addEventListener("click", () => {
	isOpen()
})

links.forEach((el) => {
	el.addEventListener("click", () => {
		isOpen()
	})
})

function isOpen() {
	menu.classList.toggle("is-open")
}

// Counter

if (document.getElementById("button-decrement")) {
	const btnDecrement = document.getElementById("button-decrement")
	const btnIncrement = document.getElementById("button-increment")
	const counterValue = document.getElementById("counter-value")
	let counter = Number(counterValue.textContent)

	btnDecrement.addEventListener("click", () => {
		if (counter > 1) {
			counter -= 1
		}
		counterValue.textContent = counter
	})

	btnIncrement.addEventListener("click", () => {
		counter += 1
		counterValue.textContent = counter
	})
}

// Dropdown

const dropdown = document.getElementById("dropdown")
const buttonFilters = document.getElementById("dropdown-button-filters")
const buttonSorting = document.getElementById("dropdown-button-sorting")

const isOpenSorting = "is-open-sorting"
const isOpenFilters = "is-open-filters"

buttonFilters.addEventListener("click", () => {
	dropdown.classList.remove(isOpenSorting)
	dropdown.classList.toggle(isOpenFilters)
})

buttonSorting.addEventListener("click", () => {
	dropdown.classList.remove(isOpenFilters)
	dropdown.classList.toggle(isOpenSorting)
})
