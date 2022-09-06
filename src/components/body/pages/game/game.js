import { useMemo, useState } from "react"
import Main from "../main/main"
import { useEffect } from "react"
import {useSearchParams} from "react-router-dom"
import { getGame } from "../../../../service/service"

const Game=(props)=>{
  
   const [searchParams,setSearchParams]=useSearchParams()
   const [data,setData]=useState({})
   const id=(searchParams.get("id"))
  
   useEffect(()=>{
    getGame(setData,id)
   },)
  
    return(
        <div className="main">
           GAME
        </div>
    )
}

export default Game