import {useEffect, useState} from "react";
import { Link, useNavigate, Route,Routes,  } from 'react-router-dom';


const AllPlayer = ({token}) => {

  const[allPlayers, setAllPlayers] = useState([]);
  const[searchTerm, setSearchTerm] = useState("");
  

  useEffect (() => {
    const getAllPlayers = async() => {
      const response = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-ft/players');
      const responseJsonObj = await response.json();
      const allPlayerList = responseJsonObj.data.players;
      setAllPlayers(allPlayerList);


    
    }

    getAllPlayers();
  },[])


  const deleteSelectedPlayer = async(playerId) => {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-ft/players/${playerId}`, {
      method: 'DELETE'});
      console.log(`deleted`)
    
}



  const filteredPlayers = allPlayers.filter((player) => player.name.includes(searchTerm))

  return (
    <>
      <input placeholder="Search Players" type="text" value={searchTerm} onChange={(event) => { setSearchTerm(event.target.value)}}/>

      <h2>Player List</h2>

      <Link to='/NewPlayerForm'>Add a New Player Here</Link>

      <section>

        {
          filteredPlayers.map((eachPlayer) => {

            return (
              <div key={eachPlayer.id}>
                <Link key={eachPlayer.id} to={`/SinglePlayer/${eachPlayer.id}`}>
                  <h2>{eachPlayer.name}</h2>
                  <img src={eachPlayer.imageUrl} width="300" height="500"/>
                </Link>
                  <button onClick={() => deleteSelectedPlayer(eachPlayer.id)}>Delete</button>

              </div>

            )
          })
        }

      </section>
    </>
  )

}

export default AllPlayer