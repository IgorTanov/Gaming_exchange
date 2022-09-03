import "./navigation.css"

const Navigation=()=>{
    const data=["A",'B','C','D','E','F','G','H','I','K','L','M','N','O','P','Q','R','S','T','V','W','X','Y','Z']
    const index=data.map(e=>{
        return(
            <div className="all-index-navigation" key={e}>
                <a href={"#letter"+e} >{e}</a>
            </div>
        )
    })
    return(
        <div className="navigation">
            {index}
        </div>
    )
}
export default Navigation