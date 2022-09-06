import { useState } from "react"
import Main from "../components/body/pages/main/main"
import Game from "../components/body/pages/game/game"
import {useSearchParams} from "react-router-dom"

const getList = (setData) => {
    fetch("http://it-server.relikt.monster/api/games").then(response => response.json()).then(response => {
        setData(response)
    })
}
const getGame=(setData,id)=>{
    fetch("http://it-server.relikt.monster/api/game/"+id).then(response =>response.json()).then(response => {
        setData(response.games_id)
 })
}
// response.json()   .then(response =>response.json())
export { getList,getGame }