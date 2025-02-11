import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const NewPlayerForm = ({setToken}) => {
  const[playerNameInput, setPlayNameInput] = useState('');
  const[breedInput, setBreedInput] = useState('');
  const[statusInput, setStatusInput] = useState('field');
  const[imgInput, setImageInput] = useState();
  const[teamIdInput, setTeanIdInput] = useState();
  const[textInput, setTextInput] = useState('');

  const navigate = useNavigate();

  const addNewPlayer = async(event) => {
      event.preventDefault();
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-ft/players', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: playerNameInput,
          teamId: teamIdInput,
          breed: breedInput,
          imageUrl: imgInput,
          status: statusInput
        })
      });

      console.log(response);
      const res = await response.json();
      console.log(res);
      
  }
  
  return (
    <>
      <h2>Add a New Player</h2>

      <form onSubmit={addNewPlayer}>
        <input 
          placeholder='Playername' 
          onChange={(event) => { setPlayNameInput(event.target.value) }} />

         <input 
          placeholder='Breed' 
          onChange={(event) => { setBreedInput(event.target.value) }} />

          <input 
          placeholder='TeamId' 
          onChange={(event) => { setTeanIdInput(event.target.value) }} />

          <input type="file"
          onChange={(event) => { setImageInput(event.target.value)}}/>


          <select onChange={(event) => { setStatusInput(event.target.value) }}> 
            <option value="field">Field</option>
            <option value="bench">Bench</option>
          </select>

          <textarea type="text" 
          placeholder="Leave your message here" 
          onChange={(event) => { setTextInput(event.target.value) }}></textarea>


        <button>Add</button>

      </form>

      <div>
        <Link to='/'>Back to Player List</Link>
      </div>
    </>
  )
  
}
export default NewPlayerForm

