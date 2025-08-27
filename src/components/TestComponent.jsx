import { useEffect, useState } from "react"
import User from "./User"
const TestComponent = ({users}) => {

    return(
        <>
        
            <h2>Test</h2>
            {users.map((user,i) => <User user={user} key={i}/>)}
        </>
    )
}

export default TestComponent