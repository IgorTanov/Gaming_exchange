import { useState } from "react"
import Main from "../components/body/pages/main/main"

const getList = (setData) => {

    fetch("http://it-server.relikt.monster/api/games").then(response => response.json()).then(response => {
        setData(response)
    })
    
}

export { getList }