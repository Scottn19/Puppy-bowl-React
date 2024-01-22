import React, {useState} from 'react'
import {createPlayer} from "../API/index.js"
import { useNavigate } from 'react-router-dom';
import "./NewPlayerForm.css"

export default function NewPlayerForm() {
  const navigate = useNavigate();
  const[puppyName, setPuppyname] = useState("");
  const [breed, setBreed] = useState("");
  const [playerStatus, setPlayerStatus] = useState("bench");
  const [imageUrl, setImageUrl] = useState("https://img.freepik.com/premium-vector/cute-dog-face-cartoon-vector-icon-illustration-flat-cartoon-style-dog-illustration_627305-374.jpg?w=740");

async function handleSubmit(e){
  e.preventDefault();
  try{
    const player = await createPlayer({
      name:puppyName,
      breed,
      playerStatus,
      imageUrl
    });
    if(player.success){
      alert("Puppy successfully added!");
      navigate("/");
    
    }else{
      alert("Something went wrong with adding the puppy! Please try again!")
    }
  }  catch(err){
    console.log(err)
  }
}


  return (
    <div style={{
      width: "50%",
      margin: "0 auto"
    }}>

      <h1 style={{textAlign: "center"}}>Add a New Player</h1>
      <form style= {{
      display: "flex",
      flexDirection: "column",}}
      onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={(e) => setPuppyname(e.target.value)}/>
        </label>
        <label>
          Breed:
          <input type="text" onChange={(e) => setBreed(e.target.value)}/>
        </label>
        <label>
          ImageUrl:
          <input type="text" onChange={(e) => setImageUrl(e.target.value)}/>
        </label>
        <label>
          Status:
        <select onChange={(e) => setPlayerStatus(e.target.value)}>
          <option value="field">Field</option>
          <option selected value="bench">Bench</option>
        </select>
        </label>
        <button style={{ width: "25%", margin: "0 auto"}}>Add Puppy!</button>
      </form>
    </div>
  )
}
