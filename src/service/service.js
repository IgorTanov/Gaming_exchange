import { useState } from "react";
import Game from "../components/body/pages/game/game";


const getList = (setData) => {
  fetch("http://it-server.relikt.monster/api/games")
    .then((response) => response.json())
    .then((response) => {
      setData(response);
    });
};
const getLots = (setData, id) => {
  fetch("http://it-server.relikt.monster/api/lots/" + id)
    .then((response) => response.json())
    .then((response) => {
      setData(response);
    });
};
const getGame = (setGameData, setData) => {
  fetch("http://it-server.relikt.monster/api/game/" + setData)
    .then((response) => response.json())
    .then((response) => {
      setGameData(response);
    });
};

export { getList, getLots, getGame };
