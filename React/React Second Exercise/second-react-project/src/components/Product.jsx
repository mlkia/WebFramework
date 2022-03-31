
const Product = ({ Tools: { name, price, img } }) => (
	<section className="product">
		<h3> {name} </h3>
		<img src={img} />
		<p> {price} SEK </p>
	</section>
)

export default Product