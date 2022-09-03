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

  const ServiceBlock = (props) => {
    const {service, name, id}  = props
    const serviceElements = props.service.map(elem => {
      const key = (String(props.name) + String(props.id) + String(elem.id)).replace(/ /g, '')
console.log(key)
      return (

        <li key={key}>{elem}</li>
      )
    })
    return (
      <div className="service-block">
        <ul>
          {serviceElements}
        </ul>
      </div>
    )
  }

  const LetterBlock = (props) => {
    const { games, letter } = props;
    const items = games.map((item) => {
      // console.log(item.elem.name)
      // console.log(item.elem.id)
      return (<div key={item.elem.name} className="game-div">
        <span>{item.elem.name}</span>
        <ServiceBlock service={item.elem.services} name={item.elem.name} key={item.elem.id} />
      </div>)
    }
    )
    // const serviceElements=Object.keys(latterList).map(e=>{

    // })



    return (
      <div className="letter-box">
        <div className="letter-index" id={"letter" + letter}>{letter}</div>
        <div className="letter-game">
          {items}
        </div>
      </div>)
  }
  let latterIndex = Object.keys(latterList)
    .map(letter => {
      return (<LetterBlock letter={letter} games={latterList[letter]} key={letter} />)
    });
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


