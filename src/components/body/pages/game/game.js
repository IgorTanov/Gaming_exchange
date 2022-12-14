import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getLots, getGame } from "../../../../service/service";
import VariantsExample from "../../../spinner/spinner";
import "./game.css";
import Button from "react-bootstrap/Button";

const Game = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [gameData, setGameData] = useState();
  const id = searchParams.get("id");
  useEffect(() => {
    getLots(setData, id);
  }, []);
  useEffect(() => {
    if (data && data.games_id) {
      getGame(setGameData, data.games_id);
    }
  }, [data]);

  if (gameData === undefined) {
    return <VariantsExample />;
  }
  const gameServices = gameData.services.map((elem) => {
    return (
      <Button variant="outline-dark" key={elem.id} className="div-game-service">
        {elem.name}
      </Button>
    );
  });
  return (
    <div className="div-game-services">
      <div className="div-game-name">{gameData.name}</div>
      <div className="game-description">{gameData.description}</div>
      <div className="game-all-services">{gameServices}</div>
    </div>
  );
};

export default Game;
