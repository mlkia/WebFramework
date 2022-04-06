import { useEffect, useState } from 'react'
import '../App.css'



function API () {
	const [posts, setPosts] = useState ("")
	const [gets, setGets] = useState("")

	useEffect(() => {
		const fetchData = async () => {
			const response  = await fetch('https://api.chucknorris.io/jokes/random');
			const data = await response.json()
			// const response = awet fetch("https://api.chucknorris.io/jokes/random")
			setGets(data)

			// .then(response => response.json())
			// .then(data => {setPosts(data)})
	}
		fetchData()
})

	return (
		<div>
			<button onClick={() => setPosts(gets)}>Get the data</button>
			<h1>{posts.value}</h1>
		</div>
	)
}
export default API