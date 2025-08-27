import { useEffect, useState } from "react"

const User = ({user}) => {

    const [showInfo,setShowInfo] = useState(false);


    useEffect(() => {
    console.log("User is mounting");
}, [])

    useEffect(() => {
        if(showInfo > 10 )
        console.log("User-component updated!");
    }, [showInfo])


    return(
    <div style={{border: "1px solid white"}}>
        <p>Namn: {user.name}</p>
        <button onClick={() => setShowInfo(!showInfo)}>Toggle info</button>
        {showInfo && <div>{user.age < 30 ? <p>Ålder: {user.age}</p> : <p>Ålder:30+</p>}
        <p>Stad: {user.location?.city}</p></div>}
    </div>)
}

export default User