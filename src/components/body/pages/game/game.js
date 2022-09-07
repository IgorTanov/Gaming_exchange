import { useMemo, useState } from "react"
import Main from "../main/main"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { getLots, getGame } from "../../../../service/service"
import VariantsExample from "../../../spinner/spinner"
import "./game.css"


const Game = (props) => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [data, setData] = useState([])
    const [gameData, setGameData] = useState()
    const id = (searchParams.get("id"))

    useEffect(() => {
        getLots(setData, id)
    }, [])
    useEffect(() => {
        if (data && data.games_id) {
            getGame(setGameData, data.games_id)
        }
    }, [data])


    if (gameData === undefined) {
        return (
            <VariantsExample/>
        )
    }

    const gameServices = gameData.services.map((elem) => {
        return (
            <div key={elem.id} className="div-game-service">
                {elem.name}
                </div>
        )
    })
    return (
        <div>
            <div className="div-game-name">{gameData.name}</div>
            <div className="game-description">{gameData.description}</div>
            <div className="game-all-services">{gameServices}</div>
            
        </div>
    )
}

export default Game