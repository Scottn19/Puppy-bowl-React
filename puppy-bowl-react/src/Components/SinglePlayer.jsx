import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getPlayerbyId, deletePlayer } from '../API';
import PlayerCard from './PuppyCard/PlayerCard';

export default function SinglePlayer() {
    const navigate= useNavigate();
    const [ puppy, setPuppy] = useState({});
    const {id} = useParams();


    useEffect(() => {
        async function getPlayerData(){
            try{
                const puppyObj = await getPlayerbyId(id);
                if(puppyObj.data === null){
                    navigate("/")
                }
                setPuppy(puppyObj)
        }catch(err){
            console.log(err);
        }
    }
    getPlayerData();
}, [navigate]);

async function handleDelete(){
    try{
        const result = await deletePlayer(id);
        if(result.success){
            alert("Puppy successfully deleted!");
            navigate("/");
          
          }else{
            alert("Something went wrong with deleting the puppy! Please try again!")
          }
        
    }catch(err)
    {console.log(err)}
}

     return (
     <div style={{display: 'flex',
     flexDirection: "column",
     justifyContent: 'center',
     alignItems: 'center'
     }}>
        <PlayerCard player={puppy} component={"detail"}/>
        <button onClick={handleDelete}>Remove Player From Roster</button>
            </div>
     );
}

