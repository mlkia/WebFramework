import Club from "./Club";
import Clubs  from "./Teams";


const ClubsLista = () => (
<div className="product-container">
 {Clubs.map(team => (<Club key={team.name + team.img} Clubs ={team} />)) }
</div>
)

export default ClubsLista