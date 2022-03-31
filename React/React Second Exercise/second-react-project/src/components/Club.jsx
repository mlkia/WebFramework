
const Club = ( { Clubs: {name, championsLeague, img} } ) => (
<section className="product">
	<h3>{name}</h3>
	<h5>{championsLeague} Champions League</h5>
	<img src={img}  />
</section>
)

export default Club