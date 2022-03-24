import { useState } from 'react';

const Counter = ({ initial }) => {
const [count, setCount] = useState(initial)

const increase = event => setCount (count +1)

return(
	<section>
			<button onClick={increase}> Increase +1 </button>
			<p>The value is: {count}.</p>
		</section>
)

}

export default Counter