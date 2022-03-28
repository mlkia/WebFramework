import { useState } from 'react'
import Counter from './Counter'
import DarkMode from './DarkMode'
import './DarkMode.css'

const ShowHide = () => {
	const [isVisible, setIsVisible] = useState(true)
	const toggle = () => { setIsVisible(!isVisible) }
	
	return (
		<section>
			<button onClick={toggle}> Toggle visibility </button>
			<div className={isVisible ? '' : "hidden"}>
				<h3>Show</h3>
				<DarkMode />
			</div>
		</section>
	)
}

export default ShowHide