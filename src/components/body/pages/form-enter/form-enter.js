

const FormEnter = () => {
    return (
        <div className="form-enter-div">
            <form>
                <input type="text" placeholder="Your nickname or mail"></input>
                <span className="nickname-error"></span>
                <input type="password" placeholder="your password"></input>
                <span className="pass-error"></span>
                <input type="submit" value='enter' />
            </form>
        </div>
    )
}


export default FormEnter