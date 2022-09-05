import "./main.css"
import Cards from '../../../cards/cards';
import d4 from "./d4.png"
import wow from "./wow.png"
import d3 from "./d3.png"
import { useEffect, useState } from "react";
import { getList } from "../../../../service/service";
import Latter from "../../../latter/latter";
import { Link } from "react-router-dom";
import Navigation from "./navigation/navigation";


const Main = (props) => {

  const [data, setData] = useState([])
  let latterList = [];
  useEffect(() => {
    getList(setData)


  }, [])
  data.forEach(elem => {
    if (latterList[elem.name[0]] === undefined) { /* elem[0]-первый символ в названии -он же идентификатор буквы на которую мы записываем игры*/
      latterList[elem.name[0]] = [];
      latterList[elem.name[0]].push({ elem })
    } else {
      latterList[elem.name[0]].push({ elem })
    }
  })
  // ----------------------------------------------------------------------------------------
  const ServiceBlock = (props) => {
    const { services, gameId, name } = props
    const serv = services.map(e => {
      const id = name + String(gameId) + String(e.id)
      return (
        <Link to={'/game?=' + name + "/service?=" + e.name}>
          <div className="service-list">
          <img src="" width={25} height={25}></img>
            <li key={id}>{e.name}</li>
          </div>
        </Link>
      )
    })
    return (
      <div className="services">
        <ul>
          {serv}
        </ul>
      </div>
    )
  }

  // ------------------------------------------------------------------------------------
  const LetterBlock = (props) => {
    const { games, letter } = props;
    const items = games.map((item) => {
      return (<div key={item.elem.name} className="game-div">
        <Link to={"/game?=" + item.elem.name}>
          <span className="game-name">{item.elem.name}</span>
        </Link>
        <ServiceBlock services={item.elem.services} gameId={item.elem.id} name={item.elem.name} />
      </div>)
    }
    )
    return (
      <div className="letter-box">
        <div className="letter-index" id={"letter" + letter}>{letter}</div>
        <div className="letter-game">
          {items}
        </div>
        <div className="services-block">
        </div>
      </div>)
  }
  let latterIndex = Object.keys(latterList)
    .map(letter => {
      return (<div>
        <LetterBlock letter={letter} games={latterList[letter]} key={letter} />
      </div>)
    });
  //  -----------------------------------------------------------------------------------   
  return (
    <div className="main-div">
      <div className="letter-navigation">
        <Navigation />
      </div>
      <div className="all-games-div">
        {latterIndex}
      </div>
    </div>
  )
}





export default Main


