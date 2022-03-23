const chuckButton = document.querySelector('#chuck-button')
const chuckResults = document.querySelector('.chuck-results')
const getImage = document.querySelector('#myImage')

chuckButton.addEventListener('click', async () => {
	
	const response = await fetch('https://api.chucknorris.io/jokes/random?category=food', { method: 'GET' })
	
	const data = await response.json()

	console.log(data)
	chuckResults.innerText = data.value
	getImage.src = data.icon_url
	
}) 