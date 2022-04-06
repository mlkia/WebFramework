import { useEffect, useState } from 'react'
import '../App.css'



function API () {
const [posts, setPosts] = useState ("")
const [gets, setGets] = useState("")

const data = useEffect(() => {
	fetch("https://api.chucknorris.io/jokes/random")
	.then(response => response.json())
	.then(data => {setPosts(data)})
	})

	return (
		<div>
			<button onClick={() => setGets(posts)}>Get the data</button>
			<h1>{gets.value}</h1>
		</div>
	)
}
export default API