import "./main.css";
import Cards from "../../../cards/cards";

import { useEffect, useState } from "react";
import { getList } from "../../../../service/service";
import Latter from "../../../latter/latter";
import { Link } from "react-router-dom";
import Navigation from "./navigation/navigation";
import Game from "../game/game";
import Button from "react-bootstrap/Button";

const Main = (props) => {
  const [data, setData] = useState([]);
  let latterList = [];
  useEffect(() => {
    getList(setData);
  }, []);
  data.forEach((elem) => {
    if (latterList[elem.name[0]] === undefined) {
      /* elem[0]-первый символ в названии -он же идентификатор буквы на которую мы записываем игры*/
      latterList[elem.name[0]] = [];
      latterList[elem.name[0]].push({ elem });
    } else {
      latterList[elem.name[0]].push({ elem });
    }
  });
  // ----------------------------------------------------------------------------------------
  const ServiceBlock = (props) => {
    const { services, gameId, name } = props;
    const serv = services.map((e) => {
      const id = name + String(gameId) + String(e.id);
      return (
        <Link to={"/game?id=" + e.id}>
          <Button variant="light" className="service-list" key={id}>
            {e.name}
          </Button>
          <br />
        </Link>
      );
    });
    return (
      <div className="services">
        <ul className="ul-service-list">{serv}</ul>
      </div>
    );
  };
  // ------------------------------------------------------------------------------------
  const LetterBlock = (props) => {
    const { games, letter } = props;
    const items = games.map((item) => {
      return (
        <div key={item.elem.name} className="game-div">
          <Link to={"/game?id=" + item.elem.services[0].id}>
            <Button variant="dark">{item.elem.name}</Button>
          </Link>
          <ServiceBlock services={item.elem.services} gameId={item.elem.id} name={item.elem.name} />
        </div>
      );
    });
    return (
      <div className="letter-box">
        <div className="letter-index" id={"letter" + letter}>
          {letter}
        </div>
        <br />
        <br />
        <div className="letter-game">{items}</div>
        <div className="services-block"></div>
        <hr />
      </div>
    );
  };
  let latterIndex = Object.keys(latterList).map((letter) => {
    return (
      <div>
        <LetterBlock letter={letter} games={latterList[letter]} key={letter} />
      </div>
    );
  });
  //  -----------------------------------------------------------------------------------
  return (
    <div className="main-div">
      <div className="all-games-div">{latterIndex}</div>
    </div>
  );
};

export default Main;
