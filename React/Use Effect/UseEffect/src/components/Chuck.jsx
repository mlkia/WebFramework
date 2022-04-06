const Chucknorris = ({Infor: { icon_url,id, url, value } }) => (
<section className="product">
		<img src={icon_url} />
		<h6> {id} </h6>
		<a href={url}>The link</a>
		<h2>{value}</h2>
	</section>
)

export default Chucknorris