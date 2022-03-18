let body = document.querySelectorAll('body')
let buttonMode = document.querySelector('#button-mode')
let p = document.querySelector('p')
let section = document.querySelector('section')
let title = document.querySelector('h1')

buttonMode.addEventListener('click', event =>{
	body.forEach(item =>{
		if( item.className === '' ) {
			item.className = 'bodydarkmode'
			title.className = 'titleDarkmode'
			buttonMode.className = 'buttondarkmode'
			buttonMode.innerText = 'Switch to Light Mode'
			section.className = 'sectionDark'
		} else {
			item.className = ''
			title.className = ''
			buttonMode.innerText = 'Switch to Dark Mode'
			buttonMode.className = 'buttonlightmode'
			section.className = ''

		}
	})
})
