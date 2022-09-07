import "./header.css"
import { Link } from "react-router-dom"


const Header = () => {
    return (
        <div className="header" >
            <div className="information-block">
                <Link to="/">
                    <div className="logo">
                        Logo
                    </div>
                </Link>


                <div>
                    <input type="text" placeholder="search"></input>
                </div>
                <div>
                    <select>
                        <option value="help">rules</option>
                        <option value="administration">administration</option>
                    </select>
                </div>
            </div>
            <div className="autorithetion-block">
                <Link to="/registration">
                    <div className="registration">
                        <button>registration</button>
                    </div>
                </Link>
                <Link to="/enter">
                    <div className="enter">
                        <button>enter</button>
                    </div>
                </Link>

            </div>
        </div>
    )
}
export default (Header)