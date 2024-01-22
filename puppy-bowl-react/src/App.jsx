import { BrowserRouter, Routes, Route } from "react-router-dom"
import SinglePlayer from "./Components/SinglePlayer"
import AllPlayers from "./Components/AllPlayers"
import NavBar from "./Components/NavBar"
import NewPlayerForm from "./Components/NewPlayerForm";
function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<AllPlayers/>}/>
    <Route path="/players/:id" element={<SinglePlayer />} />
    <Route path="/addNew" element={<NewPlayerForm />} />
    <Route path="*" element={<AllPlayers/>}/>
    
    </Routes>
    </BrowserRouter>
  );
}

export default App
