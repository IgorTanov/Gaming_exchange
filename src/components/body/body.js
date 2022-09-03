import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/main";
import Game from "./pages/game/game";
import "./body.css"


const Body = () => {
    return (
        <div className="body" >
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="game" element={<Game/>}/>
            </Routes>
        </div>
    )
}
export default Body