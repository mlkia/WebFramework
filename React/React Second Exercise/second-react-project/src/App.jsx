import { useState } from 'react'
import Product from './components/Product'
import './App.css'

const data = [
	{
		name: 'Hammare',
		price: 125,
		img: 'https://images.clasohlson.com/medias/sys_master/h62/haa/9665295646750.jpg'
	},
	{
		name: 'Skruvmejslar',
		price: 69,
		img: 'https://images.clasohlson.com/medias/sys_master/h4c/hbd/67893060665374.jpg'
	},
  {
    name: 'Spik',
		price: 39,
		img: 'https://images.clasohlson.com/medias/sys_master/hf8/ha6/9674064429086.jpg'
  },
  {
    name: 'Skruv',
		price: 39,
		img: 'https://images.clasohlson.com/medias/sys_master/h43/hbc/9676496502814.jpg'
  }
]

function App() {

	return (
		<div className="app">
			<div className="product-container">
				<Product data={data[0]} />
				<Product data={data[1]} />
        <Product data={data[2]} />
				<Product data={data[3]} />
			</div>
		</div>
	)
}


export default App