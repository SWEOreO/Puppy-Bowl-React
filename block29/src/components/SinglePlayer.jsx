import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";

const SinglePlayer= ({token}) => {
  const [playerDetails, setPlayerDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getPlayerDetails = async() => {
      const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-ft/players/${id}`);
      const retrievePlayerDetail = await response.json();
      setPlayerDetails(retrievePlayerDetail.data.player);

    }

    getPlayerDetails();
  },[])

  return(
    <>
      <h2>Single Player Details</h2>
      <Link to='/NewPlayerForm'>Add a New Player Here</Link>

      {
        playerDetails.id ?
          <>
            <h3>{playerDetails.name}</h3>
            <h3>id: {playerDetails.id}</h3>
            <h3>team: {playerDetails?.team?.name ?? 'unknown'}</h3>
            <img src={playerDetails.imageUrl} width="300" height="500"/>
          </>
          :null
      }

      <div>
        <Link to='/'>Back to Player List</Link>
      </div>

    </>
  )
}
  



export default SinglePlayer
