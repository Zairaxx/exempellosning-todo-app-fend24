import { useEffect, useState } from "react"

const User = ({user}) => {

    const [showInfo,setShowInfo] = useState(false);

//     useEffect(() => {
//     console.log("User is mounting");
// }, [])

//     useEffect(() => {
//         if(showInfo > 10 )
//         console.log("User-component updated!");
//     }, [showInfo])


    return(
    <div style={{border: "1px solid white"}}>
        <p>Namn: {user.name.first}</p>
        <button onClick={() => setShowInfo(!showInfo)}>Toggle info</button>
        {showInfo && <>
            <p>Ålder: {user.dob.age}</p>
            <p>Stad: {user.location?.city}</p>
        </>}
    </div>)
}

export default User