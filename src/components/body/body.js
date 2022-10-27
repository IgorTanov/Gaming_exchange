import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/main";
import Game from "./pages/game/game";
import "./body.css"
import FormRegistration from "./pages/form-registration/form-registration";
import FormEnter from "./pages/form-enter/form-enter";


const Body = () => {
    return (
        <div className="body" >
            <div>test</div>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="game" element={<Game/>}/>
                <Route path="registration" element={<FormRegistration/>}/>
                <Route path="enter" element={<FormEnter/>}/>
            </Routes>
        </div>
    )
}
export default Body