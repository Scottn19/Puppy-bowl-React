async function getPlayers(){
    try {
        const res = await fetch(
            " https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-MT-WEB-PT/players"
            );
        const json = await res.json();
        
        return json.data.players;
    } catch (error) {
        throw error;
    }
}
async function getPlayerbyId(id) {
    try {
        const res = await fetch(
            `https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-MT-WEB-PT/players/${id}`
            );
        const json = await res.json();
        return json.data.player;
    } catch (error) {
        throw error;
    }
}

async function createPlayer(playerData){
    try{ 
          const res = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-MT-WEB-PT/players",
          { method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(playerData),
        }
          );
          const json = await res.json();
          return json;
    }catch(err){throw err}
}

async function deletePlayer(id){
    try{
        const res = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-MT-WEB-PT/players/${id}`, {method: "DELETE"})
        const json = await res.json();
    } catch(err){
        console.log(json);
        return json;
        throw err
    }

}
 export { getPlayers, getPlayerbyId, createPlayer, deletePlayer };
