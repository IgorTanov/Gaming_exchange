import "./form-registration.css"


const FormRegistration=()=>{
return(
    <div>
        <form>
            <input type="text" placeholder="Enter your nickname"></input>
            <span className="nickname-error"></span>
            <input type="email" placeholder="Enter your mail"></input>
            <span className="mail-error" ></span>
            <input type="password" placeholder="your password"></input>
            <span className="pass-error"></span>
            <input type="password" placeholder="repeat password"></input>
            <span className="pass-error"></span>
            <input type="submit" value='registration'/> 
        </form>
    </div>
)
}
export default FormRegistration