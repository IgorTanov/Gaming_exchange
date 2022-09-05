import { useState } from "react"
import Main from "../main/main"
import { useEffect } from "react"
import{useSearchParams} from "react-router-dom"
import { getList } from "../../../../service/service"

const Game=(props)=>{
   const [searchParams,setSearchParams]=useSearchParams()
   const game=(searchParams.get("game")) || 1;
   
    console.log(game)
    return(
        <div className="main">
           GAME
        </div>
    )
}

export default Game